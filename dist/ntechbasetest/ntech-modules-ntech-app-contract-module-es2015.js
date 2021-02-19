(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ntech-modules-ntech-app-contract-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-app-createlead/ntech-app-createlead.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-app-createlead/ntech-app-createlead.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <ntech-selectbox mandatory=\"true\" label=\"Industry\" ntechkey=\"N0010\" name=\"ntLdIndus\"\r\n              [(ngModel)]=\"ntlead.ntLdIndus\" (change)=\"getValuebyIndus('N0010','F')\"> </ntech-selectbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n           <!--  <ntech-lable label=\"Sub Industry\" mandatory=\"true\"></ntech-lable>\r\n            <select class=\"form-control\" name=\"ntLdSubindus\" [(ngModel)]=\"ntlead.ntLdSubindus\">\r\n              <option value=\"S\" selected>Select</option>\r\n              <option [value]=\"item.ntCdvValue\" *ngFor=\"let item of corevalues\"> {{item.ntCdvDesc}}\r\n            </select> -->\r\n            <ntech-selectbox mandatory=\"true\" label=\"Sub Industry\" [ntechkey]=\"changecode\" name=\"ntLdSubindus\"\r\n            [(ngModel)]=\"ntlead.ntLdSubindus\" > </ntech-selectbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <ntech-lable label=\"Product Category\" mandatory=\"true\"></ntech-lable>\r\n            <select class=\"form-control\" name=\"ntLdProd\" [(ngModel)]=\"ntlead.ntLdProd\" (change)=\"getValuebyId(ntlead.ntLdProd)\">\r\n              <option value=\"S\" selected>Select</option>\r\n              <option [value]=\"item.ntPrdSno\" *ngFor=\"let item of lstmainntechproduct\"> {{item.ntPrdName}}\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <ntech-lable label=\"Product Sub Category\" mandatory=\"true\"></ntech-lable>\r\n            <select class=\"form-control\" name=\"ntLdSubprod\" [(ngModel)]=\"ntlead.ntLdSubprod\">\r\n              <option value=\"S\" selected>Select</option>\r\n              <option [value]=\"item.ntPrdSno\" *ngFor=\"let item of lstsubntechproduct\"> {{item.ntPrdName}}\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <ntech-selectbox mandatory=\"true\" label=\"Lead Origination\" name=\"ntLdOrgin\" [(ngModel)]=\"ntlead.ntLdOrgin\"\r\n              ntechkey=\"N0013\"></ntech-selectbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <ntech-selectbox mandatory=\"true\" label=\"Customer Type\" name=\"ntConType\" [(ngModel)]=\"ntcons.ntConType\"\r\n              ntechkey=\"N0014\" (change)=\"test()\">\r\n            </ntech-selectbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-8\">\r\n            <ntech-textbox mandatory=\"true\" label=\"First Name\" attrclass=\"form-control\" name=\"ntConFname\"\r\n              [(ngModel)]=\"ntcons.ntConFname\" disabled=\"false\" placeholder=\"Enter First Name\">\r\n            </ntech-textbox>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <ntech-textbox mandatory=\"true\" label=\"Last Name\" attrclass=\"form-control\" name=\"ntConLname\"\r\n              [(ngModel)]=\"ntcons.ntConLname\" disabled=\"false\" placeholder=\"Enter First Name\">\r\n            </ntech-textbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <ntech-textbox mandatory=\"true\" label=\"Mobile Number\" attrclass=\"form-control\" name=\"ntConMob\"\r\n              [(ngModel)]=\"ntcons.ntConMob\" disabled=\"false\" placeholder=\"Enter First Name\">\r\n            </ntech-textbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <ntech-textbox mandatory=\"true\" label=\"Email Adddress\" attrclass=\"form-control\" name=\"ntConEmail\"\r\n              [(ngModel)]=\"ntcons.ntConEmail\" disabled=\"false\" placeholder=\"Enter First Name\">\r\n            </ntech-textbox>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Customer Details -->\r\n  <div class=\"col-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <h5>Adddress</h5>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <ntech-textbox mandatory=\"false\" label=\"Flat No.\" attrclass=\"form-control\" disabled=\"false\"\r\n                      placeholder=\"Enter Pin Code\" name=\"ntAddDoorno\" [(ngModel)]=\"ntaddress.ntAddDoorno\">\r\n                    </ntech-textbox>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <ntech-textbox mandatory=\"false\" label=\"Street Name\" attrclass=\"form-control\" disabled=\"false\"\r\n                      placeholder=\"Enter Pin Code\" name=\"ntAddStreet\" [(ngModel)]=\"ntaddress.ntAddStreet\">\r\n                    </ntech-textbox>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <ntech-textbox mandatory=\"false\" label=\"Adition Info\" attrclass=\"form-control\"\r\n                      name=\"ntAddUnstructdata\" disabled=\"false\" placeholder=\"Enter City\"\r\n                      [(ngModel)]=\"ntaddress.ntAddUnstructdata\">\r\n                    </ntech-textbox>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <ntech-textbox mandatory=\"false\" label=\"Taluk Name\" attrclass=\"form-control\" name=\"ntAddTaluk\"\r\n                      disabled=\"false\" placeholder=\"Enter Pin Code\" [(ngModel)]=\"ntaddress.ntAddTaluk\">\r\n                    </ntech-textbox>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <ntech-textbox mandatory=\"false\" label=\"District Name\" attrclass=\"form-control\" name=\"ntAddDistrict\"\r\n                      disabled=\"false\" placeholder=\"Enter Pin Code\" [(ngModel)]=\"ntaddress.ntAddDistrict\">\r\n                    </ntech-textbox>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <ntech-selectbox mandatory=\"true\" label=\"State\" ntechkey=\"N0006\" name=\"ntAddState\"\r\n                      [(ngModel)]=\"ntaddress.ntAddState\">\r\n                    </ntech-selectbox>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <ntech-textbox mandatory=\"false\" label=\"Pin Code\" attrclass=\"form-control\" name=\"ntAddPincode\"\r\n                      disabled=\"false\" placeholder=\"Enter Pin Code\" [(ngModel)]=\"ntaddress.ntAddPincode\">\r\n                    </ntech-textbox>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-8\">\r\n            <ntech-calendar mandatory=\"false\" label=\"Best Time to contact\" attrclass=\"form-control\" name=\"ntLdMeetdate\"\r\n              [(ngModel)]=\"ntlead.ntLdMeetdate\" disabled=\"false\">\r\n            </ntech-calendar>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <ntech-textbox mandatory=\"true\" label=\"Time(24H)\" attrclass=\"form-control\" name=\"ntLdMeettime\"\r\n              [(ngModel)]=\"ntlead.ntLdMeettime\" disabled=\"false\" placeholder=\"Enter First Name\">\r\n            </ntech-textbox>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <ntech-selectbox mandatory=\"true\" label=\"Language Preference\" ntechkey=\"N0012\"></ntech-selectbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <ntech-textarea mandatory=\"false\" label=\"Short Note\" attrclass=\"form-control\" name=\"ntLdShnote\"\r\n              [(ngModel)]=\"ntlead.ntLdShnote\" disabled=\"false\" placeholder=\"Enter Organization Name\">\r\n            </ntech-textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\"col-3\">&nbsp;</div>\r\n  <div class=\"col-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-2\">\r\n            &nbsp;\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <ntech-button attrclass=\"btn btn-primary\" label=\"Save \" (click)=\"saveLead()\"></ntech-button>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <ntech-button attrclass=\"btn btn-primary\" label=\"Edit \" (click)=\"openNewModel(content1)\"></ntech-button>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <ntech-button attrclass=\"btn btn-primary\" label=\"Cancle\" (click)=\"openNewModel(content1)\"></ntech-button>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <ntech-button attrclass=\"btn btn-success\" label=\"Process\" (click)=\"process()\"></ntech-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-3\">&nbsp;</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-app-inbox/ntech-app-inbox.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-app-inbox/ntech-app-inbox.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<table class=\"table table-sm\">\r\n    <thead class=\"thead-light\">\r\n      <tr>\r\n        <th>SNo.</th>\r\n        <th>Referance No.</th>\r\n        <th>Lead Name</th>\r\n        <th>Product Name</th>\r\n        <th>Created By</th>\r\n        <th>Created Date</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of ntechmailmod ; let i=index \">\r\n        <td>{{i+1}}</td>\r\n        <td><strong><a (click)=\"gotoLead(item.ntechmailbox.ntMaRefNo)\" ><font color=\"red\">{{item.ntechmailbox.ntMaRefNo}}</font></a></strong></td>\r\n        <td>{{item.ntechconsumerdata.ntConFname}}</td>\r\n        <td>{{item.ntechlead.ntLdProd}}</td>\r\n        <td>Prem</td>\r\n        <td>12/12/12</td>\r\n      </tr>\r\n     </tbody>\r\n  </table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadconversion/ntech-app-leadconversion.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadconversion/ntech-app-leadconversion.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    Hi this is my first sample page\r\n </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadfollowup/ntech-app-Leadfollowup.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadfollowup/ntech-app-Leadfollowup.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    Hi this is my first sample page\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-exam-sample/ntech-exam-sample.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-exam-sample/ntech-exam-sample.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/ntech-application-components/ntech-app-contract/ntech-app-createlead/ntech-app-createlead.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/ntech-application-components/ntech-app-contract/ntech-app-createlead/ntech-app-createlead.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: NtechAppCreateLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppCreateLeadComponent", function() { return NtechAppCreateLeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_ntech_models_ntech_address_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ntech-models/ntech_address_data */ "./src/app/ntech-models/ntech_address_data.ts");
/* harmony import */ var src_app_ntech_models_ntech_lead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ntech-models/ntech_lead */ "./src/app/ntech-models/ntech_lead.ts");
/* harmony import */ var src_app_ntech_models_ntech_consumer_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ntech-models/ntech_consumer_data */ "./src/app/ntech-models/ntech_consumer_data.ts");
/* harmony import */ var src_app_ntech_services_ntech_core_services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ntech-services/ntech-core-services/shared-data.service */ "./src/app/ntech-services/ntech-core-services/shared-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_ntech_services_ntech_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/ntech-services/ntech-admin.service */ "./src/app/ntech-services/ntech-admin.service.ts");
/* harmony import */ var src_app_ntech_services_ntech_contract_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/ntech-services/ntech-contract.service */ "./src/app/ntech-services/ntech-contract.service.ts");
/* harmony import */ var src_app_ntech_services_ntech_core_services_ntech_pagerefresh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/ntech-services/ntech-core-services/ntech-pagerefresh */ "./src/app/ntech-services/ntech-core-services/ntech-pagerefresh.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");












