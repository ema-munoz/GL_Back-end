import { IsString, IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateGradeDto {
    @IsNumber()
	readonly numberStudents: number;
}

export class UpdateGradeDto extends PartialType(CreateGradeDto) {}