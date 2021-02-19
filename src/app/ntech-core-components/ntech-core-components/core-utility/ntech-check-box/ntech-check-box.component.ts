import { Component, forwardRef, OnInit, Input } from '@angular/core';
import {  NG_VALUE_ACCESSOR } from '@angular/forms';
import { NtechCoreTagClass } from '../../../ntech-core-interface/ntech-core-tag';


declare var $:any;
@Component({

    selector: 'ntech-checkbox',
    templateUrl: './ntech-check-box.component.html',

    providers: [
        { 
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => NtechCheckboxComponent),
        }
     ]
})

export class NtechCheckboxComponent extends NtechCoreTagClass implements OnInit
{

    // /* DECCRATOR FUNCTION */
    // @Input("ntechkey") ntech_key : string; 

    // /* PROPERTY DECLARATION */
    // localData :any;

    // /* MODEL DECLARATION */
    // private confValue: nth_core_config_values[][];

    // constructor(private var_CoreConfigService:CoreConfigService)
    // {super();}
    
    ngOnInit()
    {
    //    this.getCoreconfigvalue();
    }
    
    // getCoreconfigvalue()
    // {
    //    this.var_CoreConfigService.getOptions_Databyid({'ntech_key':this.ntech_key}).subscribe(data=>{
    //         this.localData=data;
    //         if(this.localData)
    //         {
    //             this.confValue=this.localData._nt_response;
    //         }

    //         console.log(this.confValue);
    //    });
      
    // }

}