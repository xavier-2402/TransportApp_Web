import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TransportistaService } from '../../servicios/transportista.service';


@Component({
  selector: 'app-transportista',
  templateUrl: './transportista.component.html',
  styles: []
})
export class TransportistaComponent implements OnInit {
  transportista:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private transportistaService: TransportistaService) {
                this.activatedRoute.params.subscribe(
                  params =>{
                      console.log(params['id']);                     
                      this.transportista= this.transportistaService.getTransportistaById(params['id']);
                  }
              )
             
               }
  ngOnInit(): void {
    
  }

 

}
