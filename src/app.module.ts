import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaboratoryController } from './controllers/laboratory/laboratory.controller';
import { LaboratoryController } from './controllers/laboratory.controller';
import { LaboratoryService } from './services/laboratory.service';
import { SubjectController } from './controllers/subject/subject.controller';
import { SubjectController } from './controllers/subject.controller';
import { SubjectService } from './services/subject.service';

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
	controllers: [AppController, LaboratoryController, SubjectController],
	providers: [AppService, LaboratoryService, SubjectService],
})
export class AppModule {}