let NtechAppCreateLeadComponent = class NtechAppCreateLeadComponent {
    constructor(store, modalService, contractservice, adminservice, shareDate, router, pagerefresh) {
        this.store = store;
        this.modalService = modalService;
        this.contractservice = contractservice;
        this.adminservice = adminservice;
        this.shareDate = shareDate;
        this.router = router;
        this.pagerefresh = pagerefresh;
        this.ntaddress = new src_app_ntech_models_ntech_address_data__WEBPACK_IMPORTED_MODULE_3__["NtechAddressData"];
        this.ntlead = new src_app_ntech_models_ntech_lead__WEBPACK_IMPORTED_MODULE_4__["NtechLead"];
        this.ntcons = new src_app_ntech_models_ntech_consumer_data__WEBPACK_IMPORTED_MODULE_5__["NtechConsumerData"];
        this.lstmainntechproduct = [];
        this.lstsubntechproduct = [];
    }
    ngOnInit() {
        this.getProductlist();
        this.generateSharedData();
    }
    saveLead() {
        this.ntaddress.ntAddType = 'P';
        this.ntlead.ntLdHoldBy = this.ntechcommonmode.ntUserId;
        this.contractservice.saveLead({
            'ntech_lead': this.ntlead,
            'ntech_addr': this.ntaddress, 'ntech_cons': this.ntcons
        }).subscribe((data) => {
            if (data) {
                this.responseData = data;
                if (this.responseData.responseStatus == true) {
                    alert('Lead Created Successfully.. Your Application in Inbox page redirected automatically');
                    this.router.navigate(['/ntechapp/ntechappdash/ntechdashboard']);
                }
            }
        });
    }
    leadProcesscheck() {
        if (this.ntechcommonmode.leadno)
            this.getLeadData(this.ntechcommonmode.leadno);
    }
    getProductlist() {
        this.adminservice.getProductdata({ 'type': 'ALL' }).subscribe((data) => {
            if (data) {
                this.responseData = data;
                if (this.responseData.responseStatus == true) {
                    this.lstntechproduct = this.responseData.paramMap.product;
                    this.lstntechproduct.forEach((args) => {
                        if (args.ntPrdType == '1')
                            this.lstmainntechproduct.push(args);
                    });
                }
            }
            this.leadProcesscheck();
        });
    }
    getValuebyId(ntLdProd) {
        this.lstsubntechproduct = [];
        this.lstntechproduct.forEach((args) => {
            if (args.ntPrdLink == ntLdProd)
                this.lstsubntechproduct.push(args);
        });
    }
    getValuebyIndus(args, args2) {
        if (args2 == 'F')
            this.changecode = args + '@' + this.ntlead.ntLdIndus;
        else
            this.changecode = args + '@' + args2;
    }
    getLeadData(args) {
        this.contractservice.getLead({ 'leadno': args }).subscribe((data) => {
            if (data) {
                this.responseData = data;
                if (this.responseData.responseStatus == true) {
                    this.getValuebyIndus('N0010', this.responseData.paramMap.ntlead.ntLdIndus);
                    this.getValuebyId(this.responseData.paramMap.ntlead.ntLdProd);
                    this.ntcons = this.responseData.paramMap.ntcons;
                    this.ntaddress = this.responseData.paramMap.ntaddr;
                    this.ntlead = this.responseData.paramMap.ntlead;
                }
            }
        });
    }
    process() {
        this.pagerefresh.refreshPage();
    }
    generateSharedData() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])('ntechcommondata')).subscribe((args) => {
            this.ntechcommonmode = args;
            if (!this.ntechcommonmode.ntUserId || this.ntechcommonmode.ntUserId == '')
                this.router.navigate(['/ntecherror']);
        });
    }
};
NtechAppCreateLeadComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_ntech_services_ntech_contract_service__WEBPACK_IMPORTED_MODULE_9__["NtechContractService"] },
    { type: src_app_ntech_services_ntech_admin_service__WEBPACK_IMPORTED_MODULE_8__["NtechAdminService"] },
    { type: src_app_ntech_services_ntech_core_services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_ntech_services_ntech_core_services_ntech_pagerefresh__WEBPACK_IMPORTED_MODULE_10__["NtechPagerefresh"] }
];
NtechAppCreateLeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ntech-app-crlead',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-app-createlead.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-app-createlead/ntech-app-createlead.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], src_app_ntech_services_ntech_contract_service__WEBPACK_IMPORTED_MODULE_9__["NtechContractService"], src_app_ntech_services_ntech_admin_service__WEBPACK_IMPORTED_MODULE_8__["NtechAdminService"], src_app_ntech_services_ntech_core_services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_ntech_services_ntech_core_services_ntech_pagerefresh__WEBPACK_IMPORTED_MODULE_10__["NtechPagerefresh"]])
], NtechAppCreateLeadComponent);



