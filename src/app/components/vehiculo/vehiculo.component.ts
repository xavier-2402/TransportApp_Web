import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: []
})
export class VehiculoComponent implements OnInit {
  vehiculo:any={};

  constructor(private activatedRoute:ActivatedRoute,
    private vehiculoService:VehiculoService) {
      this.activatedRoute.params.subscribe(
        params =>{
            console.log(params['id']);                     
            this.vehiculo= this.vehiculoService.getVehiculoById(params['id']);
        }
    )
     }

  ngOnInit(): void {
  }

}
