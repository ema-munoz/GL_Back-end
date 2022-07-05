import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SemesterEntity } from "./entities/semester.entity";
import { SemesterController } from "./semester.controller";
import { SemesterService } from "./semester.service";

@Module({
	controllers: [SemesterController],
	providers: [SemesterService],
	exports: [SemesterService],
})
export class SemesterModule {}