/***/ }),

/***/ "./src/app/ntech-application-components/ntech-app-contract/ntech-app-inbox/ntech-app-inbox.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/ntech-application-components/ntech-app-contract/ntech-app-inbox/ntech-app-inbox.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: NtechAppInboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppInboxComponent", function() { return NtechAppInboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_ntech_services_ntech_core_services_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ntech-services/ntech-core-services/shared-data.service */ "./src/app/ntech-services/ntech-core-services/shared-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_ntech_services_ntech_contract_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ntech-services/ntech-contract.service */ "./src/app/ntech-services/ntech-contract.service.ts");






let NtechAppInboxComponent = class NtechAppInboxComponent {
    constructor(modalService, contractservice, sharedata, router) {
        this.modalService = modalService;
        this.contractservice = contractservice;
        this.sharedata = sharedata;
        this.router = router;
        this.ntechmail = [];
        this.ntechmailmod = [];
    }
    ngOnInit() {
        this.getLeadinbox();
        this.sharedata.getData.subscribe((data) => {
            this.sharemodel = data;
        });
    }
    getLeadinbox() {
        this.contractservice.getLeadInbox({}).subscribe((data) => {
            if (data) {
                this.responseData = data;
                if (this.responseData.responseStatus == true) {
                    for (let i of this.responseData.paramMap.leadmail)
                        this.ntechmailmod.push(i);
                }
            }
        });
    }
    gotoLead(args) {
        this.sharemodel.leadno = args.replace(/['"]+/g, '');
        this.router.navigate(['/ntechapp/ntechappcontract/ntcrlead']);
    }
};
NtechAppInboxComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_ntech_services_ntech_contract_service__WEBPACK_IMPORTED_MODULE_5__["NtechContractService"] },
    { type: src_app_ntech_services_ntech_core_services_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NtechAppInboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ntech-app-inbox',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-app-inbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-app-inbox/ntech-app-inbox.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], src_app_ntech_services_ntech_contract_service__WEBPACK_IMPORTED_MODULE_5__["NtechContractService"], src_app_ntech_services_ntech_core_services_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], NtechAppInboxComponent);



/***/ }),

/***/ "./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadconversion/ntech-app-leadconversion.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadconversion/ntech-app-leadconversion.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: NtechAppLeadconversionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppLeadconversionComponent", function() { return NtechAppLeadconversionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NtechAppLeadconversionComponent = class NtechAppLeadconversionComponent {
};
NtechAppLeadconversionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ntconversion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-app-leadconversion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadconversion/ntech-app-leadconversion.component.html")).default
    })
], NtechAppLeadconversionComponent);



