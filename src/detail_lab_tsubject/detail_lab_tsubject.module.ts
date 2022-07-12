import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DetailLabTsubjectController } from "./controllers/detail-lab-tsubject.controller";
import { DetailLabTsubjectService } from "./services/detail-lab-tsubject.service";
import { DetailLabTsubjectEntity } from "./entities/detail-lab-tsubject.entity";

@Module({
	imports: [
		TypeOrmModule.forFeature([DetailLabTsubjectEntity]),
	],
	controllers: [DetailLabTsubjectController],
	providers: [DetailLabTsubjectService],
	exports: [DetailLabTsubjectService],
})
export class DetailLabTsubjectModule {}
