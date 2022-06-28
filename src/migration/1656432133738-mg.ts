import { MigrationInterface, QueryRunner } from "typeorm";

export class mg1656432133738 implements MigrationInterface {
	name = "mg1656432133738";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "semester" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9129c1fd35aa4aded7a9825b38d" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "shift" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "checkTime" character varying NOT NULL, "departureTime" character varying NOT NULL, CONSTRAINT "PK_53071a6485a1e9dc75ec3db54b9" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "teacher" ("id" SERIAL NOT NULL, "names" character varying NOT NULL, "lastNames" character varying NOT NULL, "institutionalMail" character varying NOT NULL, "phone" integer NOT NULL, CONSTRAINT "PK_2f807294148612a9751dacf1026" PRIMARY KEY ("id"))`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "teacher"`);
		await queryRunner.query(`DROP TABLE "shift"`);
		await queryRunner.query(`DROP TABLE "semester"`);
	}
}
