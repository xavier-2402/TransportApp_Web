import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DireccionService } from '../../servicios/direccion.service';
import { Direccion } from '../../model/direccion.model';
import {Location} from '@angular/common'
@Component({
  selector: 'app-modal-direccion',
  templateUrl: './modal-direccion.component.html',
  styleUrls: ['./modal-direccion.component.css']
})
export class ModalDireccionComponent implements OnInit {

  direccionForm:FormGroup;
  constructor(private _builder: FormBuilder, private direccionService:DireccionService, location: Location) { 
    

    this.direccionForm = this._builder.group(  
      {
        provincia: ['',Validators.required],
        canton: ['', Validators.required],
        parroquia: ['',Validators.required ],
        barrio: ['',Validators.required],
        calle: ['',Validators.required]      
      }
    )
    console.log("correcto") 
  }
  get provincia() { return this.direccionForm.get('provincia'); }
  get canton() { return this.direccionForm.get('canton'); }
  get parroquia() { return this.direccionForm.get('parroquia'); }
  get barrio() { return this.direccionForm.get('barrio'); }
  get calle() { return this.direccionForm.get('calle'); }

  ngOnInit(): void {
  }
  enviar(values) {
    console.log(values);
    return values;
  }
  getQuery() {
   
    this.direccionService.getDate(this.direccionForm.value.provincia,this.direccionForm.value.canton,
      this.direccionForm.value.parroquia,this.direccionForm.value.barrio,this.direccionForm.value.calle)
        this.direccionService.getDirecciones().subscribe((data:Direccion)=>{
          console.log(data);  
        });
        console.log(this.direccionForm.value.provincia);
    console.log(" Direccion correcta");
    }
   
    onResetForm(): void {
      this.direccionForm.reset();
    }

}
