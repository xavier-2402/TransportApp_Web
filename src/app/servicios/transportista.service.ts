import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'



@Injectable({
    providedIn:'root'
})

export class TransportistaService{
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

}

