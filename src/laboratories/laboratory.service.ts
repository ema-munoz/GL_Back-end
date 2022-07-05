import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateLaboratoryDto } from "src/laboratories/Dtos/create-laboratory.dto";
import { UpdateLaboratoryDto } from "src/laboratories/Dtos/update-laboratory.dto";
import { Repository } from "typeorm";
import { LaboratoryEntity } from "./entities/laboratory.entity";

@Injectable()
export class LaboratoryService {
	laboratories: any[] = [];
	id = 1;

	findAll() {
		return this.laboratories;
	}

	findOne(id: number) {
		const laboratory = this.laboratories.find(
			(laboratory) => laboratory.id == id
		);
		if (laboratory == undefined) {
			throw new NotFoundException("Laboratorio no encontrado");
		}

		return laboratory;
	}

	create(payload: CreateLaboratoryDto) {
		const data = {
			id: this.id,
			name: payload.name,
			capacity: payload.capacity,
			description: payload.description,
		};
		this.id++;
		this.laboratories.push(data);
		return data;
	}

	update(id: number, payload: UpdateLaboratoryDto) {
		const index = this.laboratories.findIndex(
			(laboratory) => laboratory.id == id
		);
		if (index == -1) {
			throw new NotFoundException("Laboratorio no encontrado");
		}
		this.laboratories[index]["name"] = payload.name;
		this.laboratories[index]["capacity"] = payload.capacity;
		this.laboratories[index]["description"] = payload.description;
		return this.laboratories[index];
	}

	delete(id: number) {
		const index = this.laboratories.findIndex(
			(laboratory) => laboratory.id == id
		);
		if (index == -1) {
			throw new NotFoundException("Laboratorio no encontrado");
		}
		this.laboratories.splice(index, 1);
		return this.laboratories;
	}
}
