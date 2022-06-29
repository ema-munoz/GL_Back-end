import { IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateSemesterDto {
	@IsString()
	readonly name: string;
}

export class UpdateSemesterDto extends PartialType(CreateSemesterDto) {}
