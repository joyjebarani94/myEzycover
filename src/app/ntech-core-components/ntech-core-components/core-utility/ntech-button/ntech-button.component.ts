import { Component, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NtechCoreTagClass } from '../../../ntech-core-interface/ntech-core-tag';

@Component(
    {
        selector : 'ntech-button',
        templateUrl : './ntech-button.component.html',
        providers: [
            { 
              provide: NG_VALUE_ACCESSOR,
              multi: true,
              useExisting: forwardRef(() => NtechButtonComponent),
            }
         ]
    }
)
export class NtechButtonComponent extends  NtechCoreTagClass
{
   
}