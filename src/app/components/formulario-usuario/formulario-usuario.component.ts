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
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private _builder: FormBuilder,private personaService:PersonaService) {
    this.signupForm = this._builder.group(  
      {
        cedula: ['',Validators.required],
        nombre: ['', Validators.required],
        apellido: ['',Validators.required ],
        correo: ['',Validators.required],
        celular: ['',Validators.required],
        contrasenia: ['',Validators.required],
        contraseniaconfirmacion: ['',Validators.required]
      }
    )
 
    console.log("correcto")  
   }
   get cedula() { return this.signupForm.get('cedula'); }
   get nombre() { return this.signupForm.get('nombre'); }
   get apellido() { return this.signupForm.get('apellido'); }
   get correo() { return this.signupForm.get('correo'); }
   get celular() { return this.signupForm.get('celular'); }
   get contrasenia() { return this.signupForm.get('contrasenia'); }
   get contraseniaconfirmacion() { return this.signupForm.get('contraseniaconfirmacion'); }

  ngOnInit(): void {  
    
  
    }
  giveImage(event){
    console.log(event);
  }


  enviar(values) {
    console.log(values);

    return values;

  }

postQuery() {
   
      this.personaService.getDate(this.signupForm.value.nombre,this.signupForm.value.apellido,
        this.signupForm.value.correo,this.signupForm.value.cedula,this.signupForm.value.celular,this.signupForm.value.contrasenia)
          this.personaService.getPersonas().subscribe((data:Persona)=>{
            console.log(data);  
          });
          console.log(this.signupForm.value.nombre);
      console.log("correcto");
      }
     
      onResetForm(): void {
        this.signupForm.reset();
      }
}


