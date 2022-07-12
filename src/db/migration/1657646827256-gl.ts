import { MigrationInterface, QueryRunner } from "typeorm";

export class gl1657646827256 implements MigrationInterface {
    name = 'gl1657646827256'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "career_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_57a772065a9ebbad8e667326d00" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lab_state_entity" ("id" SERIAL NOT NULL, "state" character varying NOT NULL, "observations" character varying NOT NULL, CONSTRAINT "PK_fec4a855f011578b3d9adb273d2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "grade_entity" ("id" SERIAL NOT NULL, "numberStudents" integer NOT NULL, CONSTRAINT "PK_d78d5b32e348115807224aa6a84" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parallel_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_34fe1d0391d1d46ebcf7841066e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "detail_teacher_subject_entity" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "day" character varying NOT NULL, "hourStart" character varying NOT NULL, "hourFinish" character varying NOT NULL, CONSTRAINT "PK_7fa5affec9d4f2fb069ef5ceb0c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "detail_teacher_subject_entity"`);
        await queryRunner.query(`DROP TABLE "parallel_entity"`);
        await queryRunner.query(`DROP TABLE "grade_entity"`);
        await queryRunner.query(`DROP TABLE "lab_state_entity"`);
        await queryRunner.query(`DROP TABLE "career_entity"`);
    }

}
