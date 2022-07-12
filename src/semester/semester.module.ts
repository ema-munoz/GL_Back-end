import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SemesterController } from "./controllers/semester.controller";
import { SemesterEntity } from "./entities/semester.entity";
import { SemesterService } from "./services/semester.service";

@Module({
	imports: [TypeOrmModule.forFeature([SemesterEntity])],
	controllers: [SemesterController],
	providers: [SemesterService],
	exports: [SemesterService],
})
export class SemesterModule {}
