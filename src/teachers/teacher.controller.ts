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
import { CreateTeacherDto } from "src/teachers/Dtos/create-teacher.dto";
import { UpdateTeacherDto } from "src/teachers/Dtos/update-teacher.dto";
import { TeacherService } from "src/teachers/teacher.service";
@Controller("teacher")
export class TeacherController {
	constructor(private teacherService: TeacherService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response = this.teacherService.findAll();
		return response;
		// return {
		//     data: response,
		//     message: `index`,
		// };
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.teacherService.findOne(id);
		return response;
		// return {
		//     data: response,
		//     message: `show`,
		// };
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateTeacherDto) {
		const response = this.teacherService.create(payload);
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
		@Body() payload: UpdateTeacherDto
	) {
		const response = this.teacherService.update(id, payload);
		return response;
		// return {
		//     data: response,
		//     message: `updated ${id}`,
		// };
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	remove(@Param("id", ParseIntPipe) id: number) {
		const response = this.teacherService.remove(id);
		return response;
		// return {
		//     data: response,
		//     message: `deleted`,
		// };
	}
}