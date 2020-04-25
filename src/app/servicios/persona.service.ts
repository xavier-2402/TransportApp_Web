import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Persona } from './login.service';
@Injectable({
    providedIn: 'root'
})
export class PersonaService{
    cedulain:string;
    nombrein:string;
    apellidoin:string;
    telefonoin:string;
    direccionin:string;
    correoin:string;
    contraseniain:string;
    constructor(private http: HttpClient){

    }

    getDate(nombreget: string,apellidoget:string,correoget:string,telefonoget:string,contraseniaget:string,direccionget:string ){
        this.nombrein = nombreget;
        this.apellidoin=apellidoget;
        this.telefonoin=telefonoget;
        this.correoin=correoget;
        this.direccionin=direccionget;
        this.contraseniain=contraseniaget;
        
       
    }
    getQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        let body = {
          idPersona:1,
          cedula:this.cedulain,
          apellido:this.apellidoin,
          nombre:this.nombrein,
          correo:this.correoin,
          direccion:this.direccionin,
          telefono:this.telefonoin,
          contrasenia:this.contraseniain,

        }
        let json = JSON.stringify(body);
        let params = json;
        let headers = new HttpHeaders().set('Content-Type',' application/json ');
        console.log("body");
        console.log(params);
        return this.http.post(url, params, {headers: headers});

    }
    getPersonas(): Observable<any> {
        const url = 'persona';
       
        return this.getQuery(url);
    }
     validarCedula(cedula: string) {
        if (cedula.length === 10) {
          const digitoRegion = cedula.substring(0, 2);
          if (digitoRegion >= String(1) && digitoRegion <= String(24)) {
            const ultimoDigito = Number(cedula.substring(9, 10));
            const pares = Number(cedula.substring(1, 2)) + Number(cedula.substring(3, 4)) + Number(cedula.substring(5, 6)) + Number(cedula.substring(7, 8));
            let numeroUno: any = cedula.substring(0, 1);
            numeroUno = (numeroUno * 2);
            if (numeroUno > 9) {
              numeroUno = (numeroUno - 9);
            }
      
            let numeroTres: any = cedula.substring(2, 3);
            numeroTres = (numeroTres * 2);
            if (numeroTres > 9) {
              numeroTres = (numeroTres - 9);
            }
      
            let numeroCinco: any = cedula.substring(4, 5);
            numeroCinco = (numeroCinco * 2);
            if (numeroCinco > 9) {
              numeroCinco = (numeroCinco - 9);
            }
      
            let numeroSiete: any = cedula.substring(6, 7);
            numeroSiete = (numeroSiete * 2);
            if (numeroSiete > 9) {
              numeroSiete = (numeroSiete - 9);
            }
      
            let numeroNueve: any = cedula.substring(8, 9);
            numeroNueve = (numeroNueve * 2);
            if (numeroNueve > 9) {
              numeroNueve = (numeroNueve - 9);
            }
      
            const impares = numeroUno + numeroTres + numeroCinco + numeroSiete + numeroNueve;
      
            // Suma total
            const sumaTotal = (pares + impares);
      
            // extraemos el primero digito
            const primerDigitoSuma = String(sumaTotal).substring(0, 1);
      
            // Obtenemos la decena inmediata
            const decena = (Number(primerDigitoSuma) + 1) * 10;
      
            // Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
            let digitoValidador = decena - sumaTotal;
      
            // Si el digito validador es = a 10 toma el valor de 0
            if (digitoValidador === 10) {
              digitoValidador = 0;
            }
      
            // Validamos que el digito validador sea igual al de la cedula
            if (digitoValidador === ultimoDigito) {
              return true;
              console.log("correcta")
            } else {
              return false;
              console.log("incorrecta")
            }
      
          } else {
            // imprimimos en consola si la region no pertenece
            return false;
            console.log("incorrecta")
          }
        } else {
          // Imprimimos en consola si la cedula tiene mas o menos de 10 digitos
          return false;
          console.log("incorrecta")
        }
    } 
   


}