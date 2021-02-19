(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ntech-modules-ntech-app-main-module~ntech-modules-ntech-app-setup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-setup/ntech-app-corevalue/ntech-app-corevalue.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-setup/ntech-app-corevalue/ntech-app-corevalue.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-10\">\r\n                            <div>\r\n                                <ntech-lable label=\"Config Name\" mandatory=\"true\"></ntech-lable>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-10\">\r\n                                    <select class=\"form-control\" [(ngModel)]=\"inputvalue\" (change)=\"getValuebyId()\">\r\n                                        <option value=\"S\" selected>Select</option>\r\n                                        <option [value]=\"item[0]\" *ngFor=\"let item of coreconfig1\"> {{item[0]}} - ( {{item[1]}} )\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-2\">\r\n                                    <ntech-button attrclass=\"btn btn-primary\" label=\"New\"\r\n                                        (click)=\"openNewModel(content1)\"></ntech-button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <div>\r\n                            <ntech-lable label=\"Config Values\" mandatory=\"false\"></ntech-lable>\r\n                        </div>\r\n                        <div *ngIf=\"coreconfig2.length == 0\">\r\n                            <div style=\"align-content: center;\">\r\n                                <ntech-lable align=\"center\" color=\"red\" label=\"No data found\" mandatory=\"false\">\r\n                                </ntech-lable>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"coreconfig2.length > 0\">\r\n                            <table class=\"table table-bordered\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>S.No</th>\r\n                                        <th>Value</th>\r\n                                        <th>Decscription</th>\r\n                                        <th>Type</th>\r\n                                        <th>Status</th>\r\n                                        <th>Action</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of coreconfig2;  let i=index\">\r\n                                        <td>{{i+1}}</td>\r\n                                        <td>{{item.ntCdvValue}}</td>\r\n                                        <td>{{item.ntCdvDesc}}</td>\r\n                                        <td>\r\n                                            <div [ngSwitch]=\"item.ntCdvType\">\r\n                                                <div *ngSwitchCase=\" '1' \">Web User</div>\r\n                                                <div *ngSwitchCase=\" '2' \">Mobile User</div>\r\n                                                <div *ngSwitchCase=\" '3' \">Both</div>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div [ngSwitch]=\"item.ntCdvActive\">\r\n                                                <div *ngSwitchCase=\" '1' \">Active</div>\r\n                                                <div *ngSwitchCase=\" '2' \">In-Active</div>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n\r\n                                            <i class=\"fa fa-pencil\" (click)=\"openEditModel(content,item,i)\"></i>\r\n                                            &nbsp;\r\n                                            <i class=\"fa fa-trash\" (click)=\"deleteRecord(item)\"></i>\r\n\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!--\r\n        Model Block Codeing\r\n    -->\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Core Page Configuration</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <ntech-textbox mandatory=\"true\" label=\"Value\" attrclass=\"form-control\" name=\"ntCdvValue\"\r\n                    disabled=\"false\" placeholder=\"Enter Middle Name\" [(ngModel)]=\"currentRow.ntCdvValue\">\r\n                </ntech-textbox>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <ntech-textbox mandatory=\"true\" label=\"Description\" attrclass=\"form-control\" name=\"ntCdvKeyId\"\r\n                    disabled=\"false\" placeholder=\"Enter Middle Name\" [(ngModel)]=\"currentRow.ntCdvDesc\">\r\n                </ntech-textbox>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <ntech-selectbox name=\"{{indexId}}N0002{{currentRow.ntRowId}}\" mandatory=\"true\" label=\"Type\"\r\n                    ntechkey=\"N0002\" [(ngModel)]=\"currentRow.ntCdvType\">\r\n                </ntech-selectbox>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <ntech-selectbox name=\"{{indexId}}N0003{{currentRow.ntRowId}}\" mandatory=\"true\" label=\"Status\"\r\n                    ntechkey=\"N0003\" [(ngModel)]=\"currentRow.ntCdvActive\">\r\n                </ntech-selectbox>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <ntech-button attrclass=\"btn btn-primary\" label=\"Update\" (click)=\"saveConfigValue(currentRow)\"></ntech-button>\r\n        <ntech-button attrclass=\"btn btn-primary\" label=\"Cancle\" (click)=\"d('Cross click')\"></ntech-button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #content1 let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Core Page Configuration</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-10\">\r\n                <div>\r\n                    <ntech-lable label=\"Config Name\" mandatory=\"true\"></ntech-lable>\r\n                </div>\r\n                <select class=\"form-control\" [(ngModel)]=\"newinputvalue\" (change)=\"checkconfigId()\">\r\n                    <option value=\"N\" selected>New</option>\r\n                    <option [value]=\"item[0]\" *ngFor=\"let item of coreconfig1\">  {{item[0]}} - ( {{item[1]}} )\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <ntech-textbox mandatory=\"true\" label=\"Config Key\" attrclass=\"form-control\" name=\"newntCdvKeyId\"\r\n                    disabled=\"true\" placeholder=\"Key\" [(ngModel)]=\"currentRow1.ntCdvKeyId\">\r\n                </ntech-textbox>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <ntech-textbox mandatory=\"true\" label=\"Link Key\" attrclass=\"form-control\" name=\"ntCdvLink\"\r\n                    disabled=\"false\" placeholder=\"Key\" [(ngModel)]=\"currentRow1.ntCdvLink\">\r\n                </ntech-textbox>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <ntech-textbox mandatory=\"true\" label=\"Config Key Name\" attrclass=\"form-control\" name=\"newntCdvKeyId\"\r\n                    disabled=\"false\" placeholder=\"Key\" [(ngModel)]=\"currentRow1.ntCdvKeyName\">\r\n                </ntech-textbox>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <ntech-textbox mandatory=\"true\" label=\"Value\" attrclass=\"form-control\" name=\"newntCdvValue\"\r\n                    disabled=\"false\" placeholder=\"Enter Middle Name\" [(ngModel)]=\"currentRow1.ntCdvValue\">\r\n                </ntech-textbox>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <ntech-textbox mandatory=\"true\" label=\"Description\" attrclass=\"form-control\" name=\"newntCdvKeyId\"\r\n                    disabled=\"false\" placeholder=\"Enter Middle Name\" [(ngModel)]=\"currentRow1.ntCdvDesc\">\r\n                </ntech-textbox>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <ntech-selectbox name=\"newntCdvType\" mandatory=\"true\" label=\"Type\" ntechkey=\"N0002\"\r\n                    [(ngModel)]=\"currentRow1.ntCdvType\">\r\n                </ntech-selectbox>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <ntech-selectbox name=\"newntCdvActive\" mandatory=\"true\" label=\"Status\" ntechkey=\"N0003\"\r\n                    [(ngModel)]=\"currentRow1.ntCdvActive\">\r\n                </ntech-selectbox>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <ntech-button attrclass=\"btn btn-primary\" label=\"Save\" (click)=\"saveConfigValue(currentRow1)\"></ntech-button>\r\n        <ntech-button attrclass=\"btn btn-primary\" label=\"Cancle\" (click)=\"d('Cross click')\"></ntech-button>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-setup/ntech-app-custompageaccess/ntech-app-custompageaccess.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-setup/ntech-app-custompageaccess/ntech-app-custompageaccess.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    Mail page\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-setup/ntech-app-page-maintanance/ntech-app-page-master.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-setup/ntech-app-page-maintanance/ntech-app-page-master.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <div>\r\n                                <ntech-lable label=\"Parent Page\" mandatory=\"true\"></ntech-lable>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-10\">\r\n                                    <select class=\"form-control\" [(ngModel)]=\"inputvalue\" (change)=\"getSubpages()\">\r\n                                        <option value=\"S\" selected>Select</option>\r\n                                        <option [value]=\"item.ntSno\" *ngFor=\"let item of ntechpage1\">\r\n                                            {{item.ntPagename}}\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-2\">\r\n                                    <ntech-button attrclass=\"btn btn-primary\" label=\"New\"\r\n                                        (click)=\"openNewModel(content)\"></ntech-button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <div>\r\n                                <ntech-lable label=\"Sub Pages\" mandatory=\"false\"></ntech-lable>\r\n                            </div>\r\n                            <div *ngIf=\"ntechsubpage.length == 0\">\r\n                                <div style=\"align-content: center;\">\r\n                                    <ntech-lable align=\"center\" color=\"red\" label=\"No data found\" mandatory=\"false\">\r\n                                    </ntech-lable>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"ntechsubpage.length > 0\">\r\n                                <table class=\"table table-bordered\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Sub Sr.No</th>\r\n                                            <th>Page Name</th>\r\n                                            <th>Page Info</th>\r\n                                            <th>Page Category</th>\r\n                                            <th>Page Device</th>\r\n                                            <th>Page Status</th>\r\n                                            <th>Action</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let item of ntechsubpage;  let i=index\">\r\n                                            <td>{{item.ntSubSno}}</td>\r\n                                            <td>{{item.ntPagename}}</td>\r\n                                            <td>{{item.ntPageinfo}}</td>\r\n                                            <td>{{item.ntPageCategory}}</td>\r\n                                            <td>\r\n                                                <div [ngSwitch]=\"item.ntPageDevice\">\r\n                                                    <div *ngSwitchCase=\" '1' \">Web User</div>\r\n                                                    <div *ngSwitchCase=\" '2' \">Mobile User</div>\r\n                                                    <div *ngSwitchCase=\" '3' \">Both</div>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div [ngSwitch]=\"item.ntActive\">\r\n                                                    <div *ngSwitchCase=\" '1' \">Active</div>\r\n                                                    <div *ngSwitchCase=\" '2' \">In-Active</div>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n\r\n                                                <i class=\"fa fa-pencil\" (click)=\"openEditModel(content,item,i)\"></i>\r\n                                                &nbsp;\r\n                                                <i class=\"fa fa-trash\" (click)=\"deleteRecord(item)\"></i>\r\n\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Page Creation</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <ntech-textbox mandatory=\"true\" label=\"Page Name\" attrclass=\"form-control\" name=\"ntPagename\"\r\n                            disabled=\"false\" placeholder=\"Page Name\" [(ngModel)]=\"currentPage.ntPagename\">\r\n                        </ntech-textbox>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <ntech-selectbox mandatory=\"true\" label=\"Status\" attrclass=\"form-control\" ntechkey=\"N0003\"\r\n                            [(ngModel)]=\"currentPage.ntActive\" name=\"ntActive\">\r\n                        </ntech-selectbox>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <ntech-textbox mandatory=\"true\" label=\"Router Name\" attrclass=\"form-control\" name=\"ntRouterName\"\r\n                            disabled=\"false\" placeholder=\"ntRouterName\" [(ngModel)]=\"currentPage.ntRouterName\">\r\n                        </ntech-textbox>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <ntech-textbox mandatory=\"true\" label=\"Page Icon\" attrclass=\"form-control\" name=\"ntPageIcon\"\r\n                            disabled=\"false\" placeholder=\"Page Icon\" [(ngModel)]=\"currentPage.ntPageIcon\">\r\n                        </ntech-textbox>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <ntech-selectbox mandatory=\"true\" label=\"Page Status\" attrclass=\"form-control\" ntechkey=\"N0002\"\r\n                            [(ngModel)]=\"currentPage.ntPageDevice\" name=\"ntPagestatus\">\r\n                        </ntech-selectbox>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <ntech-textbox mandatory=\"true\" label=\"Page Category\" attrclass=\"form-control\"\r\n                            name=\"ntPageCategory\" disabled=\"false\" placeholder=\"Page Category\"\r\n                            [(ngModel)]=\"currentPage.ntPageCategory\">\r\n                        </ntech-textbox>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n\r\n                        <ntech-textarea mandatory=\"false\" label=\"Page Info\" attrclass=\"form-control\" name=\"orgname\"\r\n                            disabled=\"false\" placeholder=\"Page Info\" [(ngModel)]=\"currentPage.ntPageinfo\">\r\n                        </ntech-textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <div *ngIf=\"action == 'N' \">\r\n            <ntech-button attrclass=\"btn btn-primary\" label=\"Save\" (click)=\"savePages()\">\r\n            </ntech-button>\r\n        </div>\r\n        <div *ngIf=\"action == 'U' \">\r\n            <ntech-button attrclass=\"btn btn-primary\" label=\"Update\" (click)=\"updatePages()\">\r\n            </ntech-button>\r\n        </div>\r\n        <ntech-button attrclass=\"btn btn-primary\" label=\"Cancel\" (click)=\"d('Cross click')\"></ntech-button>\r\n    </div>\r\n\r\n\r\n\r\n    <!-- <div class=\"modal-footer\">\r\n        <ntech-button attrclass=\"btn btn-primary\" [label]=\"btnName\" (click)=\"savePages()\"></ntech-button>\r\n        <ntech-button attrclass=\"btn btn-primary\" label=\"Cancle\" (click)=\"d('Cross click')\"></ntech-button>\r\n    </div> -->\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-setup/ntech-app-setup-sample/ntech-app-setup.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-setup/ntech-app-setup-sample/ntech-app-setup.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>i am setup</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage1/ntech-custompage1.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage1/ntech-custompage1.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage2/ntech-custompage2.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage2/ntech-custompage2.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage3/ntech-custompage3.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage3/ntech-custompage3.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage4/ntech-custompage4.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage4/ntech-custompage4.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage5/ntech-custompage5.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage5/ntech-custompage5.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/ntech-application-components/ntech-app-setup/ntech-app-corevalue/ntech-app-corevalue.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/ntech-application-components/ntech-app-setup/ntech-app-corevalue/ntech-app-corevalue.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: NtechAppCoreValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppCoreValueComponent", function() { return NtechAppCoreValueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_ntech_models_ntech_core_config_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ntech-models/ntech_core_config_values */ "./src/app/ntech-models/ntech_core_config_values.ts");
/* harmony import */ var src_app_ntech_services_ntech_core_services_ntech_dialogbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ntech-services/ntech-core-services/ntech-dialogbox.service */ "./src/app/ntech-services/ntech-core-services/ntech-dialogbox.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_ntech_services_ntech_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ntech-services/ntech-admin.service */ "./src/app/ntech-services/ntech-admin.service.ts");






let NtechAppCoreValueComponent = class NtechAppCoreValueComponent {
    constructor(adminservice, dialogboxservice, config, modalService) {
        this.adminservice = adminservice;
        this.dialogboxservice = dialogboxservice;
        this.modalService = modalService;
        this.coreconfig1 = new Array();
        this.coreconfig3 = new Array();
        this.coreconfig4 = new Array();
        this.currentRow1 = new src_app_ntech_models_ntech_core_config_values__WEBPACK_IMPORTED_MODULE_2__["ntech_core_config_values"]();
        this.coreconfig5 = new Array();
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.coreconfig2 = [];
        this.getCoreconfigvalue();
        this.inputvalue = "S";
    }
    openConfirmationDialog() {
        this.dialogboxservice.confirm('Please confirm..', 'Do you really want to ... ?')
            .then((confirmed) => console.log('User confirmed:', confirmed))
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
    getCoreconfigvalue() {
        this.coreconfig = [];
        this.coreconfig1 = [];
        this.coreconfig2 = [];
        this.coreconfig3 = [];
        this.coreconfig4 = [];
        this.coreconfig5 = [];
        this.adminservice.getConfigOptions({ 'ntech_key': 'ALL' }).subscribe(data => {
            this.localData = data;
            if (this.localData) {
                if (this.localData.responseStatus == true)
                    this.coreconfig = this.localData.paramMap.configvalues;
                this.coreconfig.forEach(args => {
                    this.coreconfig1.push(args.ntCdvKeyId);
                });
                this.coreconfig1 = Array.from(new Set(this.coreconfig1).values());
                this.coreconfig1.forEach((args) => {
                    for (let i in this.coreconfig) {
                        if (args == this.coreconfig[i].ntCdvKeyId) {
                            this.coreconfig5.push([args, this.coreconfig[i].ntCdvKeyName]);
                            break;
                        }
                    }
                });
                this.coreconfig1 = this.coreconfig5;
                this.getValuebyId();
            }
        });
    }
    getValuebyId() {
        this.coreconfig2 = [];
        this.coreconfig.forEach(args => {
            if (args.ntCdvKeyId === this.inputvalue)
                this.coreconfig2.push(args);
        });
        console.log(this.coreconfig2);
    }
    openEditModel(content, row, i) {
        this.currentRow = row;
        this.indexId = i;
        this.modalService.open(content);
    }
    openNewModel(content1) {
        this.currentRow1 = new src_app_ntech_models_ntech_core_config_values__WEBPACK_IMPORTED_MODULE_2__["ntech_core_config_values"];
        this.modalService.open(content1);
    }
    saveConfigValue(row) {
        this.modalService.dismissAll();
        this.adminservice.saveConfigValues(row).subscribe((data) => {
            this.localData = data;
            if (this.localData) {
                if (this.localData.responseStatus == true)
                    this.currentRow = this.localData.paramMap.configvalues;
                this.getCoreconfigvalue();
            }
        });
    }
    deleteRecord(item) {
        item.ntCdvActive = '3';
        this.adminservice.saveConfigValues(item).subscribe((data) => {
            this.localData = data;
            if (this.localData) {
                if (this.localData.responseStatus == true)
                    this.currentRow = this.localData.paramMap.configvalues;
                this.getCoreconfigvalue();
            }
        });
    }
    checkconfigId() {
        this.currentRow1 = new src_app_ntech_models_ntech_core_config_values__WEBPACK_IMPORTED_MODULE_2__["ntech_core_config_values"];
        if (this.newinputvalue == 'N') {
            this.coreconfig3 = this.coreconfig1;
            this.coreconfig3.forEach((args) => {
                this.coreconfig4.push(args[0].substring(1, args[0].length));
            });
            this.currentRow1.ntCdvKeyId = Math.max.apply(Math, this.coreconfig4.map(function (args) { return args; }));
            if ((this.currentRow1.ntCdvKeyId + 1).toString().length == 1)
                this.currentRow1.ntCdvKeyId = 'N000'.concat((this.currentRow1.ntCdvKeyId + 1));
            if ((this.currentRow1.ntCdvKeyId + 1).toString().length == 2)
                this.currentRow1.ntCdvKeyId = 'N00'.concat((this.currentRow1.ntCdvKeyId + 1));
            if ((this.currentRow1.ntCdvKeyId + 1).toString().length == 3)
                this.currentRow1.ntCdvKeyId = 'N0'.concat((this.currentRow1.ntCdvKeyId + 1));
        }
        else {
            this.currentRow1.ntCdvKeyId = this.newinputvalue;
            for (let i in this.coreconfig1) {
                if (this.coreconfig1[i][0] == this.newinputvalue)
                    this.currentRow1.ntCdvKeyName = this.coreconfig1[i][1];
            }
        }
    }
};
NtechAppCoreValueComponent.ctorParameters = () => [
    { type: src_app_ntech_services_ntech_admin_service__WEBPACK_IMPORTED_MODULE_5__["NtechAdminService"] },
    { type: src_app_ntech_services_ntech_core_services_ntech_dialogbox_service__WEBPACK_IMPORTED_MODULE_3__["NtechDialogboxService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
NtechAppCoreValueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ntech-app-corevalue',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-app-corevalue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-setup/ntech-app-corevalue/ntech-app-corevalue.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_ntech_services_ntech_admin_service__WEBPACK_IMPORTED_MODULE_5__["NtechAdminService"], src_app_ntech_services_ntech_core_services_ntech_dialogbox_service__WEBPACK_IMPORTED_MODULE_3__["NtechDialogboxService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], NtechAppCoreValueComponent);



/***/ }),

/***/ "./src/app/ntech-application-components/ntech-app-setup/ntech-app-custompageaccess/ntech-app-custompageaccess.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/ntech-application-components/ntech-app-setup/ntech-app-custompageaccess/ntech-app-custompageaccess.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: NtechAppCustomPageAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppCustomPageAccessComponent", function() { return NtechAppCustomPageAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NtechAppCustomPageAccessComponent = class NtechAppCustomPageAccessComponent {
};
NtechAppCustomPageAccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ntech-app-custompageaccess',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-app-custompageaccess.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-setup/ntech-app-custompageaccess/ntech-app-custompageaccess.component.html")).default
    })
], NtechAppCustomPageAccessComponent);



