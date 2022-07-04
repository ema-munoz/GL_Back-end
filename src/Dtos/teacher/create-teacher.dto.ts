import { IsString, IsNumber } from "class-validator";
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
