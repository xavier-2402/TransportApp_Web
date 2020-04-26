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
        numero_tarjeta: ['', Validators.required],
        fecha_cad_tarjeta: ['',Validators.required ],
        cod_tarjeta: ['',Validators.required]   
      }
    )
    console.log("correcto")  
  }
  get titular_tarjeta() { return this.tarjetaForm.get('titular_tarjeta'); }
  get numero_tarjeta() { return this.tarjetaForm.get('numero_tarjeta'); }
  get fecha_cad_tarjeta() { return this.tarjetaForm.get('fecha_cad_tarjeta'); }
  get cod_tarjeta() { return this.tarjetaForm.get('cod_tarjeta'); }

  ngOnInit(): void {
  }

  
  enviar(values) {
    console.log(values);
    return values;
  }

  getQuery() {
   
    this.tarjetaService.getDate(this.tarjetaForm.value.nombre,this.tarjetaForm.value.apellido,
      this.tarjetaForm.value.correo,this.tarjetaForm.value.cedula)
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
