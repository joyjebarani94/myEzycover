import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NtechAppDashBoardRoutingModule } from '../ntech-routers/ntech-app-dashboard.routing.module';
import { NtechAppDashBoardComponent } from '../ntech-application-components/ntech-app-dashboard/ntech-app-dashboard/ntech-app-dashboard.component';


@NgModule({

    imports: [
        FormsModule,
        HttpClientModule,
        CommonModule,
        NtechAppDashBoardRoutingModule

    ],
    declarations: [NtechAppDashBoardComponent],
    exports:
        [
            NtechAppDashBoardComponent
        ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]



})
export class NtechAppDashboardModule {

}