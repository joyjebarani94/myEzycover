import {Component } from '@angular/core'
import {TranslateService} from '@ngx-translate/core';



@Component({
    selector: 'ntech-welcome',
    templateUrl: './ntech-welcome.component.html',
    
})

export class NtechWelcomeComonent
{
   
   
    goLogin()
    {
        var winFeature ='location=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes';
        window.open('http://localhost:4200/ntechlogin','null',winFeature);
    }
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    }
    useLanguage(language: string) {
        this.translate.use(language);
    }
}