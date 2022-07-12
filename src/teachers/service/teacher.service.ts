import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTeacherDto } from "src/teachers/Dtos/create-teacher.dto";
import { UpdateTeacherDto } from "src/teachers/Dtos/update-teacher.dto";

@Injectable()
export class TeacherService {
	teachers: any[] = [];
	id = 1;

	// Busca a todos los Profesores.
	findAll() {
		return this.teachers;
	}

	// Busca a un Profesor.
	findOne(id: number) {
		const teacher = this.teachers.find((teacher) => teacher.id == id);
		if (teacher == undefined) {
			throw new NotFoundException("Profesor no encontrado");
		}
		return teacher;
	}

	// Crea a un Profesor.
	create(payload: CreateTeacherDto) {
		const data = {
			id: this.id,
			identityCard: payload.identityCard,
			names: payload.names,
			lastNames: payload.lastNames,
			institutionalMail: payload.institutionalMail,
			cellPhone: payload.cellPhone,
		};
		this.id++;
		this.teachers.push(data);
		return data;
	}

	// Actualiza a un Profesor.
	update(id: number, payload: UpdateTeacherDto) {
		const index = this.teachers.findIndex((teacher) => teacher.id == id);
		if (index == -1) {
			throw new NotFoundException("Profesor no encontrado");
		}
		this.teachers[index]["identityCard"] = payload.identityCard;
		this.teachers[index]["identityCard"] = payload.identityCard;
		this.teachers[index]["lastNames"] = payload.lastNames;
		this.teachers[index]["institutionalMail"] = payload.institutionalMail;
		this.teachers[index]["institutionalMail"] = payload.institutionalMail;
		return this.teachers[index];
	}

	// Elimina a un Profesor.
	delete(id: number) {
		const index = this.teachers.findIndex((teacher) => teacher.id == id);
		if (index == -1) {
			throw new NotFoundException("Profesor no encontrado");
		}
		this.teachers.splice(index, 1);
		return this.teachers;
	}
}
