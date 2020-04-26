import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService, Persona } from '../../servicios/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private _builder: FormBuilder,private loginService:LoginService) {
    this.signupForm = this._builder.group(
      {
        correo: ['', Validators.required],
        contrasenia: ['',Validators.required]
      }  
    )      
  }
  

     ngOnInit(): void {
       this.getQuery();
    }

   

    enviar(values) {
      console.log(values);
  
      return values;
  
    }


    getQuery() {
      this.loginService.getDate(this.signupForm.value.nombre,this.signupForm.value.correo)
      
          this.loginService.getCategorias().subscribe((data:Persona)=>{
            console.log(data);
            
          });
      
          //idCategoria: this.signupForm.value.idCategoria,
          console.log(this.signupForm.value.nombre);
  
      
        }

}
