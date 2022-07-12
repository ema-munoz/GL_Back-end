import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateLaboratoryDto } from "src/laboratories/Dtos/create-laboratory.dto";
import { UpdateLaboratoryDto } from "src/laboratories/Dtos/update-laboratory.dto";
import { LaboratoryEntity } from "./entities/laboratory.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class LaboratoryService {
	constructor(
        @InjectRepository(LaboratoryEntity) private laboratoryRepo: Repository<LaboratoryEntity>,
    ) { }
	// Busca a todos los Profesores.
	async findAll() {
		return await this.laboratoryRepo;
	}

	// Busca a un Profesor.
	async findOne(id: number) {
		const laboratory = await this.laboratoryRepo.findOne(
			{
				where: {id:id}
			}
		)
		if (laboratory == null) {
			throw new NotFoundException("Profesor no encontrado");
		}
		return laboratory;
	}

	// Crea a un Profesor.
	create(payload: CreateLaboratoryDto) {
		const newLaboratory = this.laboratoryRepo.create(payload);
		return this.laboratoryRepo.save(newLaboratory);
	}

	// Actualiza a un Profesor.
	async update(id: number, payload: UpdateLaboratoryDto) {
        const laboratory = await this.laboratoryRepo.findOne({ where: {id:id}});
        if (laboratory === null) {
            throw new NotFoundException('Docente no encontrado');
        }
        this.laboratoryRepo.merge(laboratory, payload);
        return this.laboratoryRepo.save(laboratory);
    }

    delete(id: number) {
        return this.laboratoryRepo.delete(id);
    }
}