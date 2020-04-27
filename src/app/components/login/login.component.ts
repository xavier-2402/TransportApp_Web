import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService, Persona } from '../../servicios/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _builder: FormBuilder,private loginService:LoginService) {
    this.loginForm = this._builder.group(
      {
        correo: ['', Validators.required],
        contrasenia: ['',Validators.required]
      }  
    )     
  }
  get correo() { return this.loginForm.get('correo'); }
  get contrasenia() { return this.loginForm.get('contrasenia'); }

     ngOnInit(): void {
     
    }

    enviar(values) {
      console.log(values);
      return values;
    }
    Validar(){
      if(this.loginForm.value.correo=="xavier.y.2013@gmail.com"&& this.loginForm.value.contrasenia=="desarrolllo"){
        console.log("login correcto")

      }
    }
   
    postQuery() {
      this.loginService.getDate(this.loginForm.value.correo,this.loginForm.value.contrasenia)
      
          this.loginService.getCategorias().subscribe((data:Persona)=>{
            console.log(data);
            
          });
      
          //idCategoria: this.signupForm.value.idCategoria,
          
          
  
      
        }

}
