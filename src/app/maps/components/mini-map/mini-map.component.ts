import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styles: `
  div{
    width: 100%;
    height:150px;
    margin:0px;

  }
  `,
})
export class MiniMapComponent {
  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit() {
    if (!this.divMap?.nativeElement) throw 'Map Div not found';
    if (!this.lngLat) throw "LngLat can't be null";

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat,
      zoom: 15,
      interactive: false,
    });
    new Marker().setLngLat(this.lngLat).addTo(map);
  }
}
