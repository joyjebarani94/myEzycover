import { NgModule } from '@angular/core';
import { NtechAppAdminModule } from './ntech-app-admin.module';
import { NtechAppSetupModule } from './ntech-app-setup.module';
import { NtechAppPolicyModule } from './ntech-app-policy.module';
import { NtechAppDashboardModule } from './ntech-app-dashboard.module';
import { NtechAppVendorModule } from './ntech-app-vendor.module';
import { NtechLazyRoutingModule } from '../ntech-routers/ntech-lazy.routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({

    imports:
    [
        
        NtechLazyRoutingModule,
        NtechAppAdminModule,
        NtechAppSetupModule,
        NtechAppPolicyModule,
        NtechAppDashboardModule,
        NtechAppVendorModule
    ],
    declarations : 
    [
        
    ],
    exports :  
    [    
        NtechAppAdminModule,
        NtechAppSetupModule,
        NtechAppPolicyModule,
        NtechAppDashboardModule,
        NtechAppVendorModule
    ],
    providers : 
    [{provide: LocationStrategy, useClass: HashLocationStrategy}

    ]


})
export class NtechAppMainModule
{

}