/***/ }),

/***/ "./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadfollowup/ntech-app-leadfollowup.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadfollowup/ntech-app-leadfollowup.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: NtechAppLeadfollowupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppLeadfollowupComponent", function() { return NtechAppLeadfollowupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NtechAppLeadfollowupComponent = class NtechAppLeadfollowupComponent {
};
NtechAppLeadfollowupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ntfollowup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-app-Leadfollowup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadfollowup/ntech-app-Leadfollowup.component.html")).default
    })
], NtechAppLeadfollowupComponent);



/***/ }),

/***/ "./src/app/ntech-application-components/ntech-app-contract/ntech-exam-sample/ntech-exam-sample.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/ntech-application-components/ntech-app-contract/ntech-exam-sample/ntech-exam-sample.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: NtechExamSampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechExamSampleComponent", function() { return NtechExamSampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NtechExamSampleComponent = class NtechExamSampleComponent {
};
NtechExamSampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ntech-exam-sample',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-exam-sample.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-contract/ntech-exam-sample/ntech-exam-sample.component.html")).default
    })
], NtechExamSampleComponent);



/***/ }),

/***/ "./src/app/ntech-models/ntech_consumer_data.ts":
/*!*****************************************************!*\
  !*** ./src/app/ntech-models/ntech_consumer_data.ts ***!
  \*****************************************************/
