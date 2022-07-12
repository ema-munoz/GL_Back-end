import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CareersModule } from "./careers/careers.module";
import { DetailTeachersSubjectsModule } from "./detail_teachers_subjects/detail_teachers_subjects.module";
import { LabotoryModule } from "./laboratories/laboratory.module";
import { SubjectModule } from "./subjects/subject.module";
import { DetailLabTsubjectModule } from "./detail_lab_tsubject/detail_lab_tsubject.module";
import { TeacherModule } from "./teachers/teacher.module";
import { ShiftModule } from "./shifts/shift.module";
import { SemesterModule } from "./semester/semester.module";
import { GradeModule } from "./grade/grade.module";
import { LabStateModule } from "./lab_state_subject/lab_state.module";
import { ParallelModule } from "./parallel/parallel.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			host: "localhost",
			port: 5432,
			username: "postgres",
			password: "fernando654cris",
			database: "Gestion_Laboratorios",
			synchronize: true,
			logging: true,
			autoLoadEntities: true,
		}),
		CareersModule,
		DetailTeachersSubjectsModule,
		LabotoryModule,
		SubjectModule,
		DetailLabTsubjectModule,
		TeacherModule,
		ShiftModule,
		SemesterModule,
		GradeModule,
		LabStateModule,
		ParallelModule,
	],

	controllers: [
		AppController,
	],
	providers: [
		AppService,
	],
})
export class AppModule {}
