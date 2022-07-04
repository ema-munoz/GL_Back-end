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
import { CreateLaboratoryDto } from "src/laboratories/Dtos/create-laboratory.dto";
import { UpdateLaboratoryDto } from "src/laboratories/Dtos/update-laboratory.dto";
import { LaboratoryService } from "src/laboratories/laboratory.service";
@Controller("laboratory")
export class LaboratoryController {
	constructor(private laboratoryService: LaboratoryService) {}

	@Get('')
    @HttpCode(HttpStatus.OK)
    findAll(@Query() params: any) {
        const response = this.laboratoryService.findAll();
        return response;

        // return {
        //     data: response,
        //     message: `index`,
        // };
    }

	@Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id', ParseIntPipe) id: number) {
        const response = this.laboratoryService.findOne(id);
        return response;

        // return {
        //     data: response,
        //     message: `show`,
        // };
    }

	@Post('')
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateLaboratoryDto) {
        const response = this.laboratoryService.create(payload);
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
        @Body() payload: UpdateLaboratoryDto,
    ) {
        const response = this.laboratoryService.update(id, payload);
        return response;

        // return {
        //     data: response,
        //     message: `updated ${id}`,
        // };
    }

	@Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    remove(@Param('id', ParseIntPipe) id: number) {
        const response = this.laboratoryService.remove(id);
        return response;

        // return {
        //     data: response,
        //     message: `deleted`,
        // };
    }
}
