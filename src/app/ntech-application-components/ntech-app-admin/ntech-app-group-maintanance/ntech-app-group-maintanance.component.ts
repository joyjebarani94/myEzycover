import { Component } from '@angular/core';
import { NtechGroup } from 'src/app/ntech-models/ntech_group';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NtechAdminService } from 'src/app/ntech-services/ntech-admin.service';
import { GlobalConstants } from 'src/app/ntech-constants/GlobalConstants.constant';

@Component({
    selector : 'ntech-app-organization',
    templateUrl : './ntech-app-group-maintanance.component.html'
})
export class NtechAppGroupMaintananceComponent
{
    filtertype : string
    ntechgroup = new NtechGroup;
    listntechgroup : NtechGroup[];
    responseData : any;
    currentPage:NtechGroup;
    action: String;

    constructor(private modalService: NgbModal,private adminservice: NtechAdminService, ){
        this.listntechgroup=[]
    }

    getGrouplist(){
        this.adminservice.getGroupdata({'type':'ALL'}).subscribe((data)=>{
            if(data){
                this.responseData=data
                if(this.responseData.responseStatus==true){
                    this.listntechgroup=this.responseData.paramMap.group;
                }
            }
    
        });
    }

    saveGroup()
    {
       this.modalService.dismissAll()
       this.ntechgroup.ntGrpStatus=GlobalConstants.ACTIVEFLAG;
        this.adminservice.saveGroup({'ntech_grp':this.ntechgroup}).subscribe((data)=>{
            if(data){
                this.responseData=data
                if(this.responseData.responseStatus==true){
                    alert('Group Created Successfully..');
                }
            }
    
        });
    }

    openNewModel(content) {
        this.action = 'N';
        this.ntechgroup = new NtechGroup;
        this.modalService.open(content);
      }

      openEditModel(content, item:NtechGroup, i: number) {
        this.action = 'U';
        this.currentPage = item;
        this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    }
    deleteRecord(item:NtechGroup){
        this.ntechgroup = item;
        this.ntechgroup.ntGrpStatus =GlobalConstants.DELETEFLAG;
        this.adminservice.saveGroup({'ntech_grp':this.ntechgroup
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