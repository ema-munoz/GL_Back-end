import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeacherEntity } from "./entities/teacher.entity";
import { TeacherController } from "./teacher.controller";
import { TeacherService } from "./teacher.service";

@Module({
	controllers: [TeacherController],
	providers: [TeacherService],
	exports: [TeacherService],
})
export class TeacherModule {}
