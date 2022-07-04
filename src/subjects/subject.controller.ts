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
import { CreateSubjectDto } from "src/subjects/Dtos/create-subject.dto";
import { UpdateSubjectDto } from "src/subjects/Dtos/update-subject.dto";
import { SubjectService } from "src/subjects/subject.service";

@Controller("subject")
export class SubjectController {
	constructor(private subjectService: SubjectService) {}

	@Get("")
	@HttpCode(HttpStatus.OK)
	findAll(@Query() params: any) {
		const response = this.subjectService.findAll();
		return response;

		// return {
		//     data: response,
		//     message: `index`,
		// };
	}

	@Get(":id")
	@HttpCode(HttpStatus.OK)
	findOne(@Param("id", ParseIntPipe) id: number) {
		const response = this.subjectService.findOne(id);
		return response;

		// return {
		//     data: response,
		//     message: `show`,
		// };
	}

	@Post("")
	@HttpCode(HttpStatus.CREATED)
	create(@Body() payload: CreateSubjectDto) {
		const response = this.subjectService.create(payload);
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
		@Body() payload: UpdateSubjectDto
	) {
		const response = this.subjectService.update(id, payload);
		return response;

		// return {
		//     data: response,
		//     message: `updated ${id}`,
		// };
	}

	@Delete(":id")
	@HttpCode(HttpStatus.CREATED)
	remove(@Param("id", ParseIntPipe) id: number) {
		const response = this.subjectService.remove(id);
		return response;

		// return {
		//     data: response,
		//     message: `deleted`,
		// };
	}
}
