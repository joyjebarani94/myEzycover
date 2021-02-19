import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({

    selector: 'ntech-user',
    templateUrl: './ntech-user-component.html',
    styleUrls: ['./ntech-user-component.css']

})
export class NtechUserComponent {
    constructor(private router: Router) { }
    ntechSignin= function () {
        this.router.navigateByUrl('/ntechuser1');
    }

}
