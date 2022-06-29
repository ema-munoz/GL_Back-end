import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateShiftDto } from "src/Dtos/shift/create-shift.dto";
import { UpdateShiftDto } from "src/Dtos/shift/update-shift.dto";

@Injectable()
export class ShiftService {
	shifts: any[] = [];
	id = 1;

	getAll() {
		return this.shifts;
	}

	getOne(id: number) {
		const shift = this.shifts.find((shift) => shift.id == id);
		if (shift == undefined) {
			throw new NotFoundException("El laboratorio no se encontro");
		}

		return shift;
	}

	filter(search: string) {
		const shifts = this.shifts.filter((shift) => shift.name == search);
		return shifts;
	}

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

	update(id: number, payload: UpdateShiftDto) {
		const index = this.shifts.findIndex((shift) => shift.id == id);
		if (index == -1) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		this.shifts[index]["name"] = payload.name;
		this.shifts[index]["checkTime"] = payload.checkTime;
		this.shifts[index]["departureTime"] = payload.departureTime;
		return this.shifts[index];
	}

	delete(id: number) {
		const index = this.shifts.findIndex((shift) => shift.id == id);
		if (index == -1) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		this.shifts.splice(index, 1);
		return true;
	}
}
