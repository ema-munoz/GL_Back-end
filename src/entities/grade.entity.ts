import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Curso {
	@PrimaryGeneratedColumn()
	id: number;

	//fk_Semestre
	//fk_carrera
	//fk_jornada
	//fk_paralelo

	@Column()
	cantidadEstudiantes: number;
}
