import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormlyWrapperComponent} from 'projects/vendors/src/lib/formly-wrapper/formly-wrapper.component';
import {FormlyWrapperModule} from 'projects/vendors/src/lib/formly-wrapper/formly-wrapper.module';
import {MaterialWrapperModule} from 'projects/vendors/src/lib/material-wrapper/mateial-wrapper.module';
import { VendorsComponent } from './vendors.component';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [VendorsComponent],
  imports: [
    MatButtonModule,
    FormlyWrapperModule,
    HttpClientModule,
    BrowserModule,
    MaterialWrapperModule
  ],
  exports: [
    FormlyWrapperModule,
    MaterialWrapperModule,
    FormlyWrapperComponent,
    ]
})
export class VendorsModule { }
