import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NtechAppUserSampleComponent } from '../ntech-application-components/ntech-app-user/ntech-app-user-sample/ntech-app-user.component';
import { NtechAppUserRoutingModule } from '../ntech-routers/ntech-app-user.routing.module';
import {NtechUserComponent} from '../ntech-sample-component/ntech-user1/ntech-user/ntech-user-component'
import {NtechUser2Component} from '../ntech-sample-component/ntech-user1/ntech-user2/ntech-user2-component';
import {NtechUser3Component} from '../ntech-sample-component/ntech-user1/ntech-user3/ntech-user3-component';
import {NtechUser4Component} from '../ntech-sample-component/ntech-user1/ntech-user4/ntech-user4-component';
@NgModule({

    imports:
        [
            FormsModule,
            HttpClientModule,
            CommonModule,
            NtechAppUserRoutingModule
        ],
    declarations:
        [
            NtechAppUserSampleComponent,NtechUserComponent,NtechUser2Component,NtechUser3Component,NtechUser4Component
        ],
    exports:
        [],
    providers:
        [{ provide: LocationStrategy, useClass: HashLocationStrategy }
        ]


})
export class NtechAppUserModule {

}