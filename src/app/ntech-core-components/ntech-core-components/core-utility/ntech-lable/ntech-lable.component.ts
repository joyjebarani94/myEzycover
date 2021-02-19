import { Component, forwardRef, OnInit, Input } from '@angular/core';
import {  NG_VALUE_ACCESSOR } from '@angular/forms';
import { NtechCoreTagClass } from '../../../ntech-core-interface/ntech-core-tag';

declare var $:any;

@Component({

    selector: 'ntech-lable',
    templateUrl: './ntech-lable.component.html',

    providers: [
        { 
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => NtechLableComponent),
        }
     ]
})


export class NtechLableComponent extends NtechCoreTagClass implements OnInit
{
  @Input("align") align : string; 
  @Input("color") color : string; 

  ngOnInit()
  {
      if(!this.color)
          this.color="black";

          if(!this.align)
              this.align="left";
  }
}
