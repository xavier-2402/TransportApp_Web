import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  latitude = -2.866667;
  longitude =  -78.933333;
  zoom =16;
  lat= -2.866653;
  lng=  -78.933783;

    
  onChoseLocation(event){
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng; 
  }
  loadMap(){
    const mapEle : HTMLElement = document.getElementById('map');
    
  }
}
