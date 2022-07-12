import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CareerController } from "./controllers/career.controller";
import { CareerEntity } from "./entities/career.entity";
import { CareerService } from "./services/career.service";

@Module({
	imports: [TypeOrmModule.forFeature([CareerEntity])],
	controllers: [CareerController],
	providers: [CareerService],
	exports: [CareerService],
})
export class CareersModule {}
