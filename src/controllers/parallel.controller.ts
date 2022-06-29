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
import { ParallelService } from "src/services/parallel.service";
import { CreateParallelDto } from "src/Dtos/parallel/create-parallel.dto";
import { UpdateParallelDto } from "src/Dtos/parallel/update-parallel.dto";

@Controller("parallel")
export class ParallelController {
	constructor(private parallelService: ParallelService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	index(@Query() params: any) {
		const response = this.parallelService.getAll();

		return {
			data: response,
			message: `index`,
		};
	}

	@Get("filter")
	@HttpCode(HttpStatus.OK)
	filter(@Query("search") search: string) {
		return {
			data: search,
			message: `filter`,
		};
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	show(@Param("id", ParseIntPipe) id: number) {
		const response = this.parallelService.getOne(id);
		return {
			data: response,
			message: `show`,
		};
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	store(@Body() payload: CreateParallelDto) {
		const response = this.parallelService.create(payload);
		return {
			data: response,
			message: `created`,
		};
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateParallelDto
	) {
		const response = this.parallelService.update(id, payload);
		return {
			data: response,
			message: `update`,
		};
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	destroy(@Param("id", ParseIntPipe) id: number) {
		const response = this.parallelService.delete(id);
		return {
			data: response,
			message: `deleted`,
		};
	}
}
