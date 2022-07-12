import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ParallelEntity } from "./entities/parallel.entity";
import { ParallelController } from "./controllers/parallel.controller";
import { ParallelService } from "./services/parallel.service";

@Module({
	imports: [TypeOrmModule.forFeature([ParallelEntity])],
	controllers: [ParallelController],
	providers: [ParallelService],
	exports: [ParallelService],
})
export class ParallelModule {}
