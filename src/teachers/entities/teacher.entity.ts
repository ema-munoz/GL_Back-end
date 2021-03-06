import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
} from "typeorm";

@Entity()
export class TeacherEntity {
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
	cellPhone: number;

	@Column()
	professionalGrade: string;
}
