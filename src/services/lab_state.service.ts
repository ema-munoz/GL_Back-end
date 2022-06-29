import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateLabStateDto } from "src/Dtos/lab_state/create-lab_state.dto";
import { UpdateLabStateDto } from "src/Dtos/lab_state/update-lab_state.dto";

@Injectable()
export class LabStateService {
    labStates: any[] = [];
    id= 1;
    getAll(){
        return this.labStates;
    }

    getOne(id: number){
        const labState = this.labStates.find((labState) => labState.id == id);
        if(labState == undefined){
            throw new NotFoundException('El Estado de Laboratorio no se encontro');
        }

        return labState;
    }

    filter(search: string){
        const labStates = this.labStates.filter((labState) => labState.state == search);
        return labStates;
    }

    create(payload: CreateLabStateDto){
        const data = {
            id: this.id,
            state: payload.state,
            observations: payload.observations
        };
        this.id++;
        this.labStates.push(data);
        return data;
    }

    update(id: number, payload: UpdateLabStateDto){
        const index = this.labStates.findIndex((labState) => labState.id == id);
        if(index == -1){
            throw new NotFoundException('El Estado de Laboratorio no se encontro');
        }
        this.labStates[index]['state'] = payload.state;
        this.labStates[index]['observations'] = payload.observations;
        return this.labStates[index];
    }

    delete(id: number){
        const index = this.labStates.findIndex((labState) => labState.id == id);
        if(index == -1){
            throw new NotFoundException('El Estado de Laboratorio no se encontro');
        }
        this.labStates.splice(index, 1);
        return true;
    }
}
