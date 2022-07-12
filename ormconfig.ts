//solo configurar aqui el password de la BD
import "reflect-metadata";
import { DataSource } from "typeorm";

const config = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "Barbarita19@2021@",
	database: "Gestion_Laboratorios",
	synchronize: true,
	logging: true,
	entities: [
		"careers/entities/career.entity.ts",
		"detail_lab_tsubject/entities/detail-lab-tsubject.entity.ts",
		"detail_teachers_subjects/entities/detail_teacher_subject.entity.ts",
		"grade/entities/grade.entity.ts",
		"lab_state_subject/entities/lab_state.entity.ts",
		"laboratories/entities/laboratory.entity.ts",
		"parallel/entities/parallel.entity.ts",
		"semester/entities/semester.entity.ts",
		"shifts/entities/shift.entity.ts",
		"subjects/entities/subject.entity.ts",
		"teachers/entities/teacher.entity.ts",
	],
	migrations: ["src/migration/*.ts"],
	subscribers: ["src/subscribers/*.ts"],
	migrationsTableName: "migrations",
});

export default config;
