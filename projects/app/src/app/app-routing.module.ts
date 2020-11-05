import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentModule } from 'dist/payment/public-api';
import { LandingPageComponent } from 'projects/app/src/app/components/landing-page/landing-page.component';
import { MaterialFormComponent } from 'projects/app/src/app/components/material-form/material-form.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'payment',
    redirectTo: 'payment/first-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
