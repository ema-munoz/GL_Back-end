import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateParallelDto } from "src/Dtos/parallel/create-parallel.dto";
import { UpdateParallelDto } from "src/Dtos/parallel/update-parallel.dto";

@Injectable()
export class ParallelService {
	parallels: any[] = [];
	id = 1;
	getAll() {
		return this.parallels;
	}

	getOne(id: number) {
		const parallel = this.parallels.find((parallel) => parallel.id == id);
		if (parallel == undefined) {
			throw new NotFoundException("El Paralelo no se encontro");
		}

		return parallel;
	}

	filter(search: string) {
		const parallels = this.parallels.filter(
			(parallel) => parallel.name == search
		);
		return parallels;
	}

	create(payload: CreateParallelDto) {
		const data = {
			id: this.id,
			name: payload.name,
		};
		this.id++;
		this.parallels.push(data);
		return data;
	}

	update(id: number, payload: UpdateParallelDto) {
		const index = this.parallels.findIndex((parallel) => parallel.id == id);
		if (index == -1) {
			throw new NotFoundException("El Paralelo no se encontro");
		}
		this.parallels[index]["name"] = payload.name;
		return this.parallels[index];
	}

	delete(id: number) {
		const index = this.parallels.findIndex((parallel) => parallel.id == id);
		if (index == -1) {
			throw new NotFoundException("El Paralelo no se encontro");
		}
		this.parallels.splice(index, 1);
		return true;
	}
}
