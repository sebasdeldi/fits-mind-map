export class Init{
  load(){
    if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined ){
      var markers = [
        {
          name: "Starting Point",
          lat: 0,
          lng: 0
        }
      ]
    }
  }
}