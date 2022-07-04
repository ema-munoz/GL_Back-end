import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaboratoryController } from "./laboratories/laboratory.controller";
import { LaboratoryService } from "./laboratories/laboratory.service";
import { SubjectController } from "./subjects/subject.controller";
import { SubjectService } from "./subjects/subject.service";
import { TeacherController } from "./controllers/teacher.controller";
import { TeacherService } from "./services/teacher.service";
import { ShiftController } from "./controllers/shift.controller";
import { ShiftService } from "./services/shift.service";
import { SemesterController } from "./controllers/semester.controller";
import { SemesterService } from "./services/semester.service";
import { GradeController } from "./controllers/grade.controller";
import { LabStateController } from "./controllers/lab_state.controller";
import { ParallelController } from "./controllers/parallel.controller";
import { GradeService } from "./services/grade.service";
import { LabStateService } from "./services/lab_state.service";
import { ParallelService } from "./services/parallel.service";
import { CareerController } from './careers/controllers/career.controller';
import { CareerService } from './careers/services/career.service';
import { DetailTeacherSubjectController } from './detail_teachers_subjects/controllers/detail_teacher_subject.controller';
import { DetailTeacherSubjectService } from './detail_teachers_subjects/services/detail_teacher_subject.service';
import { DetailLabTsubjectController } from './detail_lab_tsubject/detail-lab-tsubject.controller';
import { DetailLabTsubjectService } from './detail_lab_tsubject/detail-lab-tsubject.service';
import { CareersModule } from './careers/careers.module';
import { DetailTeachersSubjectsModule } from './detail_teachers_subjects/detail_teachers_subjects.module';


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
		DetailTeachersSubjectsModule],

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
export class AppModule { }
