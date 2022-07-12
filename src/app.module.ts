import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CareersModule } from "./careers/careers.module";
import { DetailTeachersSubjectsModule } from "./detail_teachers_subjects/detail_teachers_subjects.module";
import { GradeModule } from "./grade/grade.module";
import { LabotoryModule } from "./laboratories/laboratory.module";
import { LabStateModule } from "./lab_state_subject/lab_state.module";
import { ParallelModule } from "./parallel/parallel.module";
import { SubjectModule } from "./subjects/subject.module";
import { DetailLabTsubjectModule } from "./detail_lab_tsubject/detail_lab_tsubject.module";
import { ShiftModule } from "./shifts/shift.module";
import { SemesterModule } from "./semester/semester.module";
import { TeacherModule } from "./teachers/teacher.module";

@Module({
	imports: [
		CareersModule,
		DetailTeachersSubjectsModule,
		GradeModule,
		LabotoryModule,
		LabStateModule,
		ParallelModule,
		SubjectModule,
		DetailLabTsubjectModule,
		ShiftModule,
		SemesterModule,
		TeacherModule,
	],

	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
