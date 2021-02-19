import { NtechCoreTagClass } from '../../../ntech-core-interface/ntech-core-tag';
import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({

    selector: 'ntech-calendar',
    templateUrl: './ntech-calendar.component.html',

    providers: [
        { 
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => NtechCalanderComponent),
        }
     ]
})
export class NtechCalanderComponent extends NtechCoreTagClass implements OnInit
{
    minDate: Date;
    maxDate: Date;

    constructor() {
        super();
        const currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 20, 0, 1);
        this.maxDate = new Date(currentYear + 1, 11, 31);
    }

    ngOnInit()
    {

    }
}