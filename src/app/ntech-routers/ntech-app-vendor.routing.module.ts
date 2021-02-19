import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NtechAppVendorComponent } from '../ntech-application-components/ntech-app-vendor/ntech-app-vendor-sample/ntech-app-vendor.component';
import { NtechVendorComponent} from '../ntech-sample-component/ntech-vendor/ntech-vendor-component'
const routes: Routes = 
  [
    { path: 'ntvendor', component: NtechAppVendorComponent },
    { path: 'ntechvendor', component:NtechVendorComponent}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
 export class NtechAppVendorRoutingModule { }