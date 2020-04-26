import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class DireccionService{
    provinciain:string;
    cantonin:string;
    parroquiain:string;
    barrioin:string;
    callein:string;

    constructor(private http: HttpClient) {

    }

    getQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        return this.http.get(url); 
    }

    getDate(provinciaget:string,cantonget:string,parroquiaget:string, barrioget:string,calleget:string){
        this.provinciain = cantonget;
        this.cantonin=parroquiaget;
        this.parroquiain=provinciaget;
        this.barrioin=barrioget;
        this.callein=calleget;   
    }
    postQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        let body = {
          provincia_dir:this.provinciain,
          canton_dir:this.cantonin,
          parroquia_dir:this.parroquiain,
          barrio_dir:this.barrioin,
          calle_dir:this.callein,
        
        }
        let json = JSON.stringify(body);
        let params = json;
        let headers = new HttpHeaders().set('Content-Type',' application/json ');
        console.log("body");
        console.log(params);
        return this.http.post(url, params, {headers: headers});

    }
    getDirecciones(): Observable<any> {
        const url = 'direccion';
       
        return this.postQuery(url);
    }
}