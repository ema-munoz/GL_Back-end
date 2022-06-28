import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

    //TODO: aqui van las fk de laboratorio y Dmateria
	// @Column()
	// firstName: string;

	// @Column()
	// lastName: string;

	@Column()
	date: Date;
}
