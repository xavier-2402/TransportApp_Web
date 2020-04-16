import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transportista-tarjeta',
  templateUrl: './transportista-tarjeta.component.html',
  styles: []
})
export class TransportistaTarjetaComponent implements OnInit {

  @Input() transportista:any ={};
  @Input() indice:any ={}

  @Output() transportistaSeleccionado:EventEmitter<number>;

  constructor(private router: Router) { 
    this.transportistaSeleccionado = new EventEmitter();
      
  }

  ngOnInit(): void {
  }

  verTransportista(){
    console.log(this.indice);
    this.router.navigate(['/transportista', this.indice])
  }

}
