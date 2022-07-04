import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSubjectDto } from "src/subjects/Dtos/create-subject.dto";
import { UpdateSubjectDto } from "src/subjects/Dtos/update-subject.dto";
import { Repository } from "typeorm";
import { SubjectEntity } from "./entities/subject.entity";

@Injectable()
export class SubjectService {
	constructor(
		@InjectRepository(SubjectEntity)
		private subjectRepository: Repository<SubjectEntity>
	) {}

	async create(payload: CreateSubjectDto) {
		const newSubject = this.subjectRepository.create(payload);
		return await this.subjectRepository.save(newSubject);
	}

	async findAll() {
		return await this.subjectRepository.find();
	}

	async findOne(id: number) {
		const subject = await this.subjectRepository.findOne({
			where: {
				id: id,
			},
		});
		if (subject === null) {
			throw new NotFoundException("La materia no se encontro");
		}
		return subject;
	}

	async remove(id: number) {
		return await this.subjectRepository.delete(id);
	}

	async update(id: number, payload: UpdateSubjectDto) {
		const subject = await this.subjectRepository.findOne({
			where: {
				id: id,
			},
		});
		if (subject === null) {
			throw new NotFoundException("La materia no se encontro");
		}
		this.subjectRepository.merge(subject, payload);
		return this.subjectRepository.save(subject);
	}
}
