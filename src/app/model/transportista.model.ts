import { Usuario } from './usuario.model';

export class Transportista extends Usuario {
    private sueldo: number;
    private horario:string;


    getSueldo(){
        return this.sueldo
    }
    setSueldo( sueldo:number){
        this.sueldo = sueldo;
    }


    getHorario(){
        return this.horario
    }
    setHorario(horario:string){
        this.horario = horario;
    }



    getAllData(){
        return this.getNombre()+" "+this.getApellido()+" "+this.getEdad()+" "+this.getTelefono()+this.getSueldo()+" "+this.getHorario();
    }
   
}