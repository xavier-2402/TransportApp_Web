import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Injectable, Input } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class LoginService{

    correoin:string;
    contraseniain:string;
    constructor(private http: HttpClient) {

    }

    getQuery(query: string) {
        const url = `http://localhost:8090/${query}`;
        console.log(url)

        return this.http.get(url); 
    }
    getPersonas(): Observable<any> {
        const url = 'persona';
        return this.getQuery(url);

    }
    getDate(correoget:string,contraseniaget:string){

        this.correoin=correoget;
        this.contraseniain=contraseniaget;
    }
    postQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        let body = {
            emp_correo:this.correoin,
            emp_contrasenia:this.contraseniain
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
       
        return this.postQuery(url);
    }

}
export interface Persona {
    nombre: string,
    contrasenia: string,
    id?: number
}


