import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Transportista } from '../../model/transportista.model';
import { TransportistaService } from '../../servicios/transportista.service';
import { Direccion } from '../../model/direccion.model';

@Component({
  selector: 'app-formulario-transportista',
  templateUrl: './formulario-transportista.component.html',
  styleUrls: ['./formulario-transportista.component.css']
})
export class FormularioTransportistaComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private _builder: FormBuilder, private transportistaService:TransportistaService) {
    this.signupForm = this._builder.group(
      {
        direccion: ['', Validators.required]
      }
    )
 
    console.log("correcto")  
   }

  ngOnInit(): void {
    this.getQuery();
  }

  enviar(values) {
    console.log(values);

    return values;

  }

  getQuery() {
    this.transportistaService.getDate(this.signupForm.value.direccion)
    
        this.transportistaService.getCategorias().subscribe((data:Transportista)=>{
          console.log(data);
          
        });
    
        //idCategoria: this.signupForm.value.idCategoria,
        console.log(this.signupForm.value.nombre);

    
      }


}
