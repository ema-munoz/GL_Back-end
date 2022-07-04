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

import { CreateSemesterDto } from "src/semester/Dtos/create-semester.dto";
import { UpdateSemesterDto } from "src/semester/Dtos/update-semester.dto";
import { SemesterService } from "src/semester/semester.service";
@Controller("semester")
export class SemesterController {
	constructor(private semesterService: SemesterService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response = this.semesterService.findAll();
		return response;

		// return {
		//     data: response,
		//     message: `index`,
		// };
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.semesterService.findOne(id);
		return response;

		// return {
		//     data: response,
		//     message: `show`,
		// };
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateSemesterDto) {
		const response = this.semesterService.create(payload);
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
		@Body() payload: UpdateSemesterDto
	) {
		const response = this.semesterService.update(id, payload);
		return response;

		// return {
		//     data: response,
		//     message: `updated ${id}`,
		// };
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	remove(@Param("id", ParseIntPipe) id: number) {
		const response = this.semesterService.remove(id);
		return response;

		// return {
		//     data: response,
		//     message: `deleted`,
		// };
	}
}
