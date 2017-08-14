import { Component } from '@angular/core';
import { MapComponent } from './map.component';
import { MarkerService } from "./services/marker.service";
declare var swal: any;


@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  entryComponents: [MapComponent],
  providers: [MarkerService]
})

export class SidenavComponent {
  wayPoints = []
  constructor(private markerService: MarkerService){
    this.wayPoints = this.markerService.getMarkers();
  }

  showAlert(){
    swal("JSON ready!", JSON.stringify(JSON.parse(localStorage.getItem('markers')),null,2 ), "success");
  }

  

}


