import { IsString } from "class-validator";

export class CreateSemesterDto {
	@IsString()
	readonly name: string;
}
