import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Shift {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	checkTime: string;

	@Column()
	departureTime: string;
}
