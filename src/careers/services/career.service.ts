import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCareerDto } from 'src/careers/dtos/create-career.dto';
import { UpdateCareerDto } from 'src/careers/dtos/update-career.dto';

@Injectable()
export class CareerService {
    careers: any[] = [];
	id = 1;

	getAll() {
		return this.careers;
	}

	getOne(id: number) {
		const career = this.careers.find((career) => career.id == id);
		if (career == undefined) {
			throw new NotFoundException("Carrera no encontrada");
		}

		return career;
	}

	filter(search: string) {
		const career = this.careers.filter((career) => career.name == search);
		return career;
	}

	create(payload: CreateCareerDto) {
		const data = {
			id: this.id,
			name: payload.name
		};
		this.id++;
		this.careers.push(data);
		return data;
	}

	update(id: number, payload: UpdateCareerDto) {
		const index = this.careers.findIndex((career) => career.id == id);
		if (index == -1) {
			throw new NotFoundException("Carrera no encontrada");
		}
		this.careers[index]["name"] = payload.name;
		return this.careers[index];
	}

	delete(id: number) {
		const index = this.careers.findIndex((career) => career.id == id);
		if (index == -1) {
			throw new NotFoundException("Carrera no encontrado");
		}
		this.careers.splice(index, 1);
		return this.careers;
	}
}
