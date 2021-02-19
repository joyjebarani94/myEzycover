import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NtechAppVendorComponent } from '../ntech-application-components/ntech-app-vendor/ntech-app-vendor-sample/ntech-app-vendor.component';
import { NtechAppVendorRoutingModule } from '../ntech-routers/ntech-app-vendor.routing.module';
import {NtechVendorComponent} from '../ntech-sample-component/ntech-vendor/ntech-vendor-component'

@NgModule({

    imports:[
        FormsModule,
        HttpClientModule,
        CommonModule,
        NtechAppVendorRoutingModule
    ],
    declarations : [NtechAppVendorComponent, NtechVendorComponent ],
    exports :  
    [    
        NtechAppVendorComponent
            
    ],
    providers : [{provide: LocationStrategy, useClass: HashLocationStrategy}]


})
export class NtechAppVendorModule
{

}