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
  vehiculoForm: FormGroup;
  colores;
  marcas;
  tipos;


  constructor(private _builder: FormBuilder,private vehiculoService:VehiculoService) {
    this.colores=["Rojo","Negro","Blanco","Gris","Rojo","Verde"];
    this.marcas=["Chevrolet","Toyota","Mercedes Benz","Hino","Mazda","Hyundai",
    "Nissan","JAC","Ford","Great Wall","Changan","Scrania","Man","Volvo","Isuzu"];
    this.tipos=["Camioneta 4x2 ","Camioneta 4x4","Camion 4x2","Camion 6x4","Tracto camion 4x2"];

    this.vehiculoForm = this._builder.group(  
      {
        nombre_propietario: ['', Validators.required],
        placa: ['',Validators.required ],
        matricula: ['',Validators.required], 
        descripcion: ['',Validators.required ],
        tarifa: ['',Validators.required],
      }
    )

 
    console.log("correcto")  
   }
   get nombre_propietario() { return this.vehiculoForm.get('nombre_propietario'); }
   get placa() { return this.vehiculoForm.get('placa'); }
   get matricula() { return this.vehiculoForm.get('matricula'); }
   get descripcion() { return this.vehiculoForm.get('descripcion'); }
   get tarifa() { return this.vehiculoForm.get('tarifa'); }


  ngOnInit(): void {
    this.postQuery();
  }

  enviar(values) {
    console.log(values);

    return values;

  }

  postQuery() {
   
    this.vehiculoService.getDate(this.vehiculoForm.value.nombre,this.vehiculoForm.value.placa,
      this.vehiculoForm.value.marca,this.vehiculoForm.value.matricula)
        this.vehiculoService.getVehiculos().subscribe((data:Vehiculo)=>{
          console.log(data);
          
        });
        console.log(this.vehiculoForm.value.nombre);
    console.log("correcto");
    }
   


}
