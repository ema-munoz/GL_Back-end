import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaboratoryController } from "./controllers/laboratory.controller";
import { LaboratoryService } from "./services/laboratory.service";
import { TeacherController } from "./controllers/teacher.controller";
import { TeacherService } from "./services/teacher.service";

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
	controllers: [AppController, LaboratoryController, TeacherController],
	providers: [AppService, LaboratoryService, TeacherService],
})
export class AppModule {}
