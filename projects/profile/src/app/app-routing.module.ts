import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstpageComponent} from 'projects/payment/src/lib/components/firstpage/firstpage.component';

const routes: Routes = [
  {
    path: '',
    component: FirstpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
