import { IsString, IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateLabStateDto {
    @IsString()
	readonly state: string; 

    @IsString()
	readonly observations: string; 
}

export class UpdateLabStateDto extends PartialType(CreateLabStateDto) {}