/***/ }),

/***/ "./src/app/ntech-application-components/ntech-app-setup/ntech-app-page-maintanance/ntech-app-page-master.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/ntech-application-components/ntech-app-setup/ntech-app-page-maintanance/ntech-app-page-master.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: NtechAppPageMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppPageMasterComponent", function() { return NtechAppPageMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_ntech_models_ntech_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ntech-models/ntech_pages */ "./src/app/ntech-models/ntech_pages.ts");
/* harmony import */ var src_app_ntech_services_ntech_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ntech-services/ntech-setup.service */ "./src/app/ntech-services/ntech-setup.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_ntech_constants_GlobalConstants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ntech-constants/GlobalConstants.constant */ "./src/app/ntech-constants/GlobalConstants.constant.ts");






let NtechAppPageMasterComponent = class NtechAppPageMasterComponent {
    constructor(setupservice, modalService) {
        this.setupservice = setupservice;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.ntechsubpage = [];
        this.ntechpage1 = [];
        this.getAllpages();
    }
    getAllpages() {
        this.setupservice.getNtechpages({ 'page': 'ALL' }).subscribe((data) => {
            this.localData = data;
            if (this.localData) {
                if (this.localData.responseStatus == true)
                    this.ntechpage = this.localData.paramMap.ntech_pages;
                this.ntechpage.forEach(args => {
                    if (args.ntPageType == 'P')
                        this.ntechpage1.push(args);
                });
            }
        });
    }
    getSubpages() {
        this.setupservice.getNtechpages({ 'page': this.inputvalue }).subscribe((data) => {
            this.localData = data;
            if (this.localData) {
                if (this.localData.responseStatus == true)
                    this.ntechsubpage = this.localData.paramMap.ntech_pages;
            }
        });
    }
    openNewModel(content) {
        this.action = 'N';
        this.currentPage = new src_app_ntech_models_ntech_pages__WEBPACK_IMPORTED_MODULE_2__["NtechPage"];
        this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    }
    openEditModel(content, item, i) {
        this.action = 'U';
        this.currentPage = item;
        this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    }
    savePages() {
        this.currentPage.ntActive = src_app_ntech_constants_GlobalConstants_constant__WEBPACK_IMPORTED_MODULE_5__["GlobalConstants"].ACTIVEFLAG;
        this.setupservice.ntechSavepages(this.currentPage).subscribe((data) => {
            if (data) {
                this.responseData = data;
                if (this.responseData.responseStatus == true) {
                    alert('Page Created Successfully..');
                }
            }
        });
    }
    updatePages() {
        this.modalService.dismissAll();
        this.setupservice.ntechSavepages({ 'ntech_pages': this.ntechpage
        }).subscribe((data) => {
            if (data) {
                this.responseData = data;
                if (this.responseData.responseStatus == true) {
                    alert('Page Update Successfully..');
                }
            }
        });
    }
    deleteRecord(item) {
        this.currentPage = item;
        this.currentPage.ntActive = src_app_ntech_constants_GlobalConstants_constant__WEBPACK_IMPORTED_MODULE_5__["GlobalConstants"].DELETEFLAG;
        //this.ntechpage1.nt_active =GlobalConstants.DELETEFLAG;
        this.setupservice.ntechSavepages({ 'ntech_pages': this.currentPage
        }).subscribe((data) => {
            if (data) {
                this.responseData = data;
                if (this.responseData.responseStatus == true) {
                    alert('Delete Successfully..');
                }
            }
        });
    }
};
NtechAppPageMasterComponent.ctorParameters = () => [
    { type: src_app_ntech_services_ntech_setup_service__WEBPACK_IMPORTED_MODULE_3__["NtechSetupService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
NtechAppPageMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ntech-app-page-master',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-app-page-master.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-setup/ntech-app-page-maintanance/ntech-app-page-master.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_ntech_services_ntech_setup_service__WEBPACK_IMPORTED_MODULE_3__["NtechSetupService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], NtechAppPageMasterComponent);



/***/ }),

/***/ "./src/app/ntech-application-components/ntech-app-setup/ntech-app-setup-sample/ntech-app-setup.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/ntech-application-components/ntech-app-setup/ntech-app-setup-sample/ntech-app-setup.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: NtechAppSetupSampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppSetupSampleComponent", function() { return NtechAppSetupSampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NtechAppSetupSampleComponent = class NtechAppSetupSampleComponent {
};
NtechAppSetupSampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ntech-app-setup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-app-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-application-components/ntech-app-setup/ntech-app-setup-sample/ntech-app-setup.component.html")).default
    })
], NtechAppSetupSampleComponent);



