import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateShiftDto } from "src/shifts/Dtos/create-shift.dto";
import { UpdateShiftDto } from "src/shifts/Dtos/update-shift.dto";
import { Repository } from "typeorm";
import { ShiftEntity } from "./entities/shift.entity";

@Injectable()
export class ShiftService {
	constructor(
		@InjectRepository(ShiftEntity)
		private shiftRepository: Repository<ShiftEntity>
	) {}

	async create(payload: CreateShiftDto) {
		const newShift = this.shiftRepository.create(payload);
		return await this.shiftRepository.save(newShift);
	}

	async findAll() {
		return await this.shiftRepository.find();
	}

	async findOne(id: number) {
		const shift = await this.shiftRepository.findOne({
			where: {
				id: id,
			},
		});
		if (shift === null) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		return shift;
	}

	async remove(id: number) {
		return await this.shiftRepository.delete(id);
	}

	async update(id: number, payload: UpdateShiftDto) {
		const shift = await this.shiftRepository.findOne({
			where: {
				id: id,
			},
		});
		if (shift === null) {
			throw new NotFoundException("El laboratorio no se encontro");
		}
		this.shiftRepository.merge(shift, payload);
		return this.shiftRepository.save(shift);
	}
}
