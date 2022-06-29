import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLaboratoryDto } from 'src/Dto\'s/laboratory/create-laboratory.dto';
import { UpdateLaboratoryDto } from 'src/Dto\'s/laboratory/update-laboratory.dto';

@Injectable()
export class LaboratoryService {
    laboratories: any[] = [];
    id= 1;

    getAll(){
        return this.laboratories;
    }

    getOne(id: number){
        const laboratory = this.laboratories.find((laboratory) => laboratory.id == id);
        if(laboratory == undefined){
            throw new NotFoundException('El laboratorio no se encontro');
        }

        return laboratory;
    }

    filter(search: string){
        const laboratories = this.laboratories.filter((laboratory) => laboratory.name == search);
        return laboratories;
    }

    create(payload: CreateLaboratoryDto){
        const data = {
            id: this.id,
            name: payload.name,
            capacity: payload.capacity,
            description: payload.description,
        };
        this.id++;
        this.laboratories.push(data);
        return data;
    }

    update(id: number, payload: UpdateLaboratoryDto){
        const index = this.laboratories.findIndex((laboratory) => laboratory.id == id);
        if(index == -1){
            throw new NotFoundException('El laboratorio no se encontro');
        }
        this.laboratories[index]['name'] = payload.name;
        this.laboratories[index]['capacity'] = payload.capacity;
        this.laboratories[index]['description'] = payload.description;
        return this.laboratories[index];
    }

    delete(id: number){
        const index = this.laboratories.findIndex((laboratory) => laboratory.id == id);
        if(index == -1){
            throw new NotFoundException('El laboratorio no se encontro');
        }
        this.laboratories.splice(index, 1);
        return true;
    }
}
