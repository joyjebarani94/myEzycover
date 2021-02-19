import { Component, forwardRef, OnInit, Input } from '@angular/core';
import {  NG_VALUE_ACCESSOR } from '@angular/forms';
import { NtechCoreTagClass } from '../../../ntech-core-interface/ntech-core-tag';
import { NtechDatatableService } from 'src/app/ntech-services/ntech-core-services/ntech-datatable.service';
import { NtechDataModel } from 'src/app/ntech-models/ntech_datatable.model';


declare var $:any;
@Component({

    selector: 'ntech-datatable',
    templateUrl: './ntech-data-table.component.html',

    providers: [
        { 
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => NtechDataTableComponent),
        }
     ]
})

export class NtechDataTableComponent extends NtechCoreTagClass implements OnInit
{

    datatable : NtechDataModel[];
    localdata : any;


    constructor(private ntechdatatabservice:NtechDatatableService)
    {super();}
    
    ngOnInit()
    {
       
    }
    
    getTabledata()
    {
      this.ntechdatatabservice.getTabledata("",{}).subscribe(data=>{

      })
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