import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable, of,} from 'rxjs';
import { map } from "rxjs/operators";
import { Injectable, Input } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class LoginService{

    correoin: string;
    contraseniain: string;
    constructor(private http: HttpClient) { }
    headers: HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json"
      });

    getQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        return this.http.get(url); 
    }
    getPersonas(): Observable<any> {
        const url = 'persona';
        return this.getQuery(url);

    }
    getDate(correoget: string , contraseniaget: string){

        this.correoin = correoget;
        this.contraseniain = contraseniaget;
    }
    postQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url);

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
        const url = 'persona';      
        return this.postQuery(url);
    }

    loginuser(email: string, password: string): Observable<any> {
        const url = `http://localhost:9898`;
        return this.http
          .post<Persona>(
            url,
            { email, password },
            { headers: this.headers }
          )
          .pipe(map(data => data));
      }
    
      setUser(user: Persona): void {
        let user_string = JSON.stringify(user);
        localStorage.setItem("currentUser", user_string);
      }
    
      setToken(token): void {
        localStorage.setItem("accessToken", token);
      }
    
      getToken() {
        return localStorage.getItem("accessToken");
      }
}

export interface Persona {
    correo: string;
    contrasenia: string ;
    id?: number;
}


