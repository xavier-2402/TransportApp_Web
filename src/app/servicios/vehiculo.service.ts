import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment';
import { Vehiculo } from '../model/vehiculo.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
    
    providedIn:'root'
})

export class VehiculoService{
    baseURL = environment.apiURL +'vehiculo/'
    constructor ( private http: HttpClient){

    }

    
    getQuery(query: string){
        const url = `http://localhost:9898/${query}`;
        console.log(url);
        return this.http.get(url);
    }
    getVehiculo(): Observable<any>{
        const url='vehiculo';
        return this.getQuery(url);

    }
    getVehiculoById(id: string) {
        const url = 'vehiculo';
      return this.getQuery(url);
    }

    createVehiculo(vehiculo: Vehiculo) {
        return this.http.post<Vehiculo>(this.baseURL, vehiculo);
        

    }

}