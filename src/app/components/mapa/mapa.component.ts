import { Component, OnInit } from '@angular/core';


declare var  google;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent{
  map=null;

  
  latitude = -2.88437;
  longitude =  -78.977749;
  zoom =16;
  lat= -2.904156;
  lng=  -78.981186;

 
  onChoseLocation(event){
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng; 
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
  }
 
}
