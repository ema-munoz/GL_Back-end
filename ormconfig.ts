import "reflect-metadata";
import { DataSource } from "typeorm";

const config = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "...",
	database: "Gestion_Laboratorios",
	synchronize: false,
	logging: false,
	entities: ["src/entity/*.entity.ts"],
	migrations: ["src/migration/*.ts"],
	subscribers: ["src/subscribers/*.ts"],
	migrationsTableName: "migrations",
});

export default config;
