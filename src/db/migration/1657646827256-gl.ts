import { MigrationInterface, QueryRunner } from "typeorm";

export class gl1657648676888 implements MigrationInterface {
	name = "gl1657648676888";

	public async up(
		queryRunner: QueryRunner
	): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "career_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_57a772065a9ebbad8e667326d00" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "detail_lab_tsubject_entity" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_62a4c8197f1a97745e1f9510d85" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "grade_entity" ("id" SERIAL NOT NULL, "numberStudents" integer NOT NULL, CONSTRAINT "PK_d78d5b32e348115807224aa6a84" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "laboratory_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "capacity" integer NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_1234ca7cea904e19a95ed20f7ed" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "parallel_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_34fe1d0391d1d46ebcf7841066e" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "semester_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4aad7b86aa2e77ed2fac22f5c9d" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "lab_state_entity" ("id" SERIAL NOT NULL, "state" character varying NOT NULL, "observations" character varying NOT NULL, CONSTRAINT "PK_fec4a855f011578b3d9adb273d2" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "detail_teacher_subject_entity" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "day" character varying NOT NULL, "hourStart" character varying NOT NULL, "hourFinish" character varying NOT NULL, CONSTRAINT "PK_7fa5affec9d4f2fb069ef5ceb0c" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "subject_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_734a0e904b21f0008952e5848bb" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "teacher_entity" ("id" SERIAL NOT NULL, "identityCard" integer NOT NULL, "names" character varying NOT NULL, "lastNames" character varying NOT NULL, "institutionalMail" character varying NOT NULL, "cellPhone" integer NOT NULL, "professionalGrade" character varying NOT NULL, CONSTRAINT "PK_9173049f8e2a88465932a277584" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "shift_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "checkTime" character varying NOT NULL, "departureTime" character varying NOT NULL, CONSTRAINT "PK_18a6a2641880d86c57f824fe5ac" PRIMARY KEY ("id"))`
		);
	}

	public async down(
		queryRunner: QueryRunner
	): Promise<void> {
		await queryRunner.query(
			`DROP TABLE "shift_entity"`
		);
		await queryRunner.query(
			`DROP TABLE "teacher_entity"`
		);
		await queryRunner.query(
			`DROP TABLE "subject_entity"`
		);
		await queryRunner.query(
			`DROP TABLE "detail_teacher_subject_entity"`
		);
		await queryRunner.query(
			`DROP TABLE "lab_state_entity"`
		);
		await queryRunner.query(
			`DROP TABLE "semester_entity"`
		);
		await queryRunner.query(
			`DROP TABLE "parallel_entity"`
		);
		await queryRunner.query(
			`DROP TABLE "laboratory_entity"`
		);
		await queryRunner.query(
			`DROP TABLE "grade_entity"`
		);
		await queryRunner.query(
			`DROP TABLE "detail_lab_tsubject_entity"`
		);
		await queryRunner.query(
			`DROP TABLE "career_entity"`
		);
	}
}
