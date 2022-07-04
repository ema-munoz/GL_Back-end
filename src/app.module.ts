import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CareerController } from "./careers/controllers/career.controller";
import { CareerService } from "./careers/services/career.service";
import { DetailLabTsubjectController } from "./detail_lab_tsubject/detail-lab-tsubject.controller";
import { DetailLabTsubjectService } from "./detail_lab_tsubject/detail-lab-tsubject.service";
import { DetailTeacherSubjectController } from "./detail_teachers_subjects/controllers/detail_teacher_subject.controller";
import { DetailTeacherSubjectService } from "./detail_teachers_subjects/services/detail_teacher_subject.service";
import { GradeController } from "./grade/grade.controller";
import { GradeService } from "./grade/grade.service";
import { LaboratoryController } from "./laboratories/laboratory.controller";
import { LaboratoryService } from "./laboratories/laboratory.service";
import { LabStateController } from "./lab_state_subject/lab_state.controller";
import { LabStateService } from "./lab_state_subject/lab_state.service";
import { ParallelController } from "./parallel/parallel.controller";
import { ParallelService } from "./parallel/parallel.service";
import { CareerController } from "./careers/controllers/career.controller";
import { CareerService } from "./careers/services/career.service";
import { DetailTeacherSubjectController } from "./detail_teachers_subjects/controllers/detail_teacher_subject.controller";
import { DetailTeacherSubjectService } from "./detail_teachers_subjects/services/detail_teacher_subject.service";
import { CareersModule } from "./careers/careers.module";
import { DetailTeachersSubjectsModule } from "./detail_teachers_subjects/detail_teachers_subjects.module";
import { LabotoryModule } from "./laboratories/laboratory.module";

@Module({
	imports: [
		CareersModule,
		DetailTeachersSubjectsModule,
		LabotoryModule,
	],

	controllers: [
		AppController,
		LaboratoryController,
		TeacherController,
		ShiftController,
		SemesterController,
		GradeController,
		LabStateController,
		ParallelController,
		SubjectController,
		CareerController,
		DetailTeacherSubjectController,
		DetailLabTsubjectController,
	],
	providers: [
		AppService,
		LaboratoryService,
		TeacherService,
		ShiftService,
		SemesterService,
		GradeService,
		LabStateService,
		ParallelService,
		SubjectService,
		CareerService,
		DetailTeacherSubjectService,
		DetailLabTsubjectService,
	],
})
export class AppModule {}
