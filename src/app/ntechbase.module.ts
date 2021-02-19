import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NtechBaseRoutingModule } from './ntechbase.routing.module';
import { NtechBaseComponent } from './ntechbase.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NtechCoreComponentModule } from './ntech-core-components/ntech-core-components/ntech-core.module';
import { NtechAppAdminModule } from './ntech-modules/ntech-app-admin.module';
import { AuthInterceptor } from './ntech-interceptors/ntech-auth-interceptor/AuthInterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedDataService } from './ntech-services/ntech-core-services/shared-data.service';
import { NtechAuthService } from './ntech-services/ntech-auth.service';
import { NtechAdminService } from './ntech-services/ntech-admin.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NtechPagerefresh } from './ntech-services/ntech-core-services/ntech-pagerefresh';
import { StoreModule } from '@ngrx/store' 
import { reducer } from 'src/app/ntech-storage/ntech-commondata.reducer'
import { DevloperTestModule } from './ntech-devloper-test/devloper-test.module';
import {NtechAppPaymentModule} from './ntech-modules/ntech-app-payment.module';
import {NtechAppPolicyModule} from './ntech-modules/ntech-app-policy.module';
import {NtechAppUserModule} from './ntech-modules/ntech-app-user.module';
import {NtechAppVendorModule} from './ntech-modules/ntech-app-vendor.module';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';
import { ModalModule } from 'ngx-bootstrap/modal';


import { ConfirmEqualValidatorDirective } from './ntech-directive/confirm-equal-validator.directive';

import { from } from 'rxjs';


@NgModule({
  declarations: [
    NtechBaseComponent,ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    NtechBaseRoutingModule,
    NtechCoreComponentModule,
    NtechAppAdminModule,
    StoreModule.forRoot({
      ntechcommondata : reducer
    }),
    ModalModule.forRoot(),
    

    /**
     *  Devloper testing pages should come this module 
     **/
    DevloperTestModule,
    NtechAppPaymentModule,
    NtechAppPolicyModule,
    NtechAppUserModule,
    NtechAppVendorModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule

  ],
  exports: [],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi :true},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    NtechAuthService,NtechAdminService,SharedDataService,NtechPagerefresh],
  bootstrap: [NtechBaseComponent]
})
export class NtechBaseModule 
{
 
}
