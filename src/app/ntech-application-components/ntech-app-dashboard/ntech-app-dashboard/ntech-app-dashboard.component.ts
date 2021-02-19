import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({

    selector: 'ntech-app-dashboard',
    templateUrl: './ntech-app-dashboard.component.html',
    styleUrls : ['./ntech-app-dashboard.component.css']
})
export class NtechAppDashBoardComponent
{
    constructor(private router:Router){

    }

    callInbox(){
        this.router.navigate(['/ntechapp/ntechappcontract/ntinbox']);  
    }

    callGroupmailbox(){
        this.router.navigate(['/ntechapp/ntechappcontract/ntleadgrpmail']);
    }
}

