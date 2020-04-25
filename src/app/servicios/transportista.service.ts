import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Transportista } from '../model/transportista.model';
import { environment } from '../../environments/environment';



@Injectable({
    
    providedIn:'root'
})

export class TransportistaService {
    baseURL = environment.apiURL + 'conductor/'
    direccionin:string
    constructor( private http: HttpClient){

    }

    getQuery(query: string){
        const url = `http://localhost:9898/${query}`;
        console.log(url);
        return this.http.get(url);
    }
    getTransportista(): Observable<any>{
        const url='empleado';
        return this.getQuery(url);

    }
    getTransportistaById(id: string)
    {
        const url = 'empleado';
      return this.getQuery(url);
    }

    createTransportista(transportista: Transportista){
        return this.http.post<Transportista>(this.baseURL, transportista);
        

    }
    getDate(direccionget:string){

        this.direccionin=direccionget
    }
    postQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        let body = {
           direccion:this.direccionin
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

