import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MapComponent } from './map.component';
import {HttpClientModule} from '@angular/common/http';






@NgModule({

  exports: [MapComponent],
  declarations: [MapComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports:[HttpClientModule]
})
export class MapModule { }
