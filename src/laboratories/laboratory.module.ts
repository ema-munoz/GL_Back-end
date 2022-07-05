import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaboratoryEntity } from "./entities/laboratory.entity";
import { LaboratoryController } from "./laboratory.controller";
import { LaboratoryService } from "./laboratory.service";

@Module({
	controllers: [LaboratoryController],
	providers: [LaboratoryService],
	exports: [LaboratoryService],
})
export class LabotoryModule {}
