import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSemesterDto } from "src/semester/Dtos/create-semester.dto";
import { UpdateSemesterDto } from "src/semester/Dtos/update-semester.dto";
import { Repository } from "typeorm";
import { SemesterEntity } from "./entities/semester.entity";

@Injectable()
export class SemesterService {
	constructor(
		@InjectRepository(SemesterEntity)
		private semesterRepository: Repository<SemesterEntity>
	) {}

	async create(payload: CreateSemesterDto) {
		const newSemester = this.semesterRepository.create(payload);
		return await this.semesterRepository.save(newSemester);
	}

	async findAll() {
		return await this.semesterRepository.find();
	}

	async findOne(id: number) {
		const semester = await this.semesterRepository.findOne({
			where: {
				id: id,
			},
		});
		if (semester === null) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		return semester;
	}

	async remove(id: number) {
		return await this.semesterRepository.delete(id);
	}

	async update(id: number, payload: UpdateSemesterDto) {
		const semester = await this.semesterRepository.findOne({
			where: {
				id: id,
			},
		});
		if (semester === null) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		this.semesterRepository.merge(semester, payload);
		return this.semesterRepository.save(semester);
	}
}