/*! exports provided: NtechConsumerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechConsumerData", function() { return NtechConsumerData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NtechConsumerData {
}


/***/ }),

/***/ "./src/app/ntech-models/ntech_lead.ts":
/*!********************************************!*\
  !*** ./src/app/ntech-models/ntech_lead.ts ***!
  \********************************************/
/*! exports provided: NtechLead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechLead", function() { return NtechLead; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NtechLead {
}


/***/ }),

/***/ "./src/app/ntech-modules/ntech-app-contract.module.ts":
/*!************************************************************!*\
  !*** ./src/app/ntech-modules/ntech-app-contract.module.ts ***!
  \************************************************************/
/*! exports provided: NtechAppContractModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppContractModule", function() { return NtechAppContractModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ntech_application_components_ntech_app_contract_ntech_exam_sample_ntech_exam_sample_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-contract/ntech-exam-sample/ntech-exam-sample.component */ "./src/app/ntech-application-components/ntech-app-contract/ntech-exam-sample/ntech-exam-sample.component.ts");
/* harmony import */ var _ntech_routers_ntech_app_contract_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ntech-routers/ntech-app-contract.routing.module */ "./src/app/ntech-routers/ntech-app-contract.routing.module.ts");
/* harmony import */ var _ntech_application_components_ntech_app_contract_ntech_app_inbox_ntech_app_inbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-contract/ntech-app-inbox/ntech-app-inbox.component */ "./src/app/ntech-application-components/ntech-app-contract/ntech-app-inbox/ntech-app-inbox.component.ts");
/* harmony import */ var _ntech_core_components_ntech_core_components_ntech_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ntech-core-components/ntech-core-components/ntech-core.module */ "./src/app/ntech-core-components/ntech-core-components/ntech-core.module.ts");
/* harmony import */ var _ntech_application_components_ntech_app_contract_ntech_app_createlead_ntech_app_createlead_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-contract/ntech-app-createlead/ntech-app-createlead.component */ "./src/app/ntech-application-components/ntech-app-contract/ntech-app-createlead/ntech-app-createlead.component.ts");
/* harmony import */ var _ntech_services_ntech_contract_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ntech-services/ntech-contract.service */ "./src/app/ntech-services/ntech-contract.service.ts");
/* harmony import */ var _ntech_application_components_ntech_app_contract_ntech_app_leadconversion_ntech_app_leadconversion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-contract/ntech-app-leadconversion/ntech-app-leadconversion.component */ "./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadconversion/ntech-app-leadconversion.component.ts");
/* harmony import */ var _ntech_application_components_ntech_app_contract_ntech_app_leadfollowup_ntech_app_leadfollowup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-contract/ntech-app-leadfollowup/ntech-app-leadfollowup.component */ "./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadfollowup/ntech-app-leadfollowup.component.ts");













