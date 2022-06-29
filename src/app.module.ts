import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaboratoryController } from "./controllers/laboratory.controller";
import { LaboratoryService } from "./services/laboratory.service";
import { TeacherController } from "./controllers/teacher.controller";
import { TeacherService } from "./services/teacher.service";
import { ShiftController } from "./controllers/shift.controller";
import { ShiftService } from "./services/shift.service";
import { SemesterController } from "./controllers/semester.controller";
import { SemesterService } from "./services/semester.service";
import { GradeController } from './controllers/grade.controller';
import { LabStateController } from './controllers/lab_state.controller';
import { ParallelController } from './controllers/parallel.controller';
import { GradeService } from './services/grade.service';
import { LabStateService } from './services/lab_state.service';
import { ParallelService } from './services/parallel.service';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			host: "localhost",
			port: 5432,
			username: "postgres",
			password: "...",
			database: "Gestion_Laboratorios",
			entities: [],
			synchronize: true,
		}),
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
	],
})
export class AppModule {}
