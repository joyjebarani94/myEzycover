import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NtechAdminService } from 'src/app/ntech-services/ntech-admin.service';
import { NtechOrganizationModel } from 'src/app/ntech-models/ntech_organization.model';
import { LoaderService } from 'src/app/ntech-services/ntech-core-services/loder.service';
import { NtechOrganizationMaintanance } from 'src/app/ntech-models/ntech_organization_maintanance';

@Component({
    selector: 'ntech-app-orgmapping',
    templateUrl: './ntech-app-organization-mapping.component.html'
})
export class NtechAppOrganizationMappingComponent implements OnInit {
    filtertype: any;
    ntNomOrgCode: string;
    curntParntCode : any;
    cpCode1: any
    crntLev: string;
    responseData: any;
    unmapCount: number;
    btnStatus: boolean;
    ntechorglist: NtechOrganizationMaintanance[]
    ntechorglistsub: NtechOrganizationMaintanance[]

    listUnmap: NtechOrganizationMaintanance[]
    listview2: NtechOrganizationMaintanance[]
    ntorgmain : NtechOrganizationModel[]


    constructor(public loaderService: LoaderService,private modalService: NgbModal, private adminservice: NtechAdminService,) {
        this.ntechorglist = []
        this.ntechorglistsub = []
        this.listUnmap = []
        this.listview2 = []
        this.filtertype = '1';
        this.btnStatus = true;

    }

    ngOnInit() {
        this.getOrglist();
    }

    getOrgbytype() {
        if(this.filtertype=='S' || this.filtertype==null)
            return;

        this.listview2 = []
        this.adminservice.getOrgmapping({ 'org_level': this.filtertype }).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    this.ntechorglist = this.responseData.paramMap.org_parrent;
                    this.ntechorglistsub = this.responseData.paramMap.org_sub;
                }
                this.getUnMappedOrg()
            }
        });
    }

    allocateData(orgsno: string) {
        this.listview2 = []
        this.ntechorglistsub.forEach((args) => {
            if ((args.ntOrgParentSno) == orgsno)
                this.listview2.push(args)
        });
        if (this.unmapCount > 0)
            this.btnStatus = false;
        else
            this.btnStatus = true;
    }

    getUnMappedOrg() {
        this.adminservice.getUnmaporg({ 'org_level': this.filtertype }).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    this.listUnmap = this.responseData.paramMap.unmap_org
                    if(this.listUnmap)
                        this.unmapCount = this.listUnmap.length;
                        else{
                            this.listUnmap=[]
                            this.unmapCount=0;
                        }
                }
            }
        });
    }

    openNewModel(content) {
        this.modalService.open(content);
    }

    getOrglist() {
        this.adminservice.getOrganizationdata({ 'type': 'ALL' }).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    this.ntorgmain = this.responseData.paramMap.organization;
                }
            }
            this.getOrgbytype();
        });   
    }

    updateOraganization(item : NtechOrganizationMaintanance)
    {
       this.modalService.dismissAll()
       item.ntOrgMapFlag='Y';
       item.ntOrgParentSno=''+this.curntParntCode;
        this.adminservice.saveOrganization({'ntech_org':item,'ntech_address':null}).subscribe((data)=>{
            if(data){
                this.responseData=data
                if(this.responseData.responseStatus==true){
                    alert('Organization Mapped Successfully..');
                    this.getOrglist();
                }
            }
        });
    }

        

}