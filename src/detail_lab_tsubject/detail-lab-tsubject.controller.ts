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
import { CreateDetailLabTsubjectDto } from "src/detail_lab_tsubject/Dtos/create-detail-tsubject.dto copy";
import { UpdateDetailLabTsubjectDto } from "src/detail_lab_tsubject/Dtos/update-detail-tsubject.dto";
import { DetailLabTsubjectService } from "src/detail_lab_tsubject/detail-lab-tsubject.service";

@Controller("detail-lab-tsubject")
export class DetailLabTsubjectController {
	constructor(private detailLabTsubjectService: DetailLabTsubjectService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response = this.detailLabTsubjectService.findAll();
		return response;

		// return {
		//     data: response,
		//     message: `index`,
		// };
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.detailLabTsubjectService.findOne(id);
		return response;

		// return {
		//     data: response,
		//     message: `show`,
		// };
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateDetailLabTsubjectDto) {
		const response = this.detailLabTsubjectService.create(payload);
		return response;

		// return {
		//     data: response,
		//     message: `created`,
		// };
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateDetailLabTsubjectDto
	) {
		const response = this.detailLabTsubjectService.update(id, payload);
		return response;

		// return {
		//     data: response,
		//     message: `updated ${id}`,
		// };
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	remove(@Param("id", ParseIntPipe) id: number) {
		const response = this.detailLabTsubjectService.remove(id);
		return response;

		// return {
		//     data: response,
		//     message: `deleted`,
		// };
	}
}
