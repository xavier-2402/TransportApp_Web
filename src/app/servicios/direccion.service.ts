import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';





@Injectable({
    providedIn: 'root'
})
export class DireccionService{
    constructor(private http: HttpClient) {

    }

    getQuery(query: string) {
        const url = `http://localhost:8090/${query}`;
        console.log(url)

        return this.http.get(url); 
    }
}