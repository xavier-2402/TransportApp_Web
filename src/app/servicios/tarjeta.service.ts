import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs'
import { Cliente } from '../model/cliente.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TarjetaService {
  
    titularTarjetain:string;
    numeroTarjetain:string;
    fechaCaducidadin:string;
    codSeguridadin:string;

    constructor(private http: HttpClient) {

    }
    
    getQuery(query: string) {
        const url = `http://localhost:8090/${query}`;
        console.log(url);
        return this.http.get(url); 

        }     
    getTarjeta(): Observable<any>{
        const url = 'cliente';
        return this.getQuery(url);

    }
    getTarjetaById(id: string) {
        const url = 'cliente';
        return this.getQuery(url);
     }
     getDate(titularTarjetaget:string,numeroTarjetaget:string,fechaCaducidadget:string,codSeguridadget:string){
        this.titularTarjetain = titularTarjetaget;
        this.numeroTarjetain=numeroTarjetaget;
        this.fechaCaducidadin=fechaCaducidadget;
        this.codSeguridadin=codSeguridadget;       
    }
    postQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        let body = {
            titutlarTarjeta:this.titularTarjetain,
            numeroTarjeta:this.numeroTarjetain,
            fechaCaducidad:this.fechaCaducidadin,
            codSeguridad:this.codSeguridadin,


        }
        let json = JSON.stringify(body);
        let params = json;
        let headers = new HttpHeaders().set('Content-Type',' application/json ');
        console.log("body");
        console.log(params);
        return this.http.post(url, params, {headers: headers});

    }
    getTarjetas(): Observable<any> {
        const url = 'tarjeta';
       
        return this.postQuery(url);
    }

}