import {IsDate, IsMilitaryTime, IsString, MaxLength, MinLength } from "class-validator";

export class CreateDetailTeacherSubjectDto {
	@IsString()
	@MinLength(5)
	@MaxLength(20)
	readonly name: string;

    @IsDate()
	readonly date: Date;

	@IsString()
	@MinLength(5)
	@MaxLength(10)
    readonly day: string;

	@IsString()
    @IsMilitaryTime()
    readonly hour_start: string;
	

	@IsString()
    @IsMilitaryTime()
    readonly hours_finish: string;
}
