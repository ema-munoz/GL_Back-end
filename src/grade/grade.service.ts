import { Injectable } from "@nestjs/common";
import { CreateGradeDto } from "src/grade/Dtos/create-grade.dto";
import { UpdateGradeDto } from "src/grade/Dtos/update-grade.dto";

@Injectable()
export class GradeService {
	getAll() {
		throw new Error("Method not implemented.");
	}
	getOne(id: number) {
		throw new Error("Method not implemented.");
	}
	create(payload: CreateGradeDto) {
		throw new Error("Method not implemented.");
	}
	update(id: number, payload: UpdateGradeDto) {
		throw new Error("Method not implemented.");
	}
	delete(id: number) {
		throw new Error("Method not implemented.");
	}
}