/***/ }),

/***/ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage1/ntech-custompage1.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage1/ntech-custompage1.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: NtechCustomPage1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechCustomPage1Component", function() { return NtechCustomPage1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NtechCustomPage1Component = class NtechCustomPage1Component {
};
NtechCustomPage1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ntech-custompage1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-custompage1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage1/ntech-custompage1.component.html")).default
    })
], NtechCustomPage1Component);



/***/ }),

/***/ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage2/ntech-custompage2.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage2/ntech-custompage2.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: NtechCustomPage2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechCustomPage2Component", function() { return NtechCustomPage2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NtechCustomPage2Component = class NtechCustomPage2Component {
};
NtechCustomPage2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ntech-custompage2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-custompage2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage2/ntech-custompage2.component.html")).default
    })
], NtechCustomPage2Component);



/***/ }),

/***/ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage3/ntech-custompage3.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage3/ntech-custompage3.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: NtechCustomPage3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechCustomPage3Component", function() { return NtechCustomPage3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NtechCustomPage3Component = class NtechCustomPage3Component {
};
NtechCustomPage3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ntech-custompage3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-custompage3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage3/ntech-custompage3.component.html")).default
    })
], NtechCustomPage3Component);



/***/ }),

/***/ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage4/ntech-custompage4.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage4/ntech-custompage4.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: NtechCustomPage4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechCustomPage4Component", function() { return NtechCustomPage4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NtechCustomPage4Component = class NtechCustomPage4Component {
};
NtechCustomPage4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ntech-custompage4',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-custompage4.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage4/ntech-custompage4.component.html")).default
    })
], NtechCustomPage4Component);



