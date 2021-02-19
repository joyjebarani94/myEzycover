import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NtechPaymentSampleComponent } from '../ntech-application-components/ntech-app-payment/ntech-payment-sample/ntech-payment-sample.component';
import { NtechPaymentComponent} from '../ntech-sample-component/ntech-payment/ntech-payment-component'
const routes: Routes =
  [
    { path: 'ntpayment', component: NtechPaymentSampleComponent },
    {path:'ntechpayment', component: NtechPaymentComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NtechAppPaymentRoutingModule { }