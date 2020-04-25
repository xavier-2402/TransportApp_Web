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
    direccionin:string;
    correoin:string;
    contraseniain:string;
    constructor(private http: HttpClient){

    }

    getDate(nombreget: string,apellidoget:string,correoget:string,telefonoget:string,contraseniaget:string,direccionget:string ){
        this.nombrein = nombreget;
        this.apellidoin=apellidoget;
        this.telefonoin=telefonoget;
        this.correoin=correoget;
        this.direccionin=direccionget;
        this.contraseniain=contraseniaget;
        
       
    }
    getQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        let body = {
          idPersona:1,
          cedula:this.cedulain,
          apellido:this.apellidoin,
          nombre:this.nombrein,
          correo:this.correoin,
          direccion:this.direccionin,
          telefono:this.telefonoin,
          contrasenia:this.contraseniain,

        }
        let json = JSON.stringify(body);
        let params = json;
        let headers = new HttpHeaders().set('Content-Type',' application/json ');
        console.log("body");
        console.log(params);
        return this.http.post(url, params, {headers: headers});

    }
    getPersonas(): Observable<any> {
        const url = 'persona';
       
        return this.getQuery(url);
    }


}