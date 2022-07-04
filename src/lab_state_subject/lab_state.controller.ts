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
import { CreateLabStateDto } from "src/lab_state_subject/Dtos/create-lab_state.dto";
import { UpdateLabStateDto } from "src/lab_state_subject/Dtos/update-lab_state.dto";
import { LabStateService } from "src/lab_state_subject/lab_state.service";
@Controller("lab-state")
export class LabStateController {
	constructor(private labStateService: LabStateService) {}

	@Get('')
    @HttpCode(HttpStatus.OK)
    findAll(@Query() params: any) {
        const response = this.labStateService.findAll();
        return response;

        // return {
        //     data: response,
        //     message: `index`,
        // };
    }

	@Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id', ParseIntPipe) id: number) {
        const response = this.labStateService.findOne(id);
        return response;

        // return {
        //     data: response,
        //     message: `show`,
        // };
    }

	@Post('')
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateLabStateDto) {
        const response = this.labStateService.create(payload);
        return response;

        // return {
        //     data: response,
        //     message: `created`,
        // };
    }

	@Put(':id')
    @HttpCode(HttpStatus.CREATED)
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateLabStateDto,
    ) {
        const response = this.labStateService.update(id, payload);
        return response;

        // return {
        //     data: response,
        //     message: `updated ${id}`,
        // };
    }

	@Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    remove(@Param('id', ParseIntPipe) id: number) {
        const response = this.labStateService.remove(id);
        return response;

        // return {
        //     data: response,
        //     message: `deleted`,
        // };
    }
}