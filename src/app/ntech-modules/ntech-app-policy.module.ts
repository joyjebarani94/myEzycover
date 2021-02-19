import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NtechPolicySampleComponent } from '../ntech-application-components/ntech-app-policy/ntech-policy-sample/ntech-policy-sample.component';
import {NtechPolicyComponent} from '../ntech-sample-component/ntech-policy/ntech-policy-component';
import { from } from 'rxjs';

@NgModule({

    imports: [
        FormsModule,
        HttpClientModule,
        CommonModule
    ],
    declarations: [NtechPolicySampleComponent,NtechPolicyComponent],
    exports:
        [
        ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]


})
export class NtechAppPolicyModule {

}