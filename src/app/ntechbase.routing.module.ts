import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NtechLoginComponent } from './ntech-core-components/ntech-core-components/core-base/ntech-login/ntech-login.component';
import { NtechHomeComponent } from './ntech-core-components/ntech-core-components/core-base/ntech-home/ntech-home.conponent';
import { NtechWelcomeComonent } from './ntech-core-components/ntech-core-components/core-base/ntech-welcome/ntech-welcome.conponent';
import { NtechErrorComponenet } from './ntech-core-components/ntech-core-components/core-base/ntech-error-pages/ntech-error.component';
import { Demo1 } from './ntech-devloper-test/demo1/demo1.component';
import {NtechAdminComponent} from './ntech-sample-component/ntech-admin/ntech-admin-component';
import {NtechPaymentComponent} from './ntech-sample-component/ntech-payment/ntech-payment-component';
import {NtechPolicyComponent} from './ntech-sample-component/ntech-policy/ntech-policy-component';
import {NtechUserComponent} from './ntech-sample-component/ntech-user1/ntech-user/ntech-user-component';
import {NtechVendorComponent} from './ntech-sample-component/ntech-vendor/ntech-vendor-component';
import {NtechUser2Component} from './ntech-sample-component/ntech-user1/ntech-user2/ntech-user2-component';
import {NtechUser3Component} from './ntech-sample-component/ntech-user1/ntech-user3/ntech-user3-component';
import {NtechUser4Component} from './ntech-sample-component/ntech-user1/ntech-user4/ntech-user4-component';
import {NtechRegistrationComponent} from './ntech-core-components/ntech-core-components/core-base/ntech-registration/ntech-registration.component';
const routes: Routes = 
  [
      { path: 'ntechlogin', component: NtechLoginComponent },
      { path: 'ntechregister', component:NtechRegistrationComponent},
      { path: 'ntechwelcome', component: NtechWelcomeComonent },
      { path: 'ntechreg', component: NtechHomeComponent },
      { path: 'ntechhome', component: NtechHomeComponent },
      { path: 'ntecherror', component:NtechErrorComponenet},
      //testing
      { path: 'ntechadmin', component: NtechAdminComponent },
      { path: 'ntechpayment', component: NtechPaymentComponent },
      { path: 'ntechpolicy', component: NtechPolicyComponent },
      { path: 'ntechuser', component: NtechUserComponent },
      { path: 'ntechvendor', component: NtechVendorComponent },
      { path: 'ntechuser1', component: NtechUser2Component},
      {path: 'ntechuser3', component:NtechUser3Component},
      {path: 'ntechuser4', component:NtechUser4Component},
      
      /********
       * 
       * Lazy Loading Technique, Which is used for performanc Main Module is AppMainModule
       * 
       ********/
      {
        path: 'ntechapp', component: NtechHomeComponent ,
        loadChildren: () => import('./ntech-modules/ntech-app-main.module')
        .then(ntmod =>ntmod.NtechAppMainModule)
      },

      /********
       * 
       * Devloper Test Pages routing 
       * 
       ********/
      { path: 'devloper',
      component:Demo1,
      loadChildren: () => import('./ntech-devloper-test/devloper-test.module')
      .then(ntmod =>ntmod.DevloperTestModule)  },

      { path: '**', component: NtechWelcomeComonent },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NtechBaseRoutingModule { }
