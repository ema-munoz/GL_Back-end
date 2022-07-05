import { Injectable, NotFoundException } from "@nestjs/common";
//import { InjectRepository } from "@nestjs/typeorm";
import { CreateShiftDto } from "src/shifts/Dtos/create-shift.dto";
import { UpdateShiftDto } from "src/shifts/Dtos/update-shift.dto";
//import { Repository } from "typeorm";
//import { ShiftEntity } from "./entities/shift.entity";

@Injectable()
export class ShiftService {
	shifts: any[] = [];
	id = 1;

	// Busca a todas las Jornadas.
	findAll() {
		return this.shifts;
	}

	// Busca a una Jornada.
	findOne(id: number) {
		const shift = this.shifts.find((shift) => shift.id == id);
		if (shift == undefined) {
			throw new NotFoundException("Jornada no encontrado");
		}
		return shift;
	}

	// Crea a una Jornada.
	create(payload: CreateShiftDto) {
		const data = {
			id: this.id,
			name: payload.name,
			checkTime: payload.checkTime,
			departureTime: payload.departureTime,
		};
		this.id++;
		this.shifts.push(data);
		return data;
	}

	// Actualiza a una Jornada.
	update(id: number, payload: UpdateShiftDto) {
		const index = this.shifts.findIndex((shift) => shift.id == id);
		if (index == -1) {
			throw new NotFoundException("Jornada no encontrado");
		}
		this.shifts[index]["name"] = payload.name;
		this.shifts[index]["checkTime"] = payload.checkTime;
		this.shifts[index]["departureTime"] = payload.departureTime;
		return this.shifts[index];
	}

	// Elimina a una Jornada.
	delete(id: number) {
		const index = this.shifts.findIndex((shift) => shift.id == id);
		if (index == -1) {
			throw new NotFoundException("Jornada no encontrado");
		}
		this.shifts.splice(index, 1);
		return this.shifts;
	}
}
