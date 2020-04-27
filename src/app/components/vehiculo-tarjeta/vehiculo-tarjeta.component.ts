import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from '../../model/vehiculo.model';

@Component({
  selector: 'app-vehiculo-tarjeta',
  templateUrl: './vehiculo-tarjeta.component.html',
  styles: []
})
export class VehiculoTarjetaComponent implements OnInit {
  @Input() vehiculo:any ={};
  @Input() indice:any ={}

  @Output() vehiculoSeleccionado:EventEmitter<number>;


  constructor(private router: Router) {

    this.vehiculoSeleccionado=new EventEmitter();
   }

  ngOnInit(): void {
  }

  verVehiculo(){
    console.log(this.indice);
    this.router.navigate(['/vehiculo', this.indice])
  }

}