/***/ }),

/***/ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage5/ntech-custompage5.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage5/ntech-custompage5.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: NtechCustomPage5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechCustomPage5Component", function() { return NtechCustomPage5Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NtechCustomPage5Component = class NtechCustomPage5Component {
};
NtechCustomPage5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ntech-custompage5',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ntech-custompage5.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage5/ntech-custompage5.component.html")).default
    })
], NtechCustomPage5Component);



/***/ }),

/***/ "./src/app/ntech-models/ntech_core_config_values.ts":
/*!**********************************************************!*\
  !*** ./src/app/ntech-models/ntech_core_config_values.ts ***!
  \**********************************************************/
/*! exports provided: ntech_core_config_values */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ntech_core_config_values", function() { return ntech_core_config_values; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ntech_core_config_values {
}


/***/ }),

/***/ "./src/app/ntech-models/ntech_pages.ts":
/*!*********************************************!*\
  !*** ./src/app/ntech-models/ntech_pages.ts ***!
  \*********************************************/
/*! exports provided: NtechPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechPage", function() { return NtechPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NtechPage {
}


/***/ }),

/***/ "./src/app/ntech-modules/ntech-app-setup.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ntech-modules/ntech-app-setup.module.ts ***!
  \*********************************************************/
/*! exports provided: NtechAppSetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppSetupModule", function() { return NtechAppSetupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ntech_application_components_ntech_app_setup_ntech_app_setup_sample_ntech_app_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-setup/ntech-app-setup-sample/ntech-app-setup.component */ "./src/app/ntech-application-components/ntech-app-setup/ntech-app-setup-sample/ntech-app-setup.component.ts");
/* harmony import */ var _ntech_routers_ntech_app_setup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ntech-routers/ntech-app-setup.routing.module */ "./src/app/ntech-routers/ntech-app-setup.routing.module.ts");
/* harmony import */ var _ntech_core_components_ntech_custompage_components_ntech_custompage1_ntech_custompage1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ntech-core-components/ntech-custompage-components/ntech-custompage1/ntech-custompage1.component */ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage1/ntech-custompage1.component.ts");
/* harmony import */ var _ntech_core_components_ntech_custompage_components_ntech_custompage2_ntech_custompage2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ntech-core-components/ntech-custompage-components/ntech-custompage2/ntech-custompage2.component */ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage2/ntech-custompage2.component.ts");
/* harmony import */ var _ntech_core_components_ntech_custompage_components_ntech_custompage3_ntech_custompage3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ntech-core-components/ntech-custompage-components/ntech-custompage3/ntech-custompage3.component */ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage3/ntech-custompage3.component.ts");
/* harmony import */ var _ntech_core_components_ntech_custompage_components_ntech_custompage4_ntech_custompage4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ntech-core-components/ntech-custompage-components/ntech-custompage4/ntech-custompage4.component */ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage4/ntech-custompage4.component.ts");
/* harmony import */ var _ntech_core_components_ntech_custompage_components_ntech_custompage5_ntech_custompage5_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ntech-core-components/ntech-custompage-components/ntech-custompage5/ntech-custompage5.component */ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage5/ntech-custompage5.component.ts");
/* harmony import */ var _ntech_application_components_ntech_app_setup_ntech_app_custompageaccess_ntech_app_custompageaccess_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-setup/ntech-app-custompageaccess/ntech-app-custompageaccess.component */ "./src/app/ntech-application-components/ntech-app-setup/ntech-app-custompageaccess/ntech-app-custompageaccess.component.ts");
/* harmony import */ var _ntech_application_components_ntech_app_setup_ntech_app_page_maintanance_ntech_app_page_master_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-setup/ntech-app-page-maintanance/ntech-app-page-master.component */ "./src/app/ntech-application-components/ntech-app-setup/ntech-app-page-maintanance/ntech-app-page-master.component.ts");
/* harmony import */ var _ntech_core_components_ntech_core_components_ntech_core_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ntech-core-components/ntech-core-components/ntech-core.module */ "./src/app/ntech-core-components/ntech-core-components/ntech-core.module.ts");
/* harmony import */ var _ntech_application_components_ntech_app_setup_ntech_app_corevalue_ntech_app_corevalue_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-setup/ntech-app-corevalue/ntech-app-corevalue.component */ "./src/app/ntech-application-components/ntech-app-setup/ntech-app-corevalue/ntech-app-corevalue.component.ts");
/* harmony import */ var _ntech_services_ntech_setup_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ntech-services/ntech-setup.service */ "./src/app/ntech-services/ntech-setup.service.ts");

















