import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateDetailLabTsubjectDto } from "src/detail_lab_tsubject/Dtos/create-detail-tsubject.dto";
import { UpdateDetailLabTsubjectDto } from "src/detail_lab_tsubject/Dtos/update-detail-tsubject.dto";
import { Repository } from "typeorm";
import { DetailLabTsubjectEntity } from "./entities/detail-lab-tsubject.entity";

@Injectable()
export class DetailLabTsubjectService {
	constructor(
		@InjectRepository(DetailLabTsubjectEntity)
		private dltsubjectRepository: Repository<DetailLabTsubjectEntity>
	) {}

	async create(payload: CreateDetailLabTsubjectDto) {
		const newDltsubject = this.dltsubjectRepository.create(payload);
		return await this.dltsubjectRepository.save(newDltsubject);
	}

	async findAll() {
		return await this.dltsubjectRepository.find();
	}

	async findOne(id: number) {
		const dltsubject = await this.dltsubjectRepository.findOne({
			where: {
				id: id,
			},
		});
		if (dltsubject === null) {
			throw new NotFoundException("El detalle no se encontro");
		}
		return dltsubject;
	}

	async remove(id: number) {
		return await this.dltsubjectRepository.delete(id);
	}

	async update(id: number, payload: UpdateDetailLabTsubjectDto) {
		const dltsubject = await this.dltsubjectRepository.findOne({
			where: {
				id: id,
			},
		});
		if (dltsubject === null) {
			throw new NotFoundException("El detalle no se encontro");
		}
		this.dltsubjectRepository.merge(dltsubject, payload);
		return this.dltsubjectRepository.save(dltsubject);
	}
}
