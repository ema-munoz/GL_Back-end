import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSubjectDto } from "src/subjects/Dtos/create-subject.dto";
import { UpdateSubjectDto } from "src/subjects/Dtos/update-subject.dto";
import { Repository } from "typeorm";
import { SubjectEntity } from "./entities/subject.entity";

@Injectable()
export class SubjectService {
	subjects: any[] = [];
	id = 1;

	findAll() {
		return this.subjects;
	}

	findOne(id: number) {
		const subject = this.subjects.find((subject) => subject.id == id);
		if (subject == undefined) {
			throw new NotFoundException("Materia no encontrada");
		}

		return subject;
	}

	create(payload: CreateSubjectDto) {
		const data = {
			id: this.id,
			name: payload.name,
		};
		this.id++;
		this.subjects.push(data);
		return data;
	}

	update(id: number, payload: UpdateSubjectDto) {
		const index = this.subjects.findIndex((subject) => subject.id == id);
		if (index == -1) {
			throw new NotFoundException("Materia no encontrada");
		}
		this.subjects[index]["name"] = payload.name;
		return this.subjects[index];
	}

	delete(id: number) {
		const index = this.subjects.findIndex((subject) => subject.id == id);
		if (index == -1) {
			throw new NotFoundException("Materia no encontrada");
		}
		this.subjects.splice(index, 1);
		return this.subjects;
	}
}
