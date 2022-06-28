import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaboratoryController } from './controllers/laboratory/laboratory.controller';
import { LaboratoryController } from './controllers/laboratory.controller';
import { LaboratoryService } from './services/laboratory.service';

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
	controllers: [AppController, LaboratoryController],
	providers: [AppService, LaboratoryService],
})
export class AppModule {}
