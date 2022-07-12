import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DetailLabTsubjectController } from "./detail-lab-tsubject.controller";
import { DetailLabTsubjectService } from "./detail-lab-tsubject.service";

@Module({
	imports: [TypeOrmModule.forFeature([DetailLabTsubjectEntity])],
	controllers: [DetailLabTsubjectController],
	providers: [DetailLabTsubjectService],
	exports: [DetailLabTsubjectService],
})
export class DetailLabTsubjectModule {}
