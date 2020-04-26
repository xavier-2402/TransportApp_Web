import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { VehiculoService } from '../../servicios/vehiculo.service';
import { Vehiculo } from 'src/app/model/vehiculo.model';

@Component({
  selector: 'app-model-vehiculo',
  templateUrl: './model-vehiculo.component.html',
  styleUrls: ['./model-vehiculo.component.css']
})
export class ModelVehiculoComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private _builder: FormBuilder,private vehiculoService:VehiculoService) {

    this.signupForm = this._builder.group(  
      {
        nombre_propietario: ['', Validators.required],
        placa: ['',Validators.required ],
        matricula: ['',Validators.required],     
      }
    )
 
    console.log("correcto")  
   }
   get nombre_propietario() { return this.signupForm.get('nombre_propietario'); }
   get placa() { return this.signupForm.get('placa'); }
   get matricula() { return this.signupForm.get('matricula'); }

  ngOnInit(): void {
    this.getQuery();
  }

  enviar(values) {
    console.log(values);

    return values;

  }

  getQuery() {
   
    this.vehiculoService.getDate(this.signupForm.value.nombre,this.signupForm.value.placa,
      this.signupForm.value.marca,this.signupForm.value.matricula)
        this.vehiculoService.getVehiculos().subscribe((data:Vehiculo)=>{
          console.log(data);
          
        });
        console.log(this.signupForm.value.nombre);
    console.log("correcto");
    }
   


}
