import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// @ts-ignore
import {LandingPageComponent} from 'projects/app/src/app/components/landing-page/landing-page.component';
import {ToolsModule} from 'projects/tools/src/lib/tools.module';
import {FormlyWrapperModule} from 'projects/vendors/src/lib/formly-wrapper/formly-wrapper.module';
import { VendorsModule } from 'projects/vendors/src/lib/vendors.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialFormComponent } from './components/material-form/material-form.component';
import { PaymentModule } from 'projects/payment/src/lib/payment.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MaterialFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    VendorsModule,
    ToolsModule,
    PaymentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
