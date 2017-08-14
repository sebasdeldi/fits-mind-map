import { Component } from '@angular/core';
import { MapComponent } from './map.component';
import { SidenavComponent } from "./side-nav.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  entryComponents: [MapComponent, SidenavComponent]

})

export class AppComponent {}

