import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NtechAppSetupSampleComponent } from '../ntech-application-components/ntech-app-setup/ntech-app-setup-sample/ntech-app-setup.component';
import { NtechAppSetupRoutingModule } from '../ntech-routers/ntech-app-setup.routing.module';
import { NtechCustomPage1Component } from '../ntech-core-components/ntech-custompage-components/ntech-custompage1/ntech-custompage1.component';
import { NtechCustomPage2Component } from '../ntech-core-components/ntech-custompage-components/ntech-custompage2/ntech-custompage2.component';
import { NtechCustomPage3Component } from '../ntech-core-components/ntech-custompage-components/ntech-custompage3/ntech-custompage3.component';
import { NtechCustomPage4Component } from '../ntech-core-components/ntech-custompage-components/ntech-custompage4/ntech-custompage4.component';
import { NtechCustomPage5Component } from '../ntech-core-components/ntech-custompage-components/ntech-custompage5/ntech-custompage5.component';
import { NtechAppCustomPageAccessComponent } from '../ntech-application-components/ntech-app-setup/ntech-app-custompageaccess/ntech-app-custompageaccess.component';
import { NtechAppPageMasterComponent } from '../ntech-application-components/ntech-app-setup/ntech-app-page-maintanance/ntech-app-page-master.component';
import { NtechCoreComponentModule } from '../ntech-core-components/ntech-core-components/ntech-core.module';
import { NtechAppCoreValueComponent } from '../ntech-application-components/ntech-app-setup/ntech-app-corevalue/ntech-app-corevalue.component';
import { NtechSetupService } from '../ntech-services/ntech-setup.service';


@NgModule({

    imports: [
        FormsModule,
        HttpClientModule,
        CommonModule,
        NtechCoreComponentModule,
        NtechAppSetupRoutingModule
    ],
    declarations: [
                NtechAppSetupSampleComponent,
                NtechCustomPage1Component,
                NtechCustomPage2Component,
                NtechCustomPage3Component,
                NtechCustomPage4Component,
                NtechCustomPage5Component,
                NtechAppCustomPageAccessComponent,
                NtechAppCoreValueComponent,
                NtechAppPageMasterComponent
                
    ],
    exports:
        [
            NtechAppSetupSampleComponent,
            NtechCustomPage1Component,
            NtechCustomPage2Component,
            NtechCustomPage3Component,
            NtechCustomPage4Component,
            NtechCustomPage5Component,
            NtechAppCustomPageAccessComponent
        ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},NtechSetupService]


})
export class NtechAppSetupModule {

}