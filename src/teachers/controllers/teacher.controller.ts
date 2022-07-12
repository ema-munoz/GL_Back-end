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
import { CreateTeacherDto } from "../Dtos/create-teacher.dto";
import { UpdateTeacherDto } from "../Dtos/update-teacher.dto";
import { TeacherService } from "../services/teacher.service";
@Controller("teachers")
export class TeacherController {
	constructor(private teacherService: TeacherService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response = this.teacherService.findAll();
		// return response;

		return {
			data: response,
			message: `Lista de Profesores`,
		};
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.teacherService.findOne(id);
		// return response;

		return {
			data: response,
			message: `Profesor ${id}`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateTeacherDto) {
		const response =
			this.teacherService.create(payload);
		// return response;

		return {
			data: response,
			message: `Profesor creado`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateTeacherDto
	) {
		const response = this.teacherService.update(
			id,
			payload
		);
		// return response;

		return {
			data: response,
			message: `El Profesor: ${id} se actualizo`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	delete(@Param("id", ParseIntPipe) id: number) {
		const response = this.teacherService.delete(id);
		// return response;

		return {
			data: response,
			message: `El Profesor ${id} se eliminó correctamente.`,
		};
	}
}
