import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NtechPaymentSampleComponent } from '../ntech-application-components/ntech-app-payment/ntech-payment-sample/ntech-payment-sample.component';
import { NtechAppPaymentRoutingModule } from '../ntech-routers/ntech-app-payment.routing.module';
import { NtechCoreComponentModule } from '../ntech-core-components/ntech-core-components/ntech-core.module';
import { NtechPaymentService } from '../ntech-services/ntech-payment.service';
import {NtechPaymentComponent} from '../ntech-sample-component/ntech-payment/ntech-payment-component';

@NgModule({

    imports: [
        FormsModule,
        HttpClientModule,
        CommonModule,
        NtechCoreComponentModule
        
    ],
    declarations: [
        NtechPaymentSampleComponent,
        NtechPaymentComponent
    ],
    exports: [
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, NtechPaymentService]



})
export class NtechAppPaymentModule {

}