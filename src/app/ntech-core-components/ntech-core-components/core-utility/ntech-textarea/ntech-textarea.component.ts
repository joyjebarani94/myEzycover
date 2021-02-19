import { Component, forwardRef, OnInit } from '@angular/core';
import {  NG_VALUE_ACCESSOR } from '@angular/forms';
import { NtechCoreTagClass } from '../../../ntech-core-interface/ntech-core-tag';

declare var $:any;

@Component({

    selector: 'ntech-textarea',
    templateUrl: './ntech-textarea.component.html',

    providers: [
        { 
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => NtechTextareaComponent),
        }
     ]
})


export class NtechTextareaComponent extends NtechCoreTagClass implements OnInit
{
  ngOnInit()
  {
    if(super.placeholder)
        super.placeholder="";

  }
}