let NtechAppContractModule = class NtechAppContractModule {
};
NtechAppContractModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _ntech_core_components_ntech_core_components_ntech_core_module__WEBPACK_IMPORTED_MODULE_8__["NtechCoreComponentModule"],
            _ntech_routers_ntech_app_contract_routing_module__WEBPACK_IMPORTED_MODULE_6__["NtechAppContractRoutingModule"]
        ],
        declarations: [
            _ntech_application_components_ntech_app_contract_ntech_exam_sample_ntech_exam_sample_component__WEBPACK_IMPORTED_MODULE_5__["NtechExamSampleComponent"], _ntech_application_components_ntech_app_contract_ntech_app_inbox_ntech_app_inbox_component__WEBPACK_IMPORTED_MODULE_7__["NtechAppInboxComponent"], _ntech_application_components_ntech_app_contract_ntech_app_createlead_ntech_app_createlead_component__WEBPACK_IMPORTED_MODULE_9__["NtechAppCreateLeadComponent"],
            _ntech_application_components_ntech_app_contract_ntech_app_leadconversion_ntech_app_leadconversion_component__WEBPACK_IMPORTED_MODULE_11__["NtechAppLeadconversionComponent"], _ntech_application_components_ntech_app_contract_ntech_app_leadfollowup_ntech_app_leadfollowup_component__WEBPACK_IMPORTED_MODULE_12__["NtechAppLeadfollowupComponent"]
        ],
        exports: [],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }, _ntech_services_ntech_contract_service__WEBPACK_IMPORTED_MODULE_10__["NtechContractService"]]
    })
], NtechAppContractModule);



/***/ }),

/***/ "./src/app/ntech-routers/ntech-app-contract.routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ntech-routers/ntech-app-contract.routing.module.ts ***!
  \********************************************************************/
