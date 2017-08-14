import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { MarkerService } from "./services/marker.service";
declare var swal: any;


@Component({
  selector: 'ng-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
  providers: [HttpClient, MarkerService]
})

export class MapComponent {
  results: string[];
  // initial point
  lat: number = 59.911491;
  lng: number = 10.757933;

  markers: marker[] = []

  constructor(private http: HttpClient, private markerService: MarkerService){
    this.markers = this.markerService.getMarkers();
  }

  clickedMap($event:any){
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + $event.coords.lat + ',' + $event.coords.lng + '&key=AIzaSyDWeAbxruiQufjUBpO34QiMtP6Ui_1F9DQ').subscribe(data => {
      this.results = data['results'][0]['formatted_address'];

      var newMarker = {
        name: String(this.results),
        lat: parseFloat($event.coords.lat),
        lng: parseFloat($event.coords.lng)
      }


      this.markers.push(newMarker)
      this.markerService.addMarker(newMarker);
    });
    
  }

  finalMarkerPosition(marker:any, $event:any){
    var actualizedMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng)
    }
    
    var newLat =  parseFloat($event.coords.lat);
    var newLng = parseFloat($event.coords.lng);

    this.markerService.updateMarker(actualizedMarker, newLat, newLng);
  }

  deleteMarker(marker){
    for(var i = 0; i < this.markers.length; i++){
      if (marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng) {
        this.markers.splice(i, 1);
      }      
    }
    this.markerService.deleteMarker(marker);
  }
}

interface marker {
  name?: string;
  lat: number;
  lng: number;
}