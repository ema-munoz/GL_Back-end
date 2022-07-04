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

import { CreateSemesterDto } from "src/Dtos/semester/create-semester.dto";
import { UpdateSemesterDto } from "src/semester/Dtos/update-semester.dto";
import { SemesterService } from "src/semester/semester.service";
@Controller("semester")
export class SemesterController {
	constructor(private semesterService: SemesterService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	index(@Query() params: any) {
		const response = this.semesterService.getAll();

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
		const response = this.semesterService.getOne(id);
		return {
			data: response,
			message: `show`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	store(@Body() payload: CreateSemesterDto) {
		const response = this.semesterService.create(payload);
		return {
			data: response,
			message: `created`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateSemesterDto
	) {
		const response = this.semesterService.update(id, payload);
		return {
			data: response,
			message: `update`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	destroy(@Param("id", ParseIntPipe) id: number) {
		const response = this.semesterService.delete(id);
		return {
			data: response,
			message: `deleted`,
		};
	}
}
