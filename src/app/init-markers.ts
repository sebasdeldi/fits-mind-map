import { google } from "@agm/core/services/google-maps-types";
declare var swal: any;

export class Init {

  load(){
    
    if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined ){
      if(!!navigator.geolocation) {
    
        navigator.geolocation.getCurrentPosition(function(position) {
          swal({
            title: "Sweet!",
            text: "To start adding points to your route simply click the map !",
            imageUrl: "assets/rsz_run.jpg"
          });
          var markers = [
            {
              name: "Current Position",
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          ]
          localStorage.setItem('markers', JSON.stringify(markers));
          setTimeout(function(){
            location.reload();
          }, 4000);
        });
      
      } else {
        alert('GeoLocation not supported :( ')
      }
    }
  }

}


