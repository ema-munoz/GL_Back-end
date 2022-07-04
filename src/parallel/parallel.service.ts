import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateParallelDto } from "src/parallel/Dtos/create-parallel.dto";
import { UpdateParallelDto } from "src/parallel/Dtos/update-parallel.dto";
import { Repository } from "typeorm";
import { Paralelo } from "./entities/parallel.entity";

@Injectable()
export class ParallelService {
	constructor(
		@InjectRepository(Paralelo)
		private parallelRepository: Repository<Paralelo>
	) {}

	async create(payload: CreateParallelDto) {
		const newParallel = this.parallelRepository.create(payload);
		return await this.parallelRepository.save(newParallel);
	}

	async findAll() {
		return await this.parallelRepository.find();
	}

	async findOne(id: number) {
		const parallel = await this.parallelRepository.findOne({
			where: {
				id: id,
			},
		});
		if (parallel === null) {
			throw new NotFoundException(
				"El estado del laboratorio no se encontro"
			);
		}
		return parallel;
	}

	async remove(id: number) {
		return await this.parallelRepository.delete(id);
	}

	async update(id: number, payload: UpdateParallelDto) {
		const parallel = await this.parallelRepository.findOne({
			where: {
				id: id,
			},
		});
		if (parallel === null) {
			throw new NotFoundException(
				"El estado del laboratorio no se encontro"
			);
		}
		this.parallelRepository.merge(parallel, payload);
		return this.parallelRepository.save(parallel);
	}
}
