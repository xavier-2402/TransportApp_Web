import { Component, OnInit } from '@angular/core';
import { TransportistaService } from '../../servicios/transportista.service';


@Component({
  selector: 'app-transportistas',
  templateUrl: './transportistas.component.html',
  styles: []
})
export class TransportistasComponent implements OnInit {

  transportistas:any ={};

  constructor( private transportistaService:TransportistaService) {

   }

   getTransportista(){
     this.transportistaService.getTransportista().subscribe((data:{Transportista})=>{
       console.log(data);
       this.transportistas=data;
     })
   }

  
  

  ngOnInit(): void {
    this.getTransportista();
  }

}
