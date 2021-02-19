import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NtUser } from 'src/app/ntech-models/nt_user.model';
import { SharedDataService } from 'src/app/ntech-services/ntech-core-services/shared-data.service';
import { NtechSharedModel } from 'src/app/ntech-models/ntech-shared.model';
import { NtechAuthService } from 'src/app/ntech-services/ntech-auth.service';
import * as NtechCommonDataAction from 'src/app/ntech-storage/ntech-commondata.action'
import { Store } from '@ngrx/store';
import { NtechCommonDataStat } from 'src/app/ntech-storage/ntech-commondata.state';
import { NtechCommonDataModel } from 'src/app/ntech-storage/ntech-commondata.model';

import { from } from 'rxjs';
@Component({

    selector: 'ntech-login',
    templateUrl: './ntech-login.component.html',
    styleUrls: ['./ntech-login.component.css']
})
export class NtechLoginComponent implements OnInit {
    [x: string]: any;
   


    constructor(private store: Store<NtechCommonDataStat>, private authservice: NtechAuthService, private router: Router, private sharedata: SharedDataService) {
    }

    /* Declarations */
    mod_ntech_users = new NtUser();
    
    respData: any;
    
    sharemodel = new NtechSharedModel;
    themeColor: any;
    ntechcommonmodel=new NtechCommonDataModel

    ngOnInit() {
        
        console.log(this.mod_ntech_users);

    }

    userLogin() {
    }

    addCommonStat(ntechcommonmodel: NtechCommonDataModel) {
        this.store.dispatch(new NtechCommonDataAction.AddNtechCommonData(ntechcommonmodel))
    }

    ntechSignin() {
        this.authservice.signin(this.mod_ntech_users).subscribe(data => {
            console.log(this.mod_ntech_users);
            if (data) {
                this.respData = data;
                if (this.respData.responseStatus == true) {
                    if (this.respData.loginStatus == true) {

                        this.ntechcommonmodel.userGroup = this.respData.ntuser.ntUserGroup;
                        this.ntechcommonmodel.userNative = this.respData.ntuser.ntUserNative;
                        this.ntechcommonmodel.ntUserId = this.respData.ntuser.ntUserId;
                        this.sharedata.setData(this.sharemodel)
                        this.addCommonStat(this.ntechcommonmodel);
                        this.appService.setUserLoggedIn(true)

                        this.router.navigate(['/ntechapp/ntechappdash/ntechdashboard']);
                    }
                    else {
                        alert('Invalid Username and Password');
                    }
                }
                else {
                    alert('Invalid Username and Password');
                }
            }
        })
    }

    ntechSignup() {

    }


}

