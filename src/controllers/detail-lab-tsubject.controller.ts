import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Query,
} from "@nestjs/common";
import { CreateDetailLabTsubjectDto } from "src/detail_lab_tsubject/Dtos/create-detail-tsubject.dto";
import { UpdateDetailLabTsubjectDto } from "src/detail_lab_tsubject/Dtos/update-detail-tsubject.dto";
import { DetailLabTsubjectService } from "src/services/detail-lab-tsubject.service";

@Controller("detail-lab-tsubject")
export class DetailLabTsubjectController {
	constructor(private detailLabTsubjectService: DetailLabTsubjectService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	index(@Query() params: any) {
		const response = this.detailLabTsubjectService.getAll();

		return {
			data: response,
			message: `index`,
		};
	}

	@Get("filter")
	@HttpCode(HttpStatus.OK)
	filter(@Query("search") search: string) {
		return {
			data: search,
			message: `filter`,
		};
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	show(@Param("id", ParseIntPipe) id: number) {
		const response = this.detailLabTsubjectService.getOne(id);
		return {
			data: response,
			message: `show`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	store(@Body() payload: CreateDetailLabTsubjectDto) {
		const response = this.detailLabTsubjectService.create(payload);
		return {
			data: response,
			message: `created`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateDetailLabTsubjectDto
	) {
		const response = this.detailLabTsubjectService.update(id, payload);
		return {
			data: response,
			message: `update`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	destroy(@Param("id", ParseIntPipe) id: number) {
		const response = this.detailLabTsubjectService.delete(id);
		return {
			data: response,
			message: `deleted`,
		};
	}
}
