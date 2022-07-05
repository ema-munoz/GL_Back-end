import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateLabStateDto } from "src/lab_state_subject/Dtos/create-lab_state.dto";
import { UpdateLabStateDto } from "src/lab_state_subject/Dtos/update-lab_state.dto";
import { Repository } from "typeorm";
import { EstadoLaboratorio } from "./entities/lab_state.entity";

@Injectable()
export class LabStateService {
	labState: any[] = [];
	id = 1;

	findAll() {
		return this.labState;
	}

	findOne(id: number) {
		const labState = this.labState.find((labState) => labState.id == id);
		if (labState == undefined) {
			throw new NotFoundException("Laboratorio no encontrado");
		}

		return labState;
	}

	create(payload: CreateLabStateDto) {
		const data = {
			id: this.id,
			state: payload.state,
			observations: payload.observations,
		};
		this.id++;
		this.labState.push(data);
		return data;
	}

	update(id: number, payload: UpdateLabStateDto) {
		const index = this.labState.findIndex((labState) => labState.id == id);
		if (index == -1) {
			throw new NotFoundException("Estado de Laboratorio no encontrado");
		}
		this.labState[index]["state"] = payload.state;
		this.labState[index]["observations"] = payload.observations;
		return this.labState[index];
	}

	delete(id: number) {
		const index = this.labState.findIndex((labState) => labState.id == id);
		if (index == -1) {
			throw new NotFoundException("Estado de Laboratorio no encontrado");
		}
		this.labState.splice(index, 1);
		return this.labState;
	}
}
