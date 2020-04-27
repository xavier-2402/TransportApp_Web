import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment';
import { Vehiculo } from '../model/vehiculo.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
    
    providedIn: 'root'
})

export class VehiculoService{
    nombre_propietarioin:string;
    matriculain: string;
    tipoin: string;
    colorin: string;
    marcain: string;
    placain: string;
    anioin: number;
    constructor( private http: HttpClient){
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

    getDate( matriculaget: string, tipoget: string , 
        colorget: string , marcaget: string, placaget: string, anioget:number){
       // this.nombre_propietarioin=nombre_propietarioget;
        this.matriculain = matriculaget;
        this.tipoin = tipoget;
        this.colorin = colorget;        
        this.marcain = marcaget;
        this.placain = placaget;
        this.anioin = anioget;
    }
    postQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        let body = {
            
        v_matricula: this.matriculain,
        v_tipo: this.tipoin,
        v_color: this.colorin,
        v_marca: this.marcain,
        v_placa: this.placain,
        v_anio: this.anioin,

        }
        let json = JSON.stringify(body);
        let params = json;
        let headers = new HttpHeaders().set('Content-Type',' application/json ');
        console.log("body");
        console.log(params);
        return this.http.post(url, params, {headers: headers});

    }
    getVehiculos(): Observable<any> {
        const url = 'vehiculo';
       
        return this.postQuery(url);
    }

}