let NtechAppSetupModule = class NtechAppSetupModule {
};
NtechAppSetupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _ntech_core_components_ntech_core_components_ntech_core_module__WEBPACK_IMPORTED_MODULE_14__["NtechCoreComponentModule"],
            _ntech_routers_ntech_app_setup_routing_module__WEBPACK_IMPORTED_MODULE_6__["NtechAppSetupRoutingModule"]
        ],
        declarations: [
            _ntech_application_components_ntech_app_setup_ntech_app_setup_sample_ntech_app_setup_component__WEBPACK_IMPORTED_MODULE_5__["NtechAppSetupSampleComponent"],
            _ntech_core_components_ntech_custompage_components_ntech_custompage1_ntech_custompage1_component__WEBPACK_IMPORTED_MODULE_7__["NtechCustomPage1Component"],
            _ntech_core_components_ntech_custompage_components_ntech_custompage2_ntech_custompage2_component__WEBPACK_IMPORTED_MODULE_8__["NtechCustomPage2Component"],
            _ntech_core_components_ntech_custompage_components_ntech_custompage3_ntech_custompage3_component__WEBPACK_IMPORTED_MODULE_9__["NtechCustomPage3Component"],
            _ntech_core_components_ntech_custompage_components_ntech_custompage4_ntech_custompage4_component__WEBPACK_IMPORTED_MODULE_10__["NtechCustomPage4Component"],
            _ntech_core_components_ntech_custompage_components_ntech_custompage5_ntech_custompage5_component__WEBPACK_IMPORTED_MODULE_11__["NtechCustomPage5Component"],
            _ntech_application_components_ntech_app_setup_ntech_app_custompageaccess_ntech_app_custompageaccess_component__WEBPACK_IMPORTED_MODULE_12__["NtechAppCustomPageAccessComponent"],
            _ntech_application_components_ntech_app_setup_ntech_app_corevalue_ntech_app_corevalue_component__WEBPACK_IMPORTED_MODULE_15__["NtechAppCoreValueComponent"],
            _ntech_application_components_ntech_app_setup_ntech_app_page_maintanance_ntech_app_page_master_component__WEBPACK_IMPORTED_MODULE_13__["NtechAppPageMasterComponent"]
        ],
        exports: [
            _ntech_application_components_ntech_app_setup_ntech_app_setup_sample_ntech_app_setup_component__WEBPACK_IMPORTED_MODULE_5__["NtechAppSetupSampleComponent"],
            _ntech_core_components_ntech_custompage_components_ntech_custompage1_ntech_custompage1_component__WEBPACK_IMPORTED_MODULE_7__["NtechCustomPage1Component"],
            _ntech_core_components_ntech_custompage_components_ntech_custompage2_ntech_custompage2_component__WEBPACK_IMPORTED_MODULE_8__["NtechCustomPage2Component"],
            _ntech_core_components_ntech_custompage_components_ntech_custompage3_ntech_custompage3_component__WEBPACK_IMPORTED_MODULE_9__["NtechCustomPage3Component"],
            _ntech_core_components_ntech_custompage_components_ntech_custompage4_ntech_custompage4_component__WEBPACK_IMPORTED_MODULE_10__["NtechCustomPage4Component"],
            _ntech_core_components_ntech_custompage_components_ntech_custompage5_ntech_custompage5_component__WEBPACK_IMPORTED_MODULE_11__["NtechCustomPage5Component"],
            _ntech_application_components_ntech_app_setup_ntech_app_custompageaccess_ntech_app_custompageaccess_component__WEBPACK_IMPORTED_MODULE_12__["NtechAppCustomPageAccessComponent"]
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }, _ntech_services_ntech_setup_service__WEBPACK_IMPORTED_MODULE_16__["NtechSetupService"]]
    })
], NtechAppSetupModule);



