import { NgModule } from '@angular/core';
import { NtechAppAdminSampleComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-admin-sample/ntech-app-admin-sample.conponent';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NtechAppAdminRoutingModule } from '../ntech-routers/ntech-app-admin.routing.module';
import { NtechCoreComponentModule } from '../ntech-core-components/ntech-core-components/ntech-core.module';
import { NtechAppCreateOrganizationComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-institute/ntech-create-organization.component';
import { NtechViewOrganizationComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-institute/ntech-view-organization.component';
import { NtechUserComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-user/ntech-user.component';
import { NtechAppGroupMaintananceComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-group-maintanance/ntech-app-group-maintanance.component';
import { NtechAppVideoDashboardComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-video-dashboard/ntech-app-video-dashboard.component';
import { NtechAppVideoUploadComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-video-upload/ntech-app-video-upload.component';
import { NtechAppOrganizationMaintananceComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-organization-maintanance/ntech-app-organization-maintanance.component';
import { NtechAppProductMaintananceComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-product-maintanance/ntech-app-product-maintanance.component';
import { NtechAppWorkflowMaintananceComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-workflow-maintanance/ntech-app-workflow-maintanance.component';
import { NtechAdminService } from '../ntech-services/ntech-admin.service';
import { NtechAppOrganizationMappingComponent } from '../ntech-application-components/ntech-app-admin/ntech-app-organization-mapping/ntech-app-organization-mapping.component';
import {NtechAdminComponent} from '../ntech-sample-component/ntech-admin/ntech-admin-component';

@NgModule({

    imports:
    [
        FormsModule,
        HttpClientModule,
        CommonModule,
        NtechCoreComponentModule,
        NtechAppAdminRoutingModule
    ],
    declarations : 
    [
        NtechAppAdminSampleComponent,
        NtechAppCreateOrganizationComponent,
        NtechViewOrganizationComponent,
        NtechUserComponent,
        NtechAppGroupMaintananceComponent,
        NtechAppVideoDashboardComponent,
        NtechAppVideoUploadComponent,
        NtechAppOrganizationMaintananceComponent,
        NtechAppProductMaintananceComponent,
        NtechAppWorkflowMaintananceComponent,
        NtechAppOrganizationMappingComponent,
        NtechAdminComponent
    ],
    exports :  
    [    
           
    ],
    providers : [
        { provide: LocationStrategy, useClass: HashLocationStrategy },NtechAdminService]


})
export class NtechAppAdminModule
{

}