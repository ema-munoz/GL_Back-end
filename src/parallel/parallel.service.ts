import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateParallelDto } from "src/parallel/Dtos/create-parallel.dto";
import { UpdateParallelDto } from "src/parallel/Dtos/update-parallel.dto";

@Injectable()
export class ParallelService {
	parallel: any[] = [];
	id = 1;

	findAll() {
		return this.parallel;
	}

	findOne(id: number) {
		const parallel = this.parallel.find((parallel) => parallel.id == id);
		if (parallel == undefined) {
			throw new NotFoundException("Paralelo no encontrado");
		}

		return parallel;
	}

	create(payload: CreateParallelDto) {
		const data = {
			id: this.id,
			name: payload.name,
		};
		this.id++;
		this.parallel.push(data);
		return data;
	}

	update(id: number, payload: UpdateParallelDto) {
		const index = this.parallel.findIndex((parallel) => parallel.id == id);
		if (index == -1) {
			throw new NotFoundException("Paralelo no encontrado");
		}
		this.parallel[index]["name"] = payload.name;
		return this.parallel[index];
	}

	delete(id: number) {
		const index = this.parallel.findIndex((parallel) => parallel.id == id);
		if (index == -1) {
			throw new NotFoundException("Paralelo no encontrado");
		}
		this.parallel.splice(index, 1);
		return this.parallel;
	}
}
