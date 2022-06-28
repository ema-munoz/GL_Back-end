import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DetailTeacherSubject{
    @PrimaryGeneratedColumn()
    id:number;

    //fk_docente
    //fk_materia
    //fk_curso
    
    @Column()
    date:string;
    @Column()
    day:string;
    @Column()
    hour_start: string;
    @Column()
    hours_finish:string;
}