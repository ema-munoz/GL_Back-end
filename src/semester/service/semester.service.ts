import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateSemesterDto } from "src/semester/Dtos/create-semester.dto";
import { UpdateSemesterDto } from "src/semester/Dtos/update-semester.dto";

@Injectable()
export class SemesterService {
	semesters: any[] = [];
	id = 1;

	// Busca a todos los Semestres.
	findAll() {
		return this.semesters;
	}

	// Busca a un Semestre.
	findOne(id: number) {
		const semester = this.semesters.find((semester) => semester.id == id);
		if (semester == undefined) {
			throw new NotFoundException("Semestre no encontrado");
		}
		return semester;
	}

	// Crea a un Semestre.
	create(payload: CreateSemesterDto) {
		const data = {
			id: this.id,
			name: payload.name,
		};
		this.id++;
		this.semesters.push(data);
		return data;
	}

	// Actualiza a un Semestre.
	update(id: number, payload: UpdateSemesterDto) {
		const index = this.semesters.findIndex((semester) => semester.id == id);
		if (index == -1) {
			throw new NotFoundException("Semestre no encontrado");
		}
		this.semesters[index]["name"] = payload.name;
		return this.semesters[index];
	}

	// Elimina a un Semestre.
	delete(id: number) {
		const index = this.semesters.findIndex((semester) => semester.id == id);
		if (index == -1) {
			throw new NotFoundException("Semestre no encontrado");
		}
		this.semesters.splice(index, 1);
		return this.semesters;
	}
}
