import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NtechPolicySampleComponent } from '../ntech-application-components/ntech-app-policy/ntech-policy-sample/ntech-policy-sample.component';
import {NtechPolicyComponent} from '../ntech-sample-component/ntech-policy/ntech-policy-component'
const routes: Routes = 
  [
    { path: 'ntpolicy', component: NtechPolicySampleComponent },
    { path: 'ntechpolicy', component: NtechPolicyComponent}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
 export class NtechAppPolicyRoutingModule { }