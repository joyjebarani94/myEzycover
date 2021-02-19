import { Component } from '@angular/core';
import { NtechOrganizationMaintanance } from 'src/app/ntech-models/ntech_organization_maintanance';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NtechAddressData } from 'src/app/ntech-models/ntech_address_data';
import { NtechOrganizationModel } from 'src/app/ntech-models/ntech_organization.model';
import { NtechAdminService } from 'src/app/ntech-services/ntech-admin.service';
import { GlobalConstants } from 'src/app/ntech-constants/GlobalConstants.constant';

@Component({
    selector : 'ntech-app-orgmain',
    templateUrl : './ntech-app-organization-maintanance.component.html'
})
export class NtechAppOrganizationMaintananceComponent
{
   ntechorg = new NtechOrganizationMaintanance;
   ntaddress = new NtechAddressData;
   filtertype : string;
   responseData: any;
  // btnName:String;
   currentPage:NtechOrganizationMaintanance;
   action : string;


   ntechorganizationmodel : NtechOrganizationModel[];
   
    constructor( private modalService: NgbModal,private adminservice : NtechAdminService){
        this.ntechorganizationmodel=[]
    }

    getOrglist(){
        this.adminservice.getOrganizationdata({'type':'ALL'}).subscribe((data)=>{
            if(data){
                this.responseData=data
                if(this.responseData.responseStatus==true){
                    this.ntechorganizationmodel=this.responseData.paramMap.organization;
                }
            }
    
        });
    }

    saveOraganization()
    {
       this.modalService.dismissAll()
       
       // DEFAULT FLAGS
       this.ntaddress.ntAddType='P';
        this.ntaddress.ntAddStatus=GlobalConstants.ACTIVEFLAG;
        this.ntechorg.ntOrgStatus=GlobalConstants.ACTIVEFLAG;

        this.adminservice.saveOrganization({'ntech_org':this.ntechorg,'ntech_address':this.ntaddress
        }).subscribe((data)=>{
            if(data){
                this.responseData=data
                if(this.responseData.responseStatus==true){
                    alert('Organization Created Successfully..');
                }
            }
    
        });
    }

    ///update
    updateOraganization()
    {
       this.modalService.dismissAll()
       
       // DEFAULT FLAGS
       this.ntaddress.ntAddType='P';
       // this.ntaddress.ntAddStatus=GlobalConstants.ACTIVEFLAG;
      //  this.ntechorg.ntOrgStatus=GlobalConstants.ACTIVEFLAG;

        this.adminservice.saveOrganization({'ntech_org':this.ntechorg,'ntech_address':this.ntaddress
        }).subscribe((data)=>{
            if(data){
                this.responseData=data
                if(this.responseData.responseStatus==true){
                    alert('Organization Update Successfully..');
                }
            }
    
        });
    }


   

    openNewModel(content) {
        this.action = 'N';
        this.ntechorg = new NtechOrganizationMaintanance;
        this.modalService.open(content,);
      }
      openEditModel(content,item:NtechOrganizationModel,i:number){
        this.action = 'U';
        this.ntechorg = item.ntechorganizationmaintanace;
        if(item.ntechaddressdata==null)
            this.ntaddress=new NtechAddressData;
        this.modalService.open(content, { size: 'lg', backdrop: 'static' });
      } 
      deleteRecord(item:NtechOrganizationModel){
        this.ntechorg = item.ntechorganizationmaintanace;
        this.ntechorg.ntOrgStatus=GlobalConstants.DELETEFLAG;
        this.adminservice.saveOrganization({'ntech_org':this.ntechorg,'ntech_address':this.ntaddress
        }).subscribe((data)=>{
            if(data){
                console.log(data);
                this.responseData=data
                if(this.responseData.responseStatus==true){
                    alert('Delete Successfully..');
                }
            }
    
        });
      }
      
      
} 