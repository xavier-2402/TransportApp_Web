import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class TarifaService {
  
    valorin: number;
    tarifa_descripcionin : string;

    constructor(private http: HttpClient) {
    }
    getQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url);
        return this.http.get(url); 

        }   
    getTarifa(): Observable<any>{
            const url = 'transportista';
            return this.getQuery(url);
    }
    getTarifaById(id: string) {
        const url = 'cliente';
        return this.getQuery(url);
     }
     getDate(tarjetadescripcionget:string,valorget:number){
        this.tarifa_descripcionin = tarjetadescripcionget;
        this.valorin = valorget;      
    }
    postQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        let body = {
           valor: this.valorin,
           tarifa_descripcion: this.tarifa_descripcionin,

        }
        let json = JSON.stringify(body);
        let params = json;
        let headers = new HttpHeaders().set('Content-Type',' application/json ');
        console.log("body");
        console.log(params);
        return this.http.post(url, params, {headers: headers});
    }

    getTarifas(): Observable<any> {
        const url = 'tarifa';
       
        return this.postQuery(url);
    }

}