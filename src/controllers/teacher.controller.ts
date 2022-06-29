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
import { CreateTeacherDto } from "src/Dtos/teacher/create-teacher.dto";
import { UpdateTeacherDto } from "src/Dtos/teacher/update-teacher.dto";
import { TeacherService } from "src/services/teacher.service";
@Controller("teacher")
export class TeacherController {
	constructor(private teacherService: TeacherService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	index(@Query() params: any) {
		const response = this.teacherService.getAll();

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
		const response = this.teacherService.getOne(id);
		return {
			data: response,
			message: `show`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	store(@Body() payload: CreateTeacherDto) {
		const response = this.teacherService.create(payload);
		return {
			data: response,
			message: `created`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateTeacherDto
	) {
		const response = this.teacherService.update(id, payload);
		return {
			data: response,
			message: `update`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	destroy(@Param("id", ParseIntPipe) id: number) {
		const response = this.teacherService.delete(id);
		return {
			data: response,
			message: `deleted`,
		};
	}
}
