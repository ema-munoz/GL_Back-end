import { IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateShiftDto {
	@IsString()
	readonly name: string;

	@IsString()
	readonly checkTime: string;

	@IsString()
	readonly departureTime: string;
}
