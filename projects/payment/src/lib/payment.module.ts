import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { InquiryDetailsComponent } from './components/inquiry-details/inquiry-details.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { RouterModule, Routes } from '@angular/router';

const components = [PaymentComponent, FirstPageComponent, InquiryDetailsComponent, ConfirmationComponent, TransactionDetailsComponent];

const routes: Routes = [
  {
    path: 'payment',
    component: PaymentComponent,
    children: [
      {
        path: 'first-step',
        component: FirstPageComponent
      },
      {
        path: 'inquiry-details',
        component: InquiryDetailsComponent
      },
      {
        path: 'confirmation',
        component: ConfirmationComponent
      }
    ]
  },
  {
    path : 'transaction-detail',
    component: TransactionDetailsComponent
  }
];

export const routerModuleForChild = RouterModule.forRoot(routes);

@NgModule({
  declarations: components,
  imports: [
    routerModuleForChild
  ],
  exports: components
})
export class PaymentModule { }
