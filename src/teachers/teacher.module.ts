import { Module } from "@nestjs/common";
import { TeacherController } from "./controller/teacher.controller";
import { TeacherService } from "./service/teacher.service";

@Module({
	imports: [TypeOrmModule.forFeature([TeacherEntity])],
	controllers: [TeacherController],
	providers: [TeacherService],
	exports: [TeacherService],
})
export class TeacherModule {}
