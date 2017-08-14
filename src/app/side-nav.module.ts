import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SidenavComponent } from './side-nav.component';
import { MapComponent } from './map.component';
import { MapModule } from './map.module';

import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";




@NgModule({
  declarations: [
    MapComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [SidenavComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [SidenavComponent, MapComponent]
})
export class SidenavModule { }




