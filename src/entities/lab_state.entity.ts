import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EstadoLaboratorio{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    estado:string;

    @Column()
    observaciones:string;
}