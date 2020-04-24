import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Persona } from './login.service';
@Injectable({
    providedIn: 'root'
})
export class PersonaService{
    cedulain:string;
    nombrein:string;
    apellidoin:string;
    telefonoin:string;
    correoin:string;
    contraseniain:string;
    constructor(private http: HttpClient){

    }

    getDate(nombreget: string,apellidoget:string,correoget:string,telefonoget:string,contraseniaget:string ){
        this.nombrein = nombreget;
        this.apellidoin=apellidoget;
        this.correoin=correoget;
        this.telefonoin=telefonoget;
        this.contraseniain=contraseniaget;
       
    }
    getQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        let body = {
           emp_nombre: this.nombrein,
            emp_apellido:this.apellidoin,
            emp_correo:this.correoin,
            emp_telefono:this.telefonoin
        }
        let json = JSON.stringify(body);
        let params = json;
        let headers = new HttpHeaders().set('Content-Type',' application/json ');
        console.log("body");
        console.log(params);
        return this.http.post(url, params, {headers: headers});

    }
    getCategorias(): Observable<any> {
        const url = 'empleado';
       
        return this.getQuery(url);
    }


}