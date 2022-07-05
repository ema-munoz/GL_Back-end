import { Module } from "@nestjs/common";
import { DetailTeacherSubjectController } from "./controllers/detail_teacher_subject.controller";
import { DetailTeacherSubjectService } from "./services/detail_teacher_subject.service";

@Module({
	controllers: [DetailTeacherSubjectController],
	providers: [DetailTeacherSubjectService],
	exports: [DetailTeacherSubjectService],
})
export class DetailTeachersSubjectsModule {}
