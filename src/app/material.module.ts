import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdListModule} from '@angular/material';








@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdGridListModule, MdCardModule, MdSidenavModule,MdListModule ],
  exports: [MdButtonModule, MdCheckboxModule, MdGridListModule, MdCardModule, MdSidenavModule, MdListModule],
})
export class MaterialModule { }