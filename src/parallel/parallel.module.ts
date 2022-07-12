import { Module } from "@nestjs/common";
import { ParallelController } from "./parallel.controller";
import { ParallelService } from "./parallel.service";

@Module({
	controllers: [ParallelController],
	providers: [ParallelService],
	exports: [ParallelService],
})
export class ParallelModule {}
