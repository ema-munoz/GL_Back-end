import { PartialType } from "@nestjs/swagger";
import { CreateDetailLabTsubjectDto } from "./create-detail-tsubject.dto copy";

export class UpdateDetailLabTsubjectDto extends PartialType(
	CreateDetailLabTsubjectDto
) {}