/*! exports provided: NtechAppContractRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppContractRoutingModule", function() { return NtechAppContractRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ntech_application_components_ntech_app_contract_ntech_exam_sample_ntech_exam_sample_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-contract/ntech-exam-sample/ntech-exam-sample.component */ "./src/app/ntech-application-components/ntech-app-contract/ntech-exam-sample/ntech-exam-sample.component.ts");
/* harmony import */ var _ntech_application_components_ntech_app_contract_ntech_app_inbox_ntech_app_inbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-contract/ntech-app-inbox/ntech-app-inbox.component */ "./src/app/ntech-application-components/ntech-app-contract/ntech-app-inbox/ntech-app-inbox.component.ts");
/* harmony import */ var _ntech_application_components_ntech_app_contract_ntech_app_createlead_ntech_app_createlead_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-contract/ntech-app-createlead/ntech-app-createlead.component */ "./src/app/ntech-application-components/ntech-app-contract/ntech-app-createlead/ntech-app-createlead.component.ts");
/* harmony import */ var _ntech_application_components_ntech_app_contract_ntech_app_leadfollowup_ntech_app_leadfollowup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-contract/ntech-app-leadfollowup/ntech-app-leadfollowup.component */ "./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadfollowup/ntech-app-leadfollowup.component.ts");
/* harmony import */ var _ntech_application_components_ntech_app_contract_ntech_app_leadconversion_ntech_app_leadconversion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-contract/ntech-app-leadconversion/ntech-app-leadconversion.component */ "./src/app/ntech-application-components/ntech-app-contract/ntech-app-leadconversion/ntech-app-leadconversion.component.ts");








const routes = [
    { path: 'ntexam', component: _ntech_application_components_ntech_app_contract_ntech_exam_sample_ntech_exam_sample_component__WEBPACK_IMPORTED_MODULE_3__["NtechExamSampleComponent"] },
    { path: 'ntinbox', component: _ntech_application_components_ntech_app_contract_ntech_app_inbox_ntech_app_inbox_component__WEBPACK_IMPORTED_MODULE_4__["NtechAppInboxComponent"] },
    { path: 'ntcrlead', component: _ntech_application_components_ntech_app_contract_ntech_app_createlead_ntech_app_createlead_component__WEBPACK_IMPORTED_MODULE_5__["NtechAppCreateLeadComponent"] },
    { path: 'ntleadfollow', component: _ntech_application_components_ntech_app_contract_ntech_app_leadfollowup_ntech_app_leadfollowup_component__WEBPACK_IMPORTED_MODULE_6__["NtechAppLeadfollowupComponent"] },
    { path: 'ntleadconvert', component: _ntech_application_components_ntech_app_contract_ntech_app_leadconversion_ntech_app_leadconversion_component__WEBPACK_IMPORTED_MODULE_7__["NtechAppLeadconversionComponent"] },
];
let NtechAppContractRoutingModule = class NtechAppContractRoutingModule {
};
NtechAppContractRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], NtechAppContractRoutingModule);



/***/ }),

/***/ "./src/app/ntech-services/ntech-contract.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/ntech-services/ntech-contract.service.ts ***!
  \**********************************************************/
/*! exports provided: NtechContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechContractService", function() { return NtechContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ntech_core_services_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ntech-core-services/shared-data.service */ "./src/app/ntech-services/ntech-core-services/shared-data.service.ts");





let NtechContractService = class NtechContractService {
    constructor(http, shareDate) {
        this.http = http;
        this.shareDate = shareDate;
    }
    saveLead(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + 'ntechcontract/savelead', { "ntech_request": data });
    }
    getLeadInbox(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + 'ntechcontract/getleadmail', { "ntech_request": data });
    }
    getLead(data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + 'ntechcontract/getlead', { "ntech_request": data });
    }
};
NtechContractService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ntech_core_services_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] }
];
NtechContractService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ntech_core_services_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]])
], NtechContractService);



/***/ })

}]);