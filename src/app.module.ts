import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DetailLabTsubjectController } from "./detail_lab_tsubject/detail-lab-tsubject.controller";
import { DetailLabTsubjectService } from "./detail_lab_tsubject/detail-lab-tsubject.service";
import { GradeController } from "./grade/grade.controller";
import { GradeService } from "./grade/grade.service";
import { LaboratoryController } from "./laboratories/laboratory.controller";
import { LaboratoryService } from "./laboratories/laboratory.service";
import { LabStateController } from "./lab_state_subject/lab_state.controller";
import { LabStateService } from "./lab_state_subject/lab_state.service";
import { ParallelController } from "./parallel/parallel.controller";
import { ParallelService } from "./parallel/parallel.service";
import { SemesterController } from "./semester/semester.controller";
import { SemesterService } from "./semester/semester.service";
import { ShiftController } from "./shifts/shift.controller";
import { ShiftService } from "./shifts/shift.service";
import { SubjectController } from "./subjects/subject.controller";
import { SubjectService } from "./subjects/subject.service";
import { TeacherController } from "./teachers/teacher.controller";
import { TeacherService } from "./teachers/teacher.service";
import { CareersModule } from "./careers/careers.module";
import { DetailTeachersSubjectsModule } from "./detail_teachers_subjects/detail_teachers_subjects.module";
//import { CareersModule } from "./careers/careers.module";
//import { DetailTeachersSubjectsModule } from "./detail_teachers_subjects/detail_teachers_subjects.module";
//import { LabotoryModule } from "./laboratories/laboratory.module";

@Module({
	imports: [
		CareersModule,
		DetailTeachersSubjectsModule,
    /*LabotoryModule */
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
		DetailLabTsubjectService,
	],
})
export class AppModule {}
