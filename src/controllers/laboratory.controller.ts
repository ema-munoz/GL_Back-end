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
import { CreateLaboratoryDto } from "src/Dtos/laboratory/create-laboratory.dto";
import { UpdateLaboratoryDto } from "src/Dtos/laboratory/update-laboratory.dto";
import { LaboratoryService } from "src/services/laboratory.service";
@Controller("laboratory")
export class LaboratoryController {
	constructor(private laboratoryService: LaboratoryService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	index(@Query() params: any) {
		const response = this.laboratoryService.getAll();

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
		const response = this.laboratoryService.getOne(id);
		return {
			data: response,
			message: `show`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	store(@Body() payload: CreateLaboratoryDto) {
		const response = this.laboratoryService.create(payload);
		return {
			data: response,
			message: `created`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateLaboratoryDto
	) {
		const response = this.laboratoryService.update(id, payload);
		return {
			data: response,
			message: `update`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	destroy(@Param("id", ParseIntPipe) id: number) {
		const response = this.laboratoryService.delete(id);
		return {
			data: response,
			message: `deleted`,
		};
	}
}
