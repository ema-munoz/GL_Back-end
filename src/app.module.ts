import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaboratoryController } from "./laboratories/laboratory.controller";
import { LaboratoryService } from "./laboratories/laboratory.service";
import { SubjectController } from "./subjects/subject.controller";
import { SubjectService } from "./subjects/subject.service";
import { TeacherController } from "./teachers/teacher.controller";
import { TeacherService } from "./teachers/teacher.service";
import { ShiftController } from "./shifts/shift.controller";
import { ShiftService } from "./shifts/shift.service";
import { SemesterController } from "./semester/semester.controller";
import { SemesterService } from "./semester/semester.service";
import { DetailLabTsubjectController } from "./detail_lab_tsubject/detail-lab-tsubject.controller";
import { DetailLabTsubjectService } from "./detail_lab_tsubject/detail-lab-tsubject.service";
import { GradeController } from "./grade/grade.controller";
import { LabStateController } from "./lab_state_subject/lab_state.controller";
import { ParallelController } from "./parallel/parallel.controller";
import { GradeService } from "./grade/grade.service";
import { LabStateService } from "./lab_state_subject/lab_state.service";
import { ParallelService } from "./parallel/parallel.service";
import { CareerController } from "./careers/controllers/career.controller";
import { CareerService } from "./careers/services/career.service";
import { DetailTeacherSubjectController } from "./detail_teachers_subjects/controllers/detail_teacher_subject.controller";
import { DetailTeacherSubjectService } from "./detail_teachers_subjects/services/detail_teacher_subject.service";
import { CareersModule } from "./careers/careers.module";
import { DetailTeachersSubjectsModule } from "./detail_teachers_subjects/detail_teachers_subjects.module";

@Module({
	imports: [
		// TypeOrmModule.forRoot({
		// 	type: "postgres",
		// 	host: "localhost",
		// 	port: 5432,
		// 	username: "postgres",
		// 	password: "...",
		// 	database: "Gestion_Laboratorios",
		// 	entities: [],
		// 	synchronize: true,
		// }),
		CareersModule,
		DetailTeachersSubjectsModule,
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
