import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Teacher {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	identityCard: number;

	@Column()
	names: string;

	@Column()
	lastNames: string;

	@Column()
	institutionalMail: string;

	@Column()
	phone: number;
}
