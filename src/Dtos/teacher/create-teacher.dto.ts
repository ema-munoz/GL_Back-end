import { IsString, IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateTeacherDto {
	@IsString()
	readonly names: string;

	@IsString()
	readonly lastNames: string;

	@IsString()
	readonly institutionalMail: number;

	@IsNumber()
	readonly phone: number;
}

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {}
