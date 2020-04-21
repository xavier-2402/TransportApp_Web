import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment';
import { Vehiculo } from '../model/vehiculo.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
    
    providedIn:'root'
})

export class VehiculoService{
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

    createTransportista(transportista:Vehiculo){
        return this.http.post<Vehiculo>(this.baseURL,transportista);
        

    }

}