/***/ }),

/***/ "./src/app/ntech-routers/ntech-app-setup.routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ntech-routers/ntech-app-setup.routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NtechAppSetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppSetupRoutingModule", function() { return NtechAppSetupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ntech_application_components_ntech_app_setup_ntech_app_setup_sample_ntech_app_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-setup/ntech-app-setup-sample/ntech-app-setup.component */ "./src/app/ntech-application-components/ntech-app-setup/ntech-app-setup-sample/ntech-app-setup.component.ts");
/* harmony import */ var _ntech_core_components_ntech_custompage_components_ntech_custompage5_ntech_custompage5_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ntech-core-components/ntech-custompage-components/ntech-custompage5/ntech-custompage5.component */ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage5/ntech-custompage5.component.ts");
/* harmony import */ var _ntech_core_components_ntech_custompage_components_ntech_custompage1_ntech_custompage1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ntech-core-components/ntech-custompage-components/ntech-custompage1/ntech-custompage1.component */ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage1/ntech-custompage1.component.ts");
/* harmony import */ var _ntech_core_components_ntech_custompage_components_ntech_custompage2_ntech_custompage2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ntech-core-components/ntech-custompage-components/ntech-custompage2/ntech-custompage2.component */ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage2/ntech-custompage2.component.ts");
/* harmony import */ var _ntech_core_components_ntech_custompage_components_ntech_custompage3_ntech_custompage3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ntech-core-components/ntech-custompage-components/ntech-custompage3/ntech-custompage3.component */ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage3/ntech-custompage3.component.ts");
/* harmony import */ var _ntech_core_components_ntech_custompage_components_ntech_custompage4_ntech_custompage4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ntech-core-components/ntech-custompage-components/ntech-custompage4/ntech-custompage4.component */ "./src/app/ntech-core-components/ntech-custompage-components/ntech-custompage4/ntech-custompage4.component.ts");
/* harmony import */ var _ntech_application_components_ntech_app_setup_ntech_app_custompageaccess_ntech_app_custompageaccess_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-setup/ntech-app-custompageaccess/ntech-app-custompageaccess.component */ "./src/app/ntech-application-components/ntech-app-setup/ntech-app-custompageaccess/ntech-app-custompageaccess.component.ts");
/* harmony import */ var _ntech_application_components_ntech_app_setup_ntech_app_page_maintanance_ntech_app_page_master_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-setup/ntech-app-page-maintanance/ntech-app-page-master.component */ "./src/app/ntech-application-components/ntech-app-setup/ntech-app-page-maintanance/ntech-app-page-master.component.ts");
/* harmony import */ var _ntech_application_components_ntech_app_setup_ntech_app_corevalue_ntech_app_corevalue_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ntech-application-components/ntech-app-setup/ntech-app-corevalue/ntech-app-corevalue.component */ "./src/app/ntech-application-components/ntech-app-setup/ntech-app-corevalue/ntech-app-corevalue.component.ts");












