import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { NtechCommonDataStat } from 'src/app/ntech-storage/ntech-commondata.state';
import { NtechCommonDataModel } from 'src/app/ntech-storage/ntech-commondata.model';
import * as NtechCommonDataAction from 'src/app/ntech-storage/ntech-commondata.action'

@Component({
    selector: 'ntech-main-container',
    templateUrl: './ntech-main-container.component.html',
    styleUrls: ['./ntech-main-container.component.css']

})

export class NtechMainContainerComponent {
    ntechcommonmode: NtechCommonDataModel;
    constructor(private router: Router, private store: Store<NtechCommonDataStat>) {

    }

    getHome() {
        this.generateSharedData();
        this.router.navigate(['/ntechapp/ntechappdash/ntechdashboard']);
    }
    addCommonStat(ntechcommonmodel: NtechCommonDataModel) {
        this.ntechcommonmode.leadno = null;
        this.store.dispatch(new NtechCommonDataAction.AddNtechCommonData(ntechcommonmodel))
    }
    generateSharedData() {
        this.store.pipe(select('ntechcommondata')).subscribe((args) => {
            this.ntechcommonmode = args;
            // if (!this.ntechcommonmode.ntUserId || this.ntechcommonmode.ntUserId == '')
            //     this.router.navigate(['/ntecherror']);
            this.addCommonStat(this.ntechcommonmode);
        }
        );
    }
}