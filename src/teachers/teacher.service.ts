import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTeacherDto } from "src/teachers/Dtos/create-teacher.dto";
import { UpdateTeacherDto } from "src/teachers/Dtos/update-teacher.dto";
import { Repository } from "typeorm";
import { TeacherEntity } from "./entities/teacher.entity";

@Injectable()
export class TeacherService {
	constructor(
		@InjectRepository(TeacherEntity)
		private teacherRepository: Repository<TeacherEntity>
	) {}

	async create(payload: CreateTeacherDto) {
		const newTeacher = this.teacherRepository.create(payload);
		return await this.teacherRepository.save(newTeacher);
	}

	async findAll() {
		return await this.teacherRepository.find();
	}

	async findOne(id: number) {
		const teacher = await this.teacherRepository.findOne({
			where: {
				id: id,
			},
		});
		if (teacher === null) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		return teacher;
	}

	async remove(id: number) {
		return await this.teacherRepository.delete(id);
	}

	async update(id: number, payload: UpdateTeacherDto) {
		const teacher = await this.teacherRepository.findOne({
			where: {
				id: id,
			},
		});
		if (teacher === null) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		this.teacherRepository.merge(teacher, payload);
		return this.teacherRepository.save(teacher);
	}
}
