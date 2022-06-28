import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Materia{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
}