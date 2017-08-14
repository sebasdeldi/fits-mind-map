import { Component } from '@angular/core';
import { MapComponent } from './map.component';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  entryComponents: [MapComponent]
})
export class SidenavComponent {}


