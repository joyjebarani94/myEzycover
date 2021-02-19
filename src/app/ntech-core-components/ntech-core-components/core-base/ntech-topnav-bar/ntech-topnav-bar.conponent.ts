import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import * as NtechCommonDataAction from 'src/app/ntech-storage/ntech-commondata.action'
import { Store } from '@ngrx/store';
import { NtechCommonDataStat } from 'src/app/ntech-storage/ntech-commondata.state';

@Component({
    selector: 'ntech-topnav-bar',
    templateUrl: './ntech-topnav-bar.component.html',
    styleUrls: ['./ntech-topnav-bar.component.css']
})

export class NtechTopnavbarComonent implements OnInit {

    //Declarations
    varthemecolor: string;
    commonData = new Map<String, any>();

    constructor(private router: Router, private store: Store<NtechCommonDataStat>) {
    }
    ngOnInit(): void {

    }
    
    ntechsignout() {
        if (confirm('Are you Sure goingto signout.?')) {
            localStorage.clear();
            this.store.dispatch(new NtechCommonDataAction.RemoveNtechCommonData);
            this.router.navigate(['/ntechlogin']);
        }
        else {
            return;
        }
    }
}