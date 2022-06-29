import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTeacherDto } from "src/Dtos/teacher/create-teacher.dto";
import { UpdateTeacherDto } from "src/Dtos/teacher/update-teacher.dto";

@Injectable()
export class TeacherService {
	teachers: any[] = [];
	id = 1;

	getAll() {
		return this.teachers;
	}

	getOne(id: number) {
		const teacher = this.teachers.find((teacher) => teacher.id == id);
		if (teacher == undefined) {
			throw new NotFoundException("El profesor no se encontro");
		}

		return teacher;
	}

	filter(search: string) {
		const teachers = this.teachers.filter(
			(teacher) => teacher.name == search
		);
		return teachers;
	}

	create(payload: CreateTeacherDto) {
		const data = {
			id: this.id,
			names: payload.names,
			lastNames: payload.lastNames,
			institutionalMail: payload.institutionalMail,
			phone: payload.phone,
		};
		this.id++;
		this.teachers.push(data);
		return data;
	}

	update(id: number, payload: UpdateTeacherDto) {
		const index = this.teachers.findIndex((teacher) => teacher.id == id);
		if (index == -1) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		this.teachers[index]["names"] = payload.names;
		this.teachers[index]["lastNames"] = payload.lastNames;
		this.teachers[index]["institutionalMail"] = payload.institutionalMail;
		this.teachers[index]["phone"] = payload.phone;
		return this.teachers[index];
	}

	delete(id: number) {
		const index = this.teachers.findIndex((teacher) => teacher.id == id);
		if (index == -1) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		this.teachers.splice(index, 1);
		return true;
	}
}
