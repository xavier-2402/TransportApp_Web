import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-model-vehiculo',
  templateUrl: './model-vehiculo.component.html',
  styleUrls: ['./model-vehiculo.component.css']
})
export class ModelVehiculoComponent implements OnInit {
  signupForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  enviar(values) {
    console.log(values);

    return values;

  }


}
