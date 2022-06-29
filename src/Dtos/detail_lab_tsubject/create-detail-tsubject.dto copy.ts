import { IsDate, } from "class-validator";

export class CreateDetailLabTsubjectDto{

    @IsDate()
    readonly date:Date
}