(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ntech-modules-ntech-app-main-module"],{

/***/ "./src/app/ntech-modules/ntech-app-main.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ntech-modules/ntech-app-main.module.ts ***!
  \********************************************************/
/*! exports provided: NtechAppMainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtechAppMainModule", function() { return NtechAppMainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ntech_app_admin_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ntech-app-admin.module */ "./src/app/ntech-modules/ntech-app-admin.module.ts");
/* harmony import */ var _ntech_app_setup_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ntech-app-setup.module */ "./src/app/ntech-modules/ntech-app-setup.module.ts");
/* harmony import */ var _ntech_app_collection_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ntech-app-collection.module */ "./src/app/ntech-modules/ntech-app-collection.module.ts");
/* harmony import */ var _ntech_app_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ntech-app-dashboard.module */ "./src/app/ntech-modules/ntech-app-dashboard.module.ts");
/* harmony import */ var _ntech_app_vendor_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ntech-app-vendor.module */ "./src/app/ntech-modules/ntech-app-vendor.module.ts");
/* harmony import */ var _ntech_routers_ntech_lazy_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ntech-routers/ntech-lazy.routing.module */ "./src/app/ntech-routers/ntech-lazy.routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let NtechAppMainModule = class NtechAppMainModule {
};
NtechAppMainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ntech_routers_ntech_lazy_routing_module__WEBPACK_IMPORTED_MODULE_7__["NtechLazyRoutingModule"],
            _ntech_app_admin_module__WEBPACK_IMPORTED_MODULE_2__["NtechAppAdminModule"],
            _ntech_app_setup_module__WEBPACK_IMPORTED_MODULE_3__["NtechAppSetupModule"],
            _ntech_app_collection_module__WEBPACK_IMPORTED_MODULE_4__["NtechAppCollectionModule"],
            _ntech_app_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["NtechAppDashboardModule"],
            _ntech_app_vendor_module__WEBPACK_IMPORTED_MODULE_6__["NtechAppVendorModule"]
        ],
        declarations: [],
        exports: [
            _ntech_app_admin_module__WEBPACK_IMPORTED_MODULE_2__["NtechAppAdminModule"],
            _ntech_app_setup_module__WEBPACK_IMPORTED_MODULE_3__["NtechAppSetupModule"],
            _ntech_app_collection_module__WEBPACK_IMPORTED_MODULE_4__["NtechAppCollectionModule"],
            _ntech_app_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["NtechAppDashboardModule"],
            _ntech_app_vendor_module__WEBPACK_IMPORTED_MODULE_6__["NtechAppVendorModule"]
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }
        ]
    })
], NtechAppMainModule);



/***/ })

}]);