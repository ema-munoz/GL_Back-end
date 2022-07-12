import "reflect-metadata";
import { DataSource } from "typeorm";

const config = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "fernando654cris",
	database: "Gestion_Laboratorios",
	synchronize: true,
	logging: false,
	entities: ["./src/**/*.entity.ts"],
	subscribers: [],
	migrationsTableName: "migration",
	migrations: ["src/db/migration/*.ts"],
});

export default config;
