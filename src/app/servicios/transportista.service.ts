import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { usuario } from './usuario.service';


@Injectable({
    providedIn:'root'
})

export class TransportistaService{
    constructor ( private http: HttpClient){

    }

    getQuery(query:string){
        const url = `http://localhost:9898/${query}`;
        console.log(url);
        return this.http.get(url);
    }
    getTransportista():Observable<any>{
        const url='empleado';
        return this.getQuery(url);

    }
    getTransportistaById(id:string)
    {
        const url='empleado';
      return this.getQuery(url);
    }

}

export class Transportista extends usuario {
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