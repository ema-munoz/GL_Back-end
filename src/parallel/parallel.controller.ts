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
import { ParallelService } from "src/parallel/parallel.service";
import { CreateParallelDto } from "src/parallel/Dtos/create-parallel.dto";
import { UpdateParallelDto } from "src/parallel/Dtos/update-parallel.dto";
@Controller("parallel")
export class ParallelController {
	constructor(private parallelService: ParallelService) {}

	@Get('')
    @HttpCode(HttpStatus.OK)
    findAll(@Query() params: any) {
        const response = this.parallelService.findAll();
        return response;

        // return {
        //     data: response,
        //     message: `index`,
        // };
    }

	@Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id', ParseIntPipe) id: number) {
        const response = this.parallelService.findOne(id);
        return response;

        // return {
        //     data: response,
        //     message: `show`,
        // };
    }

	@Post('')
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateParallelDto) {
        const response = this.parallelService.create(payload);
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
        @Body() payload: UpdateParallelDto,
    ) {
        const response = this.parallelService.update(id, payload);
        return response;

        // return {
        //     data: response,
        //     message: `updated ${id}`,
        // };
    }

	@Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    remove(@Param('id', ParseIntPipe) id: number) {
        const response = this.parallelService.remove(id);
        return response;

        // return {
        //     data: response,
        //     message: `deleted`,
        // };
    }
}

