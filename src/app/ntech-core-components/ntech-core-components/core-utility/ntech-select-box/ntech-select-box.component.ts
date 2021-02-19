import { Component, forwardRef, OnInit, Input, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NtechCoreTagClass } from '../../../ntech-core-interface/ntech-core-tag';
import { ntech_core_config_values } from 'src/app/ntech-models/ntech_core_config_values';
import { NtechAdminService } from 'src/app/ntech-services/ntech-admin.service';



declare var $: any;
@Component({

    selector: 'ntech-selectbox',
    templateUrl: './ntech-select-box.component.html',

    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: NtechSelectboxComponent,
        }
    ]
})

export class NtechSelectboxComponent extends NtechCoreTagClass implements OnInit, OnChanges {

    /* DECCRATOR FUNCTION */
    @Input("ntechkey") ntech_key: string;

    /* PROPERTY DECLARATION */
    localData: any;

    /* MODEL DECLARATION */
    private confValue: ntech_core_config_values[][];

    constructor(private adminservice: NtechAdminService) { super(); }

    ngOnInit() {

        if (this.ntech_key)
            if (this.ntech_key.length > 5) {
                if (this.ntech_key.indexOf('@') > -1) {
                    this.getLink();
                }
                else {
                    this.getCoreconfigvalue();
                }
            }
            else {
                this.getCoreconfigvalue();
            }
    }
    ngOnChanges() {
        if (this.ntech_key)
            if (this.ntech_key.length > 5)
                if (this.ntech_key.indexOf('@') > -1) {
                    this.getLink();
                }
    }

    getCoreconfigvalue() {
        this.adminservice.getConfigOptions({ 'ntech_key': this.ntech_key }).subscribe(data => {
            this.localData = data;
            if (this.localData) {
                if (this.localData.responseStatus == true)
                    this.confValue = this.localData.paramMap.configvalues;
            }
            console.log(this.confValue);
        });

    }

    getLink() {
        this.adminservice.getConfigOptions({ 'ntech_key': this.ntech_key, 'type': 'link' }).subscribe(data => {
            this.localData = data;
            if (this.localData) {
                if (this.localData.responseStatus == true)
                    this.confValue = this.localData.paramMap.configvalues;
            }

            console.log(this.confValue);
        });
    }

}