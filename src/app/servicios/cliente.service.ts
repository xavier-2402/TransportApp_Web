import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Injectable, Input } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    constructor(private http: HttpClient) {

    }
    
    getQuery(query: string) {
        const url = `http://localhost:8090/${query}`;
        console.log(url)

        return this.http.get(url); 
    }
}