import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Paralelo {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
