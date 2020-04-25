import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaService } from '../../servicios/persona.service';
import { Persona } from 'src/app/servicios/login.service';
@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private _builder: FormBuilder,private personaService:PersonaService) {
    this.signupForm = this._builder.group(
      {
        cedula: ['',Validators.required],
        nombre: ['', Validators.required],
        apellido: ['',Validators.required],
        correo: ['',Validators.required],
        telefono: ['',Validators.required],
        contrasenia: ['',Validators.required]
      }
    )
 
    console.log("correcto")  
   }

  ngOnInit(): void {  
    this.getQuery();
    }
  giveImage(event){
    console.log(event);
  }


  enviar(values) {
    console.log(values);

    return values;

  }

  getQuery() {
    this.personaService.getDate(this.signupForm.value.nombre,this.signupForm.value.apellido,
      this.signupForm.value.correo,this.signupForm.value.telefono,this.signupForm.value.contrasenia,this.signupForm.value.direccion)
    
        this.personaService.getPersonas().subscribe((data:Persona)=>{
          console.log(data);
          
        });
  
        console.log(this.signupForm.value.nombre);

    
      }

}


