import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { Vehiculo } from '../../model/vehiculo.model';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styles: ['']
})
export class VehiculosComponent implements OnInit {
  vehiculos:any=[];

  constructor( private vehiculoService:VehiculoService) 
  {

   }
   getVehiculo(){
    this.vehiculoService.getVehiculo().subscribe((data:{Vehiculo})=>{
      console.log(data);
      this.vehiculos=data;
    })
  }

  ngOnInit(): void {
    this.getVehiculo();
  }

}
