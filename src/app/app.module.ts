import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { MapModule } from './map.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AgmCoreModule } from "@agm/core";
import { SidenavComponent } from "./side-nav.component";
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from "@angular/common/http";




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDWeAbxruiQufjUBpO34QiMtP6Ui_1F9DQ'
    }),
    HttpClientModule
  ],
  bootstrap: [AppComponent, MapComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
