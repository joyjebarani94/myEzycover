import {Component, OnInit } from '@angular/core'

@Component({
    selector: 'ntech-app-admin-sample',
    templateUrl: './ntech-app-admin-sample.component.html',    
})

export class NtechAppAdminSampleComponent implements OnInit
{

    public dataVal: string;
    public check : boolean = false;
    dataVal1 = {};
    ngOnInit(){
        this.dataVal='S'
    }

    sample()
    {
        alert(this.check);
        
    }
}