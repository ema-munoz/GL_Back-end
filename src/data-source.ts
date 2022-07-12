import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "Barbarita19@2021@",
	database: "Gestion_Laboratorios",
	synchronize: true,
	logging: true,
	entities: [
		"src/careers/entities/career.entity.ts",
		"src/detail_lab_tsubject/entities/detail-lab-tsubject.entity.ts",
		"src/detail_teachers_subjects/entities/detail_teacher_subject.entity.ts",
		"src/grade/entities/grade.entity.ts",
		"src/lab_state_subject/entities/lab_state.entity.ts",
		"src/laboratories/entities/laboratory.entity.ts",
		"src/parallel/entities/parallel.entity.ts",
		"src/semester/entities/semester.entity.ts",
		"src/shifts/entities/shift.entity.ts",
		"src/subjects/entities/subject.entity.ts",
		"src/teachers/entities/teacher.entity.ts",
	],
	migrations: ["src/migration/*.ts"],
	subscribers: ["src/subscribers/*.ts"],
	migrationsTableName: "migrations",
});
