import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NtechProduct } from 'src/app/ntech-models/ntech_products';
import { NtechAdminService } from 'src/app/ntech-services/ntech-admin.service';

@Component({
    selector: 'ntech-app-product',
    templateUrl: './ntech-app-product-maintanance.component.html'
})
export class NtechAppProductMaintananceComponent implements OnInit {
    filtervalue: string
    ntechproduct = new NtechProduct;
    lstntechproduct: NtechProduct[];
    lstmainntechproduct: NtechProduct[];
    lstsubntechproduct: NtechProduct[];
    changecode: string;
    responseData: any;

    constructor(private modalService: NgbModal, private adminservice: NtechAdminService) {
        this.lstmainntechproduct = []
        this.lstsubntechproduct = []
    }
    ngOnInit(): void {
        this.filtervalue = 'S'
        this.getProductlist();
    }

    getProductlist() {
        this.lstmainntechproduct = []
        this.adminservice.getProductdata({ 'type': 'ID', 'ID': '1' }).subscribe((data) => {
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

        });
    }
    getValuebyId() {
        this.lstsubntechproduct = [];
        this.lstntechproduct.forEach((args) => {
            if (args.ntPrdLink == this.filtervalue)
                this.lstsubntechproduct.push(args)
        })
    }
    saveProduct() {
        this.modalService.dismissAll()
        this.adminservice.saveProduct({ 'ntech_prd': this.ntechproduct }).subscribe((data) => {
            if (data) {
                this.responseData = data
                if (this.responseData.responseStatus == true) {
                    alert('Product Created Successfully..');
                }
            }
            this.getProductlist();
        });
    }

    openNewModel(content, type: string) {
        this.ntechproduct = new NtechProduct;
        if (type == 'N')
            this.ntechproduct.ntPrdType = '1';
        else {
            this.ntechproduct.ntPrdType = '2';
            this.ntechproduct.ntPrdLink = this.filtervalue;
        }
        this.modalService.open(content);
    }
    getValuebyIndus(args: string) {
        this.changecode = args + '@' + this.ntechproduct.ntPrdIndCode;
    }

    getValuebySubInds() {
        
        this.lstmainntechproduct=[];
        this.lstntechproduct.forEach((args) => {
            if (args.ntPrdType == '1' && args.ntPrdIndsubCode == this.ntechproduct.ntPrdIndsubCode && args.ntPrdIndCode== this.ntechproduct.ntPrdIndCode)
                this.lstmainntechproduct.push(args)
        })
    }

}