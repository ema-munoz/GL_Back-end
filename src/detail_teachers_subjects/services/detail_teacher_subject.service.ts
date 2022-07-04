import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDetailTeacherSubjectDto } from "src/detail_teachers_subjects/dtos/create-detail_teacher_subject.dto";
import { UpdateDetailTeacherSubject } from "src/detail_teachers_subjects/dtos/update-detail_teacher_subject.dto";

@Injectable()
export class DetailTeacherSubjectService {
	detailTeachersSubjects: any[] = [];
	id = 1;

	getAll() {
		return this.detailTeachersSubjects;
	}

	getOne(id: number) {
		const teacherSubject = this.detailTeachersSubjects.find(
			(teacherSubject) => teacherSubject.id == id
		);
		if (teacherSubject == undefined) {
			throw new NotFoundException(
				"Detalle docente_asignatura no encontrada"
			);
		}

		return teacherSubject;
	}

	filter(search: string) {
		const teacherSubject = this.detailTeachersSubjects.filter(
			(teacherSubject) => teacherSubject.date == search
		);
		return teacherSubject;
	}

	create(payload: CreateDetailTeacherSubjectDto) {
		const data = {
			id: this.id,
			date: payload.date,
			day: payload.day,
			hourStart: payload.hourStart,
			hourFinish: payload.hourFinish,
		};
		this.id++;
		this.detailTeachersSubjects.push(data);
		return data;
	}

	update(id: number, payload: UpdateDetailTeacherSubject) {
		const index = this.detailTeachersSubjects.findIndex(
			(teacherSubject) => teacherSubject.id == id
		);
		if (index == -1) {
			throw new NotFoundException(
				"Detalle docente_asignatura no encontrada"
			);
		}
		this.detailTeachersSubjects[index]["date"] = payload.date;
		this.detailTeachersSubjects[index]["day"] = payload.day;
		this.detailTeachersSubjects[index]["hourStart"] = payload.hourStart;
		this.detailTeachersSubjects[index]["hourFinish"] = payload.hourFinish;
		return this.detailTeachersSubjects[index];
	}

	delete(id: number) {
		const index = this.detailTeachersSubjects.findIndex(
			(teacherSubject) => teacherSubject.id == id
		);
		if (index == -1) {
			throw new NotFoundException(
				"Detalle docente_asignatura no encontrado"
			);
		}
		this.detailTeachersSubjects.splice(index, 1);
		return this.detailTeachersSubjects;
	}
}
