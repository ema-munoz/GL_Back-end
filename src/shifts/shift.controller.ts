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
import { CreateShiftDto } from "src/shifts/Dtos/create-shift.dto";
import { UpdateShiftDto } from "src/shifts/Dtos/update-shift.dto";
import { ShiftService } from "src/shifts/shift.service";
@Controller("shift")
export class ShiftController {
	constructor(private shiftService: ShiftService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response = this.shiftService.findAll();
		return response;

		// return {
		//     data: response,
		//     message: `index`,
		// };
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.shiftService.findOne(id);
		return response;

		// return {
		//     data: response,
		//     message: `show`,
		// };
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateShiftDto) {
		const response = this.shiftService.create(payload);
		return response;

		// return {
		//     data: response,
		//     message: `created`,
		// };
	}

	@Put(":id")
	@HttpCode(HttpStatus.CREATED)
	update(
		@Param("id", ParseIntPipe) id: number,
		@Body() payload: UpdateShiftDto
	) {
		const response = this.shiftService.update(id, payload);
		return response;

		// return {
		//     data: response,
		//     message: `updated ${id}`,
		// };
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	remove(@Param("id", ParseIntPipe) id: number) {
		const response = this.shiftService.remove(id);
		return response;

		// return {
		//     data: response,
		//     message: `deleted`,
		// };
	}
}
