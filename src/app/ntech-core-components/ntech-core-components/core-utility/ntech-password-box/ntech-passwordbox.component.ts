import { Component, forwardRef, OnInit } from '@angular/core';
import {  NG_VALUE_ACCESSOR } from '@angular/forms';
import { NtechCoreTagClass } from '../../../ntech-core-interface/ntech-core-tag';

declare var $:any;

@Component({

    selector: 'ntech-passwordbox',
    templateUrl: './ntech-passwordbox.component.html',

    providers: [
        { 
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => NtechPasswordBoxComponent),
        }
     ]
})


export class NtechPasswordBoxComponent extends NtechCoreTagClass implements OnInit
{
  ngOnInit()
  {
    if(super.placeholder)
          super.placeholder="";
  }
}
