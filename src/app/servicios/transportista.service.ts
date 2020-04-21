import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Transportista } from '../model/transportista.model';
import { environment } from '../../environments/environment';



@Injectable({
    
    providedIn:'root'
})

export class TransportistaService{
    baseURL = environment.apiURL +'users/'
    constructor ( private http: HttpClient){

    }

    getQuery(query:string){
        const url = `http://localhost:9898/${query}`;
        console.log(url);
        return this.http.get(url);
    }
    getTransportista():Observable<any>{
        const url='empleado';
        return this.getQuery(url);

    }
    getTransportistaById(id:string)
    {
        const url='empleado';
      return this.getQuery(url);
    }

    createTransportista(transportista:Transportista){
        return this.http.post<Transportista>(this.baseURL,transportista);
        

    }



}

