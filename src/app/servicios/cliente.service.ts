import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs'
import { Cliente } from '../model/cliente.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    baseURL = environment.apiURL +'vehiculo/'
    constructor(private http: HttpClient) {

    }
    
    getQuery(query: string) {
        const url = `http://localhost:8090/${query}`;
        console.log(url);
        return this.http.get(url); 

        }     
    getCliente(): Observable<any>{
        const url = 'cliente';
        return this.getQuery(url);

    }
    getClienteById(id: string) {
        const url = 'cliente';
        return this.getQuery(url);
     }

    createCliente(cliente: Cliente) {
        return this.http.post<Cliente>(this.baseURL, cliente);
        

    }

}