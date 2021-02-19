/**
 * Author : Premkumar B
 * Module : Admin Module
 * Desc   : Create a Userprofile  
 **/

import { Component, OnInit } from '@angular/core';
import { NtUser } from 'src/app/ntech-models/nt_user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedDataService } from 'src/app/ntech-services/ntech-core-services/shared-data.service';
import { NtechAdminService } from 'src/app/ntech-services/ntech-admin.service';

@Component({
    selector: 'ntech-user',
    templateUrl: './ntech-user.component.html',
    styleUrls: []
})
export class NtechUserComponent implements OnInit {
    objntuser = new NtUser;
    ntuser: NtUser[];
    responseData: any
    filtertype: string;
    action: string;
    constructor(private adminservice: NtechAdminService, private modalService: NgbModal,
        private sharedata: SharedDataService) {

    }

    ngOnInit() {
        this.ntuser = [];
    }
    getUser() {
        this.adminservice.getUser({ "ntUserId": "ALL" }).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    this.ntuser = this.responseData.paramMap.ntuser;
                }
            }

        });
    }
    saveUser() {
        this.modalService.dismissAll();
        this.adminservice.saveUser(this.objntuser).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    alert('User Created Successfully.. Password Send to email address');
                }
            }

        });
    }

    getUniqueuserid() {
        this.adminservice.getNextuserid({ 'idtype': 'userid' }).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    this.objntuser.ntUserId = this.responseData.paramMap.userid;
                }
            }

        });
    }

    deleteUser(row: NtUser) {
        this.adminservice.deleteUser({ 'ntech_request': row }).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    alert('Record Deleted..')
                }
            }

        });
    }
    updateUser() {

        this.modalService.dismissAll();
        this.adminservice.saveUser(this.objntuser).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    alert('User Update Successfully..');
                }
            }

        });
    }

    openNewModel(content, row: NtUser, action: string) {

        this.action = action;
        if (action == 'N') {
            this.objntuser = new NtUser;
            this.getUniqueuserid()
        }
        if (action == 'U') {
            this.objntuser = row;
        }

        this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    }

}