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
import { CreateDetailTeacherSubjectDto } from "src/Dtos/detail_teacher_subject/create-detail_teacher_subject.dto";
import { UpdateDetailTeacherSubject } from "src/Dtos/detail_teacher_subject/update-detail_teacher_subject.dto";
import { DetailTeacherSubjectService } from "src/services/detail_teacher_subject.service";

@Controller("detail-teacher-subject")
export class DetailTeacherSubjectController {
	constructor(
		private detailTeacherSubjectService: DetailTeacherSubjectService
	) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	index(@Query() params: any) {
		const response = this.detailTeacherSubjectService.getAll();

		return {
			data: response,
			message: `Lista de detalle docente_asignatura`,
		};
	}

	@Get("filter")
	@HttpCode(HttpStatus.OK)
	filter(@Query("search") search: string) {
		return {
			data: search,
			message: "Resultado de busqueda filtrada",
		};
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	show(@Param("id", ParseIntPipe) id: number) {
		const response = this.detailTeacherSubjectService.getOne(id);
		return {
			data: response,
			message: `Detalle docente_asignatura ${id}`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	store(@Body() payload: CreateDetailTeacherSubjectDto) {
		const response = this.detailTeacherSubjectService.create(payload);
		return {
			data: response,
			message: `Detalle docente_asignatura creada`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.OK)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateDetailTeacherSubject
	) {
		const response = this.detailTeacherSubjectService.update(id, payload);
		return {
			data: response,
			message: `Actualizado detalle docente_asignatura ${id}`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.OK)
	destroy(@Param("id", ParseIntPipe) id: number) {
		const response = this.detailTeacherSubjectService.delete(id);
		return {
			data: response,
			message: `Eliminado correctamente detalle docente_asignatura ${id}`,
		};
	}
}
