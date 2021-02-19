import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ntech_core_config_values } from 'src/app/ntech-models/ntech_core_config_values';
import { NtechDialogboxService } from 'src/app/ntech-services/ntech-core-services/ntech-dialogbox.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NtechAdminService } from 'src/app/ntech-services/ntech-admin.service';

@Component({

    selector: 'ntech-app-corevalue',
    templateUrl: './ntech-app-corevalue.component.html'
})
export class NtechAppCoreValueComponent implements OnInit
{
   coreconfig : ntech_core_config_values[];
   inputvalue : String;
   inputvalue2 : String;
   newinputvalue: string;
   localData : any;
   indexId :any;
   coreconfig1 = new Array();
   coreconfig3 = new Array();
   coreconfig4 = new Array();
   coreconfig2 : ntech_core_config_values[];
   currentRow : ntech_core_config_values;
   currentRow1 = new ntech_core_config_values();
   coreconfig5 = new Array();
   
   constructor(private adminservice: NtechAdminService,private dialogboxservice: NtechDialogboxService,
    config: NgbModalConfig, private modalService: NgbModal)
   {
    config.backdrop = 'static';
    config.keyboard = false;
   }
   ngOnInit(){
       this.coreconfig2=[];
        this.getCoreconfigvalue();
        this.inputvalue="S";
    }
    
    public openConfirmationDialog() {
        this.dialogboxservice.confirm('Please confirm..', 'Do you really want to ... ?')
        .then((confirmed) => console.log('User confirmed:', confirmed))
        .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
      }

    getCoreconfigvalue()
    {
        this.coreconfig=[];
        this.coreconfig1=[];
        this.coreconfig2=[];
        this.coreconfig3=[];
        this.coreconfig4=[];
        this.coreconfig5=[];
        
       this.adminservice.getConfigOptions({'ntech_key':'ALL'}).subscribe(data=>{
            this.localData=data;
            if(this.localData)
            {
                if(this.localData.responseStatus==true)
                    this.coreconfig=this.localData.paramMap.configvalues;

                    this.coreconfig.forEach(args=>{
                        this.coreconfig1.push(args.ntCdvKeyId);
                    });

                    this.coreconfig1=Array.from(new Set<any>(this.coreconfig1).values());
                    
                    this.coreconfig1.forEach((args)=>{
                        
                        for (let i in this.coreconfig){
                            if(args == this.coreconfig[i].ntCdvKeyId)
                               {
                                    this.coreconfig5.push([args, this.coreconfig[i].ntCdvKeyName]);
                                    break;
                               }
                            }
                    });

                    this.coreconfig1=this.coreconfig5;
                    this.getValuebyId();
            }

       });
      
    }

    getValuebyId()
    {
        this.coreconfig2=[];
        this.coreconfig.forEach(args=>{
            if(args.ntCdvKeyId===this.inputvalue)
                    this.coreconfig2.push(args)
        })
        console.log(this.coreconfig2);
    }

    openEditModel(content,row : ntech_core_config_values, i :any) {
        this.currentRow=row;
        this.indexId=i;
        this.modalService.open(content);
      }

      openNewModel(content1) {
        this.currentRow1=new ntech_core_config_values;
        this.modalService.open(content1);
      }

        saveConfigValue(row : any){
            this.modalService.dismissAll()
            this.adminservice.saveConfigValues(row).subscribe((data)=>{
            this.localData=data;
            if(this.localData)
            {
                if(this.localData.responseStatus==true)
                    this.currentRow=this.localData.paramMap.configvalues; 
                this.getCoreconfigvalue();
               
            }
        });
    }
    deleteRecord(item : ntech_core_config_values){
        item.ntCdvActive='3';
        this.adminservice.saveConfigValues(item).subscribe((data)=>{
            this.localData=data;
            if(this.localData)
            {
                if(this.localData.responseStatus==true)
                    this.currentRow=this.localData.paramMap.configvalues;
                
                    this.getCoreconfigvalue();
                    
            }
        });
    }

    checkconfigId(){
        this.currentRow1= new ntech_core_config_values;
        if(this.newinputvalue=='N'){

            this.coreconfig3=this.coreconfig1
            this.coreconfig3.forEach((args)=>{
                this.coreconfig4.push(args[0].substring(1,args[0].length))
            })
            this.currentRow1.ntCdvKeyId=Math.max.apply(Math,this.coreconfig4.map(function(args){return args}));
            
            if((this.currentRow1.ntCdvKeyId+1).toString().length==1)
                this.currentRow1.ntCdvKeyId='N000'.concat((this.currentRow1.ntCdvKeyId+1));
            if((this.currentRow1.ntCdvKeyId+1).toString().length==2)
                this.currentRow1.ntCdvKeyId='N00'.concat((this.currentRow1.ntCdvKeyId+1));
            if((this.currentRow1.ntCdvKeyId+1).toString().length==3)
                this.currentRow1.ntCdvKeyId='N0'.concat((this.currentRow1.ntCdvKeyId+1));
        }
        else{
            this.currentRow1.ntCdvKeyId=this.newinputvalue;
            for(let i in this.coreconfig1){
                if(this.coreconfig1[i][0]==this.newinputvalue)
                    this.currentRow1.ntCdvKeyName=this.coreconfig1[i][1];
            }
            
        }
    }
}

