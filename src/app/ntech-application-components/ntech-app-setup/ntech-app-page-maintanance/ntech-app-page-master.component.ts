import { Component, OnInit } from '@angular/core';
import { NtechPage } from 'src/app/ntech-models/ntech_pages';
import { NtechSetupService } from 'src/app/ntech-services/ntech-setup.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalConstants } from 'src/app/ntech-constants/GlobalConstants.constant';

@Component({
    selector: 'ntech-app-page-master',
    templateUrl: './ntech-app-page-master.component.html'
})
export class NtechAppPageMasterComponent implements OnInit {
    ntechpage: NtechPage[];
    ntechpage1: NtechPage[];
    ntechsubpage: NtechPage[];
    currentPage: NtechPage;
    responseData: any
    action: String;


    inputvalue: string;
    localData: any;
    constructor(private setupservice: NtechSetupService, private modalService: NgbModal) { }

    ngOnInit(): void {
        this.ntechsubpage = [];
        this.ntechpage1 = [];
        this.getAllpages();
    }


    getAllpages() {
        this.setupservice.getNtechpages({ 'page': 'ALL' }).subscribe(
            (data) => {

                this.localData = data;
                if (this.localData) {
                    if (this.localData.responseStatus == true)
                        this.ntechpage = this.localData.paramMap.ntech_pages;

                    this.ntechpage.forEach(args => {
                        if (args.ntPageType == 'P')
                            this.ntechpage1.push(args);
                    });
                }
            });
    }

    getSubpages() {
        this.setupservice.getNtechpages({ 'page': this.inputvalue }).subscribe(
            (data) => {

                this.localData = data;
                if (this.localData) {
                    if (this.localData.responseStatus == true)
                        this.ntechsubpage = this.localData.paramMap.ntech_pages;
                }
            });
    }

    openNewModel(content) {
        this.action = 'N';
        this.currentPage = new NtechPage;
        this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    }

    openEditModel(content, item: NtechPage, i: number) {
        this.action = 'U';
        this.currentPage = item;
        this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    }

    savePages() {
        this.currentPage.ntActive=GlobalConstants.ACTIVEFLAG
        this.setupservice.ntechSavepages(this.currentPage).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    alert('Page Created Successfully..');
                }
            }

        });
    }
    updatePages(){    
        this.modalService.dismissAll();  
         this.setupservice.ntechSavepages({'ntech_pages':this.ntechpage
         }).subscribe((data)=>{
             if(data){
                 this.responseData=data
                 if(this.responseData.responseStatus==true){
                     alert('Page Update Successfully..');
                 }
             }
     
         });
    }
    deleteRecord(item:NtechPage){
        this.currentPage = item;
       this.currentPage.ntActive=GlobalConstants.DELETEFLAG
        //this.ntechpage1.nt_active =GlobalConstants.DELETEFLAG;
        this.setupservice.ntechSavepages({'ntech_pages':this.currentPage
        }).subscribe((data)=>{
            if(data){
                this.responseData=data
                if(this.responseData.responseStatus==true){
                    alert('Delete Successfully..');
                }
            }
    
        });
      }
   
}

