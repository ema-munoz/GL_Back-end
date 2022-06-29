import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from 'src/Dtos/subject/create-subject.dto';
import { UpdateSubjectDto } from 'src/Dtos/subject/update-subject.dto';

@Injectable()
export class SubjectService {
    subjects: any[] = [];
    id= 1;

    getAll(){
        return this.subjects;
    }

    getOne(id: number){
        const subject = this.subjects.find((subject) => subject.id == id);
        if(subject == undefined){
            throw new NotFoundException('La materia no se encontro');
        }

        return subject;
    }

    filter(search: string){
        const subjects = this.subjects.filter((subject) => subject.name == search);
        return subjects;
    }

    create(payload: CreateSubjectDto){
        const data = {
            id: this.id,
            name: payload.name,
        };
        this.id++;
        this.subjects.push(data);
        return data;
    }

    update(id: number, payload: UpdateSubjectDto){
        const index = this.subjects.findIndex((subject) => subject.id == id);
        if(index == -1){
            throw new NotFoundException('La materia no se encontro');
        }
        this.subjects[index]['name'] = payload.name;
        return this.subjects[index];
    }

    delete(id: number){
        const index = this.subjects.findIndex((subject) => subject.id == id);
        if(index == -1){
            throw new NotFoundException('La materia no se encontro');
        }
        this.subjects.splice(index, 1);
        return true;
    }
}
