import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NtechAppUserSampleComponent } from '../ntech-application-components/ntech-app-user/ntech-app-user-sample/ntech-app-user.component';
import { NtechUserComponent} from '../ntech-sample-component/ntech-user1/ntech-user/ntech-user-component';
import { NtechUser2Component} from '../ntech-sample-component/ntech-user1/ntech-user2/ntech-user2-component';
import {NtechUser3Component} from '../ntech-sample-component/ntech-user1/ntech-user3/ntech-user3-component'
import {NtechUser4Component} from '../ntech-sample-component/ntech-user1/ntech-user4/ntech-user4-component'
const routes: Routes = 
  [
    { path: 'ntuser', component: NtechAppUserSampleComponent },
    { path: 'ntechuser', component:NtechUserComponent },
    { path: 'ntechuser1', component:NtechUser2Component},
    { path: 'ntechuser3', component:NtechUser3Component},
    {path: 'ntechuser4', component:NtechUser4Component}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
 export class NtechAppUserRoutingModule { }