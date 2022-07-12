import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateLaboratoryDto } from "src/laboratories/Dtos/create-laboratory.dto";
import { UpdateLaboratoryDto } from "src/laboratories/Dtos/update-laboratory.dto";
import { LaboratoryEntity } from "./entities/laboratory.entity";

@Injectable()
export class LaboratoryService {
	laboratories: LaboratoryEntity[] = [];
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
		const newLaboratory = {
			id: this.id,
			...payload
		};
		this.id++
		this.laboratories.push(newLaboratory)
		return newLaboratory;
	}

	update(id: number, payload: UpdateLaboratoryDto) {
		const laboratory = this.findOne(id);
		const index = this.laboratories.findIndex(
			(laboratory) => laboratory.id == id
		);
		if(index == -1){
			throw new NotFoundException("Laboratorio no encontrado");
		}
		this.laboratories[index] = {
			...laboratory,
			...payload,
		};
		return this.laboratories[index]
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
