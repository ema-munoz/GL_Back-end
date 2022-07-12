import { Module } from "@nestjs/common";
import { SemesterController } from "./controller/semester.controller";
import { SemesterService } from "./service/semester.service";

@Module({
	controllers: [SemesterController],
	providers: [SemesterService],
	exports: [SemesterService],
})
export class SemesterModule {}
