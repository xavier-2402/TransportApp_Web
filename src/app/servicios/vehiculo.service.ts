import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment';
import { Vehiculo } from '../model/vehiculo.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
    
    providedIn:'root'
})

export class VehiculoService{
    cedulain:string;
    nombrein:string;
    apellidoin:string;
    telefonoin:string;
    direccionin:string;
    correoin:string;
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
    getDate(nombreget: string,apellidoget:string,correoget:string,cedulaget:string){
        this.nombrein = nombreget;
        this.apellidoin=apellidoget;
        this.cedulain=cedulaget;
        //this.telefonoin=telefonoget;
        this.correoin=correoget;
       // this.direccionin=direccionget;
       // this.contraseniain=contraseniaget;
        
       
    }
    postQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        let body = {
          emp_identificacion:this.cedulain,
          emp_apellido:this.apellidoin,
          emp_nombre:this.nombrein,
          emp_correo:this.correoin,


        }
        let json = JSON.stringify(body);
        let params = json;
        let headers = new HttpHeaders().set('Content-Type',' application/json ');
        console.log("body");
        console.log(params);
        return this.http.post(url, params, {headers: headers});

    }
    getVehiculos(): Observable<any> {
        const url = 'empleado';
       
        return this.postQuery(url);
    }

}