import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubjectEntity } from "./entities/subject.entity";
import { SubjectController } from "./subject.controller";
import { SubjectService } from "./subject.service";

@Module({
	controllers: [SubjectController],
	providers: [SubjectService],
	exports: [SubjectService],
})
export class SubjectModule {}
