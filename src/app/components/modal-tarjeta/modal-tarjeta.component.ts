import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TarjetaService } from '../../servicios/tarjeta.service';
import { Tarjeta } from '../../model/tarjeta.model';

@Component({
  selector: 'app-modal-tarjeta',
  templateUrl: './modal-tarjeta.component.html',
  styleUrls: ['./modal-tarjeta.component.css']
})
export class ModalTarjetaComponent implements OnInit {

  tarjetaForm:FormGroup;
  constructor(private _builder: FormBuilder,private tarjetaService:TarjetaService) { 
    this.tarjetaForm = this._builder.group(  
      {
        titular_tarjeta: ['',Validators.required],
        numerotarjeta: ['', Validators.required],
        fecha_cad_tarjeta: ['',Validators.required ],
        cod_tarjeta: ['',Validators.required]   
      }
    )
    console.log("correcto")  
  }
  get titular_tarjeta() { return this.tarjetaForm.get('titular_tarjeta'); }
  get numerotarjeta() { return this.tarjetaForm.get('numerotarjeta'); }
  get fecha_cad_tarjeta() { return this.tarjetaForm.get('fecha_cad_tarjeta'); }
  get cod_tarjeta() { return this.tarjetaForm.get('cod_tarjeta'); }

  ngOnInit(): void {
   // this.postQuery();
  }

  
  enviar(values) {
    console.log(values);
    return values;
  }

  postQuery() {
   
    this.tarjetaService.getDate(this.tarjetaForm.value.titular_tarjeta,this.tarjetaForm.value.numerotarjeta,
      this.tarjetaForm.value.fecha_cad_tarjeta,this.tarjetaForm.value.cod_tarjeta)
        this.tarjetaService.getTarjetas().subscribe((data:Tarjeta)=>{
          console.log(data);  
        });
        console.log(this.tarjetaForm.value.nombre);
    console.log("correcto");
    }
   
    onResetForm(): void {
      this.tarjetaForm.reset();
    }

}
