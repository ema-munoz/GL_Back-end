import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateLabStateDto } from "src/lab_state_subject/Dtos/create-lab_state.dto";
import { UpdateLabStateDto } from "src/lab_state_subject/Dtos/update-lab_state.dto";
import { Repository } from "typeorm";
import { EstadoLaboratorio } from "./entities/lab_state.entity";

@Injectable()
export class LabStateService {
	constructor(
		@InjectRepository(EstadoLaboratorio)
		private labStateRepository: Repository<EstadoLaboratorio>
	){}

	async create(payload: CreateLabStateDto){
		const newLabState = this.labStateRepository.create(payload);
		return await this.labStateRepository.save(newLabState);
	}

	async findAll() {
        return await this.labStateRepository.find();
    }

	async findOne(id: number) {
        const labState = await this.labStateRepository.findOne(
            {where: {
                id: id
            },
        });
        if (labState === null) {
            throw new NotFoundException('El laboratorio no se encontro');
        }
        return labState;
    }

	async remove(id: number) {
        return await this.labStateRepository.delete(id);
    }

	async update(id: number, payload: UpdateLabStateDto) {
        const labState = await this.labStateRepository.findOne(
            {where: {
                id: id
            },
        });
        if (labState === null) {
            throw new NotFoundException('El laboratorio no se encontro');
        }
        this.labStateRepository.merge(labState, payload)
        return this.labStateRepository.save(labState);
    }
}
