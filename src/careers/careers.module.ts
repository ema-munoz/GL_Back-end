import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeacherEntity } from "src/teachers/entities/teacher.entity";
import { CareerController } from "./controllers/career.controller";
import { CareerService } from "./services/career.service";

@Module({
	imports: [TypeOrmModule.forFeature([TeacherEntity])],
	controllers: [CareerController],
	providers: [CareerService],
	exports: [CareerService],
})
export class CareersModule {}
