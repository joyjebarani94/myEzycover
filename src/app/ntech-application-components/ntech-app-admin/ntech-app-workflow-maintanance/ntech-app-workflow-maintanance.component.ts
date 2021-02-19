import { Component, OnInit } from '@angular/core';
import { NtechGroup } from 'src/app/ntech-models/ntech_group';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NtechProduct } from 'src/app/ntech-models/ntech_products';
import { NtechWorkflowModel } from 'src/app/ntech-models/ntech_workflow.model';
import { NtechWorkflow } from 'src/app/ntech-models/ntech_worflow';
import { NtechWorkflowPagelist } from 'src/app/ntech-models/ntech_workflow_pagelist';
import { NtechPage } from 'src/app/ntech-models/ntech_pages';
import { NtechAdminService } from 'src/app/ntech-services/ntech-admin.service';
import { NtechSetupService } from 'src/app/ntech-services/ntech-setup.service';

@Component({
    selector: 'ntech-app-workflow',
    templateUrl: './ntech-app-workflow-maintanance.component.html'
})
export class NtechAppWorkflowMaintananceComponent implements OnInit {
    filtervalue: string
    filtervalue1: string
    lstntechproduct: NtechProduct[];
    lstmainntechproduct: NtechProduct[];
    lstsubntechproduct: NtechProduct[];
    responseData: any;
    ntechworkflow = new NtechWorkflow;
    ntechworkflowpagelist = new NtechWorkflowPagelist;
    workflowmodel: NtechWorkflowModel[];
    listntechgroup: NtechGroup[];
    lstPages: NtechPage[];
    parntechpages: NtechPage[]
    chdntechpages: NtechPage[]
    checkedList = new Array();


    constructor(private modalService: NgbModal, private setupservice : NtechSetupService,
        private adminservice: NtechAdminService) {
        this.lstmainntechproduct = []
        this.lstsubntechproduct = []
    }
    ngOnInit(): void {
        this.filtervalue = 'S'
        this.filtervalue1 = 'S'
        this.getProductlist();
        this.workflowmodel=[];
    }

    getProductlist() {
        this.adminservice.getProductdata({ 'type': 'ALL' }).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    this.lstntechproduct = this.responseData.paramMap.product;

                    this.lstntechproduct.forEach((args) => {
                        if (args.ntPrdType == '1')
                            this.lstmainntechproduct.push(args)
                    })
                }
            }
            this.getGrouplist();
        });
    }
    getPages() {
        this.setupservice.getNtechpages({ 'page': 'ALL' }).subscribe(data => {
            this.responseData = data;
            if (this.responseData.responseStatus == true) {
                this.lstPages = this.responseData.paramMap.ntech_pages;
                this.parntechpages = [];
                this.chdntechpages = [];

                this.lstPages.forEach((args) => {
                    if (args.ntPageType == 'P')
                        this.parntechpages.push(args)
                    if (args.ntPageType == 'C')
                        this.chdntechpages.push(args)
                })

            }

        });

    }
    getValueprd() {
        this.lstsubntechproduct = [];
       
        this.lstntechproduct.forEach((args) => {
            if (args.ntPrdLink == this.filtervalue)
                this.lstsubntechproduct.push(args)
        })
    }

    getValuebysubprd() {
        if(this.filtervalue!='S')
        this.adminservice.getWorkflowdata({ 'prdid' : this.filtervalue1 }).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                        this.workflowmodel=this.responseData.paramMap.workflow;
                }
            }

        });
    }


    getGrouplist() {
        this.adminservice.getGroupdata({ 'type': 'ALL' }).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    this.listntechgroup = this.responseData.paramMap.group;
                }
            }

        });
    }

    openNewModel(content) {
        this.modalService.open(content);
    }
    openPageModel(content1) {
        this.checkedList=[];
        this.getPages();
        this.modalService.open(content1);
    }

    onCheckboxChange(option, event) {
        if (event.target.checked) {
            this.checkedList.push(option.ntSno);
        } else {
            for (var i = 0; i < this.chdntechpages.length; i++) {
                if (this.checkedList[i] == option.ntSno) {
                    this.checkedList.splice(i, 1);
                }
            }
        }
    }

    saveWorkflow() {
        this.ntechworkflow.ntPrdId=this.filtervalue1;
        this.adminservice.saveWorkflow({ 'ntech_wkf': this.ntechworkflow, 'pageid' : this.checkedList }).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    alert('Workflow Created Successfully');
                }
            }

        });
    }
}