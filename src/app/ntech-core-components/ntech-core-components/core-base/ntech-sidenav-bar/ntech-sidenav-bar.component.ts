import { Component, OnInit } from '@angular/core'
import * as $ from 'jquery';
import { NtechPage } from '../../../../ntech-models/ntech_pages';
import { NtechSetupService } from 'src/app/ntech-services/ntech-setup.service';
import { Router } from '@angular/router';
import { NtechPagerefresh } from 'src/app/ntech-services/ntech-core-services/ntech-pagerefresh';
import { NtechCommonDataModel } from 'src/app/ntech-storage/ntech-commondata.model';
import { select, Store } from '@ngrx/store';
import { NtechCommonDataStat } from 'src/app/ntech-storage/ntech-commondata.state';

@Component({
    selector: 'ntech-sidenav-bar',
    templateUrl: './ntech-sidenav-bar.component.html',
    styleUrls: ['./ntech-sidenav-bar.component.css']
})

export class NtechSidenavbarComonent implements OnInit {
    respData: any;
    varthemecolor: String;
    var_ntech_pages: NtechPage[];
    var_ntech_pages_p: NtechPage[];
    var_ntech_pages_t: NtechPage[];

    main_arry: any[];
    valuMap = new Map();
    ntechcommonmode: NtechCommonDataModel;

    constructor(private store: Store<NtechCommonDataStat>, private setupservice: NtechSetupService, private router: Router, private ntechpagerefresh: NtechPagerefresh) {
        this.ntechpagerefresh.getRefreshstatus().subscribe(() => {
        })
        this.initiatePages();
    }

    ngOnInit(): void {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
        this.initiatePages()
    }

    initiatePages() {

        this.store.pipe(select('ntechcommondata')).subscribe((args) => {
            this.ntechcommonmode = args;
            // if (!this.ntechcommonmode)
            //     this.router.navigate(['/ntecherror']);

            // if (this.ntechcommonmode)
            //     if (!this.ntechcommonmode.ntUserId || this.ntechcommonmode.ntUserId == '')
            //         this.router.navigate(['/ntecherror']);
            this.getPages();

        });
    }
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }


    // BUSINESS LOGIC

    getPages() {
        this.setupservice.getNtechpages({ 'page': 'ALL' }).subscribe(data => {
            this.respData = data;
            if (this.respData.responseStatus == true) {
                this.var_ntech_pages = this.respData.paramMap.ntech_pages;
                console.log(this.var_ntech_pages);
                this.getPagesort();
            }
        });

    }

    async getPagesort() {
        this.var_ntech_pages.sort((a, b) => (a.ntSno > b.ntSno) ? 1 : -1)
        this.var_ntech_pages_p = [];
        this.var_ntech_pages.forEach(obj => {
            if (this.ntechcommonmode)
                if (this.ntechcommonmode.userNative == '1') {
                    if (obj.ntPageType === 'P') {
                        this.var_ntech_pages_p.push(obj);
                        this.var_ntech_pages_t = [];
                        this.var_ntech_pages.forEach(obj1 => {
                            if (obj1.ntParrentPage == obj.ntSno) {
                                this.var_ntech_pages_t.push(obj1);
                            }
                        })
                        this.valuMap.set(obj.ntSno, this.var_ntech_pages_t.sort((a, b) => (a.ntSubSno > b.ntSubSno) ? 1 : -1))
                    }
                }
                else {
                    if (!this.ntechcommonmode.workFlowid) {
                        if (obj.ntSno == '17') {
                            this.var_ntech_pages_p.push(obj);
                            this.var_ntech_pages_t = [];
                            this.var_ntech_pages.forEach(obj1 => {
                                if (obj1.ntParrentPage == obj.ntSno && obj1.ntSno == '18') {
                                    this.var_ntech_pages_t.push(obj1);
                                }
                            })
                            this.valuMap.set(obj.ntSno, this.var_ntech_pages_t.sort((a, b) => (a.ntSubSno > b.ntSubSno) ? 1 : -1))
                        }
                    }
                }
        });
    }
    sum(i: any) {
        var var_class = "#menu-hasdropdown" + i
        if ($(var_class).hasClass("display-submenu")) {
            $(var_class).removeClass("display-submenu");
        }
        else {
            $(var_class).removeClass("display-submenu");
            $(var_class).toggleClass("display-submenu");
        }
    }
}
