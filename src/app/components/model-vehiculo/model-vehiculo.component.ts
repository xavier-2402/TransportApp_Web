import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { VehiculoService } from '../../servicios/vehiculo.service';
import { Vehiculo } from 'src/app/model/vehiculo.model';
import { Tarifa } from 'src/app/model/tarifa.model';
import { TarifaService } from '../../servicios/tarifa.service';
@Component({
  selector: 'app-model-vehiculo',
  templateUrl: './model-vehiculo.component.html',
  styleUrls: ['./model-vehiculo.component.css']
})
export class ModelVehiculoComponent implements OnInit {
  vehiculoForm: FormGroup;
  colores;
  marcas;
  tipos;


  constructor(private _builder: FormBuilder,private vehiculoService: VehiculoService, private tarifaService: TarifaService ) {
    this.colores=["Rojo","Negro","Blanco","Gris","Rojo","Verde"];
    this.marcas=["Chevrolet","Toyota","Mercedes Benz","Hino","Mazda","Hyundai",
    "Nissan","JAC","Ford","Great Wall","Changan","Scrania","Man","Volvo","Isuzu"];
    this.tipos=["Camioneta 4x2 ","Camioneta 4x4","Camion 4x2","Camion 6x4","Tracto camion 4x2"];

    this.vehiculoForm = this._builder.group(  
      {
        nombre_propietario: ['', Validators.required],
        placa: ['',Validators.required ],
        matricula: ['',Validators.required], 
        descripcion: ['',Validators.required ],
        tarifa: ['',Validators.required],
        marca: ['',Validators.required],
        color: ['',Validators.required],
        tipo: ['',Validators.required],
        anio: ['',Validators.required],
      }
    )

 
    console.log("correcto")  
   }
   get nombre_propietario() { return this.vehiculoForm.get('nombre_propietario'); }
   get placa() { return this.vehiculoForm.get('placa'); }
   get matricula() { return this.vehiculoForm.get('matricula'); }
   get descripcion() { return this.vehiculoForm.get('descripcion'); }
   get tarifa() { return this.vehiculoForm.get('tarifa'); }
   get marca(){return this.vehiculoForm.get('marca');}
   get color(){return this.vehiculoForm.get('color')}
   get tipo(){return this.vehiculoForm.get('tipo');}
   get anio(){return this.vehiculoForm.get('anio');}


  ngOnInit(): void {
  }

  enviar(values) {
    //console.log(values);

    return values;

  }

  postQuery() {
   
    this.vehiculoService.getDate(this.vehiculoForm.value.nombre_propietario,this.vehiculoForm.value.matricula,this.vehiculoForm.value.tipo,
      this.vehiculoForm.value.color,this.vehiculoForm.value.marca, this.vehiculoForm.value.placa, 
      this.vehiculoForm.value.anio)
      this.vehiculoService.getVehiculos().subscribe( ( data: Vehiculo) =>{
          console.log(data); 
        });
        console.log(this.vehiculoForm.value.nombre);
    console.log("correcto");
    }
   
  createTarifa(){
    this.tarifaService.getDate(this.vehiculoForm.value.descripcion, this.vehiculoForm.value.tarifa)
  this.tarifaService.getTarifas().subscribe((data:Tarifa)=>{
    console.log(data);   
    alert("mensaje de alerta");
    });
    console.log(this.vehiculoForm.value.tarifa, this.vehiculoForm.value.descripcion);
    console.log( " correcto " );
    
  }
 }
