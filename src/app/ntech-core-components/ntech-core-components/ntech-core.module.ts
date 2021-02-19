import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NtechTextboxComponent } from './core-utility/ntech-text-box/ntech-textbox.component';
import { NtechTopnavbarComonent } from './core-base/ntech-topnav-bar/ntech-topnav-bar.conponent';
import { NtechSidenavbarComonent } from './core-base/ntech-sidenav-bar/ntech-sidenav-bar.component';
import { NtechCheckboxComponent } from './core-utility/ntech-check-box/ntech-check-box.component';
import { NtechWelcomeComonent } from './core-base/ntech-welcome/ntech-welcome.conponent';
import { NtechLoginComponent } from './core-base/ntech-login/ntech-login.component';
import { NtechRegistrationComponent} from './core-base/ntech-registration/ntech-registration.component';
import { NtechHomeComponent } from './core-base/ntech-home/ntech-home.conponent';
import { NtechMainContainerComponent } from './core-base/ntech-main-container/ntech-main-container.conponent';
import { NtechLazyRoutingModule } from '../../ntech-routers/ntech-lazy.routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NtechButtonComponent } from './core-utility/ntech-button/ntech-button.component';
import { NtechLoaderComponent } from './core-base/ntech-loader/ntech-loader.component';
import { AuthInterceptor } from '../../ntech-interceptors/ntech-auth-interceptor/AuthInterceptor';
import { NtechDialogboxComponent } from './core-base/ntech-alert-popup/ntech-alert-popup.component';
import { NtechPasswordBoxComponent } from './core-utility/ntech-password-box/ntech-passwordbox.component';
import { NtechErrorComponenet } from './core-base/ntech-error-pages/ntech-error.component';
import { NtechSelectboxComponent } from './core-utility/ntech-select-box/ntech-select-box.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NtechCalanderComponent } from './core-utility/ntech-calendar/ntech-calendar.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatInputModule } from '@angular/material';
import { NtechLableComponent } from './core-utility/ntech-lable/ntech-lable.component';
import { NtechTextareaComponent } from './core-utility/ntech-textarea/ntech-textarea.component';
import { NtechDataTableComponent } from './core-utility/ntech-data-table/ntech-data-table.component';
import { NtechDatatableService } from 'src/app/ntech-services/ntech-core-services/ntech-datatable.service';
import { NtechAppEditPopupComponent } from 'src/app/ntech-application-components/ntech-app-popup/ntech-app-edit/ntech-app-editpopup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NtechDialogboxService } from 'src/app/ntech-services/ntech-core-services/ntech-dialogbox.service';
import { NtechRadioboxComponent } from './core-utility/ntech-radio-button/ntech-radio-box.component';
import { SharedDataService } from 'src/app/ntech-services/ntech-core-services/shared-data.service';
import { NtechAdminService } from 'src/app/ntech-services/ntech-admin.service';
import { NtechSetupService } from 'src/app/ntech-services/ntech-setup.service';
import { NtechAlphabetsOnlyDirective } from 'src/app/ntech-directive/ntech-alphabetsonly.directive';
import { NtechNoSpecialChDirective } from 'src/app/ntech-directive/ntech-nospecialch.directive';
import { NtechNumbersOnlyDirective } from 'src/app/ntech-directive/ntech-numbersonly.directive';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NtechCountryCodeComponent} from './core-utility/ntech-country-code/ntech-country-code.component'
import {HttpClient} from '@angular/common/http';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
@NgModule({
    imports: 
    [
        FormsModule,
        HttpClientModule,
        CommonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatMomentDateModule,
        NtechLazyRoutingModule,
        NgbModule,
        HttpClientModule,
        InternationalPhoneNumberModule,
        Ng2TelInputModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
       
    ],
    declarations: 
    [
        NtechTextboxComponent,NtechCountryCodeComponent,NtechTopnavbarComonent,NtechSidenavbarComonent,NtechCheckboxComponent
        ,NtechWelcomeComonent,NtechLoginComponent,NtechHomeComponent,NtechMainContainerComponent,NtechButtonComponent,
        NtechLoaderComponent,NtechDialogboxComponent,NtechPasswordBoxComponent,NtechErrorComponenet,NtechSelectboxComponent,
        NtechCalanderComponent,NtechLableComponent,NtechTextareaComponent,NtechDataTableComponent,NtechAppEditPopupComponent,
        NtechRadioboxComponent,NtechAlphabetsOnlyDirective,NtechNoSpecialChDirective,NtechNumbersOnlyDirective,NtechRegistrationComponent
    ],
    exports :  
    [        
      NtechTextboxComponent,NtechTopnavbarComonent,NtechSidenavbarComonent,NtechCheckboxComponent
      ,NtechWelcomeComonent,NtechLoginComponent,NtechMainContainerComponent,NtechButtonComponent,
      NtechLoaderComponent,NtechDialogboxComponent,NtechPasswordBoxComponent,NtechErrorComponenet,NtechSelectboxComponent,
      NtechCalanderComponent,NtechLableComponent,NtechTextareaComponent,NtechDataTableComponent,NtechAppEditPopupComponent,
      NtechRadioboxComponent,NtechAlphabetsOnlyDirective,NtechNoSpecialChDirective,NtechNumbersOnlyDirective,NtechRegistrationComponent
    ],
    providers: [
        {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi :true},
        NtechAdminService,NtechSetupService,NtechDatatableService,NtechDialogboxService,SharedDataService],
        entryComponents : [NtechDialogboxComponent]

  })
  export class NtechCoreComponentModule 
  {
      
  }
  export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
} 