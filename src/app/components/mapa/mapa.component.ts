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
    
  onChoseLocation(event){
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    
  }
  loadMap(){
    const mapEle : HTMLElement = document.getElementById('map');
    
  }
}
