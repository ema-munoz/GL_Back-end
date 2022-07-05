import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateDetailLabTsubjectDto } from "src/detail_lab_tsubject/Dtos/create-detail-tsubject.dto";
import { UpdateDetailLabTsubjectDto } from "src/detail_lab_tsubject/Dtos/update-detail-tsubject.dto";
import { Repository } from "typeorm";
import { DetailLabTsubjectEntity } from "./entities/detail-lab-tsubject.entity";

@Injectable()
export class DetailLabTsubjectService {
	dtltSubjects: any[] = [];
	id = 1;

	findAll() {
		return this.dtltSubjects;
	}

	findOne(id: number) {
		const dtltSubject = this.dtltSubjects.find(
			(dtltSubject) => dtltSubject.id == id
		);
		if (dtltSubject == undefined) {
			throw new NotFoundException("Detalle no encontrado");
		}

		return dtltSubject;
	}

	create(payload: CreateDetailLabTsubjectDto) {
		const data = {
			id: this.id,
			date: payload.date,
		};
		this.id++;
		this.dtltSubjects.push(data);
		return data;
	}

	update(id: number, payload: UpdateDetailLabTsubjectDto) {
		const index = this.dtltSubjects.findIndex(
			(dtltSubject) => dtltSubject.id == id
		);
		if (index == -1) {
			throw new NotFoundException("Detalle no encontrado");
		}
		this.dtltSubjects[index]["date"] = payload.date;
		return this.dtltSubjects[index];
	}

	delete(id: number) {
		const index = this.dtltSubjects.findIndex(
			(dtltSubject) => dtltSubject.id == id
		);
		if (index == -1) {
			throw new NotFoundException("Detalle no encontrado");
		}
		this.dtltSubjects.splice(index, 1);
		return this.dtltSubjects;
	}
}