const routes = [
    { path: 'ntsetup', component: _ntech_application_components_ntech_app_setup_ntech_app_setup_sample_ntech_app_setup_component__WEBPACK_IMPORTED_MODULE_3__["NtechAppSetupSampleComponent"] },
    { path: 'ntappcuspage', component: _ntech_application_components_ntech_app_setup_ntech_app_custompageaccess_ntech_app_custompageaccess_component__WEBPACK_IMPORTED_MODULE_9__["NtechAppCustomPageAccessComponent"] },
    { path: 'ntapppagemaster', component: _ntech_application_components_ntech_app_setup_ntech_app_page_maintanance_ntech_app_page_master_component__WEBPACK_IMPORTED_MODULE_10__["NtechAppPageMasterComponent"] },
    { path: 'ntcuspage1', component: _ntech_core_components_ntech_custompage_components_ntech_custompage1_ntech_custompage1_component__WEBPACK_IMPORTED_MODULE_5__["NtechCustomPage1Component"] },
    { path: 'ntcuspage2', component: _ntech_core_components_ntech_custompage_components_ntech_custompage2_ntech_custompage2_component__WEBPACK_IMPORTED_MODULE_6__["NtechCustomPage2Component"] },
    { path: 'ntcuspage3', component: _ntech_core_components_ntech_custompage_components_ntech_custompage3_ntech_custompage3_component__WEBPACK_IMPORTED_MODULE_7__["NtechCustomPage3Component"] },
    { path: 'ntcuspage4', component: _ntech_core_components_ntech_custompage_components_ntech_custompage4_ntech_custompage4_component__WEBPACK_IMPORTED_MODULE_8__["NtechCustomPage4Component"] },
    { path: 'ntcuspage5', component: _ntech_core_components_ntech_custompage_components_ntech_custompage5_ntech_custompage5_component__WEBPACK_IMPORTED_MODULE_4__["NtechCustomPage5Component"] },
    { path: 'ntcoreval', component: _ntech_application_components_ntech_app_setup_ntech_app_corevalue_ntech_app_corevalue_component__WEBPACK_IMPORTED_MODULE_11__["NtechAppCoreValueComponent"] },
];
let NtechAppSetupRoutingModule = class NtechAppSetupRoutingModule {
};
NtechAppSetupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], NtechAppSetupRoutingModule);



/***/ })

}]);