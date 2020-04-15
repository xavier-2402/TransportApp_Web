import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Injectable, Input } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class LoginService{
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
}
export interface Persona {
    nombre: string,
    contrasenia: string,
    id?: number
}


