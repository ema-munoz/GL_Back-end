import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Query,
} from "@nestjs/common";
import { CreateCareerDto } from "src/careers/dtos/create-career.dto";
import { UpdateCareerDto } from "src/careers/dtos/update-career.dto";
import { CareerService } from "src/careers/services/career.service";

@Controller("career")
export class CareerController {
	constructor(private careerService: CareerService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	index(@Query() params: any) {
		const response = this.careerService.getAll();

		return {
			data: response,
			message: `Lista de Carreras`,
		};
	}

	@Get("filter")
	@HttpCode(HttpStatus.OK)
	filter(@Query("search") search: string) {
		return {
			data: search,
			message: "Resultado de busqueda filtrada",
		};
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	show(@Param("id", ParseIntPipe) id: number) {
		const response = this.careerService.getOne(id);
		return {
			data: response,
			message: `Carrera ${id}`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	store(@Body() payload: CreateCareerDto) {
		const response = this.careerService.create(payload);
		return {
			data: response,
			message: `Carrera creada`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.OK)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateCareerDto
	) {
		const response = this.careerService.update(id, payload);
		return {
			data: response,
			message: `Actualizado correctamente carrera ${id}`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.OK)
	destroy(@Param("id", ParseIntPipe) id: number) {
		const response = this.careerService.delete(id);
		return {
			data: response,
			message: `Eliminado correctamente carrera ${id}`,
		};
	}
}
