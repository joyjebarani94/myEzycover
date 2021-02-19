import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NtechAppAdminSampleComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-admin-sample/ntech-app-admin-sample.conponent';
import { NtechViewOrganizationComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-institute/ntech-view-organization.component';
import { NtechUserComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-user/ntech-user.component';
import { NtechAppVideoDashboardComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-video-dashboard/ntech-app-video-dashboard.component';
import { NtechAppVideoUploadComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-video-upload/ntech-app-video-upload.component';
import { NtechAppOrganizationMaintananceComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-organization-maintanance/ntech-app-organization-maintanance.component';
import { NtechAppGroupMaintananceComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-group-maintanance/ntech-app-group-maintanance.component';
import { NtechAppProductMaintananceComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-product-maintanance/ntech-app-product-maintanance.component';
import { NtechAppWorkflowMaintananceComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-workflow-maintanance/ntech-app-workflow-maintanance.component';
import { NtechAppOrganizationMappingComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-organization-mapping/ntech-app-organization-mapping.component';
import { NtechAdminComponent} from '../ntech-sample-component/ntech-admin/ntech-admin-component'
import { from } from 'rxjs';

const routes: Routes = 
  [
    { path: 'ntadmin', component: NtechAppAdminSampleComponent },
    { path: 'ntchadmin', component: NtechAdminComponent},
    { path: 'ntech-view-organization' ,component:NtechViewOrganizationComponent},
    { path: 'ntech-user' ,component:NtechUserComponent},
    { path: 'ntech-viddash', component:NtechAppVideoDashboardComponent },
    { path: 'ntech-vidupload', component:NtechAppVideoUploadComponent},
    { path: 'ntech-orgmain', component:NtechAppOrganizationMaintananceComponent},
    { path: 'ntech-grpmain', component:NtechAppGroupMaintananceComponent},
    { path: 'ntech-prdmain', component:NtechAppProductMaintananceComponent},
    { path: 'ntech-workflow', component:NtechAppWorkflowMaintananceComponent},
    { path: 'ntech-orgmap', component:NtechAppOrganizationMappingComponent}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
 export class NtechAppAdminRoutingModule { }