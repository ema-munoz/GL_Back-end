import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateLaboratoryDto } from "src/laboratories/Dtos/create-laboratory.dto";
import { UpdateLaboratoryDto } from "src/laboratories/Dtos/update-laboratory.dto";
import { Repository } from "typeorm";
import { LaboratoryEntity } from "./entities/laboratory.entity";

@Injectable()
export class LaboratoryService {
	constructor(
		@InjectRepository(LaboratoryEntity)
		private laboratoryRepository: Repository<LaboratoryEntity>
	) {}

	async create(payload: CreateLaboratoryDto) {
		const newLaboratory = this.laboratoryRepository.create(payload);
		return await this.laboratoryRepository.save(newLaboratory);
	}

	async findAll() {
		return await this.laboratoryRepository.find();
	}

	async findOne(id: number) {
		const laboratory = await this.laboratoryRepository.findOne({
			where: {
				id: id,
			},
		});
		if (laboratory === null) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		return laboratory;
	}

	async remove(id: number) {
		return await this.laboratoryRepository.delete(id);
	}

	async update(id: number, payload: UpdateLaboratoryDto) {
		const laboratory = await this.laboratoryRepository.findOne({
			where: {
				id: id,
			},
		});
		if (laboratory === null) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		this.laboratoryRepository.merge(laboratory, payload);
		return this.laboratoryRepository.save(laboratory);
	}
}
