import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateSemesterDto } from "src/Dtos/semester/create-semester.dto";
import { UpdateSemesterDto } from "src/semester/Dtos/update-semester.dto";

@Injectable()
export class SemesterService {
	semesters: any[] = [];
	id = 1;

	getAll() {
		return this.semesters;
	}

	getOne(id: number) {
		const semester = this.semesters.find((semester) => semester.id == id);
		if (semester == undefined) {
			throw new NotFoundException("El laboratorio no se encontro");
		}

		return semester;
	}

	filter(search: string) {
		const semesters = this.semesters.filter(
			(semester) => semester.name == search
		);
		return semesters;
	}

	create(payload: CreateSemesterDto) {
		const data = {
			id: this.id,
			name: payload.name,
		};
		this.id++;
		this.semesters.push(data);
		return data;
	}

	update(id: number, payload: UpdateSemesterDto) {
		const index = this.semesters.findIndex((semester) => semester.id == id);
		if (index == -1) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		this.semesters[index]["name"] = payload.name;
		return this.semesters[index];
	}

	delete(id: number) {
		const index = this.semesters.findIndex((semester) => semester.id == id);
		if (index == -1) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		this.semesters.splice(index, 1);
		return true;
	}
}
