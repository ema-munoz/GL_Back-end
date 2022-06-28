import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Laboratorio {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	capacity: number;

	@Column()
	description: string;

	//TODO: fk de estadoLaboratorio
}
