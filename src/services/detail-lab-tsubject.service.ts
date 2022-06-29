import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetailLabTsubjectDto } from 'src/Dtos/detail_lab_tsubject/create-detail-tsubject.dto copy';
import { UpdateDetailLabTsubjectDto } from 'src/Dtos/detail_lab_tsubject/update-detail-tsubject.dto';

@Injectable()
export class DetailLabTsubjectService {
    detailsLTS: any[] = [];
	id = 1;

	getAll() {
		return this.detailsLTS;
	}

	getOne(id: number) {
		const detailLTS = this.detailsLTS.find(
			(detailLTS) => detailLTS.id == id
		);
		if (detailLTS == undefined) {
			throw new NotFoundException("El detalle no se encontro");
		}

		return detailLTS;
	}

	filter(search: string) {
		const detailsLTS = this.detailsLTS.filter(
			(detailLTS) => detailLTS.name == search
		);
		return detailsLTS;
	}

	create(payload: CreateDetailLabTsubjectDto) {
		const data = {
			id: this.id,
            date: payload.date,
		};
		this.id++;
		this.detailsLTS.push(data);
		return data;
	}

	update(id: number, payload: UpdateDetailLabTsubjectDto) {
		const index = this.detailsLTS.findIndex(
			(detailLTS) => detailLTS.id == id
		);
		if (index == -1) {
			throw new NotFoundException("El detalle no se encontro");
		}
		this.detailsLTS[index]["date"] = payload.date;
		return this.detailsLTS[index];
	}

	delete(id: number) {
		const index = this.detailsLTS.findIndex(
			(detailLTS) => detailLTS.id == id
		);
		if (index == -1) {
			throw new NotFoundException("El detalle no se encontro");
		}
		this.detailsLTS.splice(index, 1);
		return true;
	}
}
