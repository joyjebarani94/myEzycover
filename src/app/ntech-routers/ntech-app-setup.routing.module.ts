import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NtechAppSetupSampleComponent } from '../ntech-application-components/ntech-app-setup/ntech-app-setup-sample/ntech-app-setup.component';
import { NtechCustomPage5Component } from '../ntech-core-components/ntech-custompage-components/ntech-custompage5/ntech-custompage5.component';
import { NtechCustomPage1Component } from '../ntech-core-components/ntech-custompage-components/ntech-custompage1/ntech-custompage1.component';
import { NtechCustomPage2Component } from '../ntech-core-components/ntech-custompage-components/ntech-custompage2/ntech-custompage2.component';
import { NtechCustomPage3Component } from '../ntech-core-components/ntech-custompage-components/ntech-custompage3/ntech-custompage3.component';
import { NtechCustomPage4Component } from '../ntech-core-components/ntech-custompage-components/ntech-custompage4/ntech-custompage4.component';
import { NtechAppCustomPageAccessComponent } from '../ntech-application-components/ntech-app-setup/ntech-app-custompageaccess/ntech-app-custompageaccess.component';
import { NtechAppPageMasterComponent } from '../ntech-application-components/ntech-app-setup/ntech-app-page-maintanance/ntech-app-page-master.component';
import { NtechAppCoreValueComponent } from '../ntech-application-components/ntech-app-setup/ntech-app-corevalue/ntech-app-corevalue.component';

const routes: Routes = 
  [
    {path: 'ntsetup', component: NtechAppSetupSampleComponent},
    {path: 'ntappcuspage'  , component : NtechAppCustomPageAccessComponent},
    {path: 'ntapppagemaster',component: NtechAppPageMasterComponent},
    {path: 'ntcuspage1', component: NtechCustomPage1Component},
    {path: 'ntcuspage2', component: NtechCustomPage2Component},
    {path: 'ntcuspage3', component: NtechCustomPage3Component},
    {path: 'ntcuspage4', component: NtechCustomPage4Component},
    {path: 'ntcuspage5', component: NtechCustomPage5Component},
    {path: 'ntcoreval', component: NtechAppCoreValueComponent},
    

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
 export class NtechAppSetupRoutingModule { }