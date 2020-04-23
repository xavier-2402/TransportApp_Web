import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Transportista } from '../model/transportista.model';
import { environment } from '../../environments/environment';



@Injectable({
    
    providedIn:'root'
})

export class TransportistaService {
    baseURL = environment.apiURL + 'conductor/'
    constructor( private http: HttpClient){

    }

    getQuery(query: string){
        const url = `http://localhost:9898/${query}`;
        console.log(url);
        return this.http.get(url);
    }
    getTransportista(): Observable<any>{
        const url='conductor';
        return this.getQuery(url);

    }
    getTransportistaById(id: string)
    {
        const url = 'conductor';
      return this.getQuery(url);
    }

    createTransportista(transportista: Transportista){
        return this.http.post<Transportista>(this.baseURL, transportista);
        

    }



}

