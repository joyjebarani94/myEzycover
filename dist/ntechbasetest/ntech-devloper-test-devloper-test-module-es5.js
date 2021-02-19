(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ntech-devloper-test-devloper-test-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-devloper-test/demo1/demo1.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-devloper-test/demo1/demo1.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNtechDevloperTestDemo1Demo1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    Hi this is my first sample page\r\n </div>";
    /***/
  },

  /***/
  "./src/app/ntech-devloper-test/demo1/demo1.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ntech-devloper-test/demo1/demo1.component.ts ***!
    \**************************************************************/

  /*! exports provided: Demo1 */

  /***/
  function srcAppNtechDevloperTestDemo1Demo1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Demo1", function () {
      return Demo1;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let Demo1 = class Demo1 {};
    Demo1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-demo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./demo1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ntech-devloper-test/demo1/demo1.component.html")).default
    })], Demo1);
    /***/
  },

  /***/
  "./src/app/ntech-devloper-test/devloper-test.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ntech-devloper-test/devloper-test.module.ts ***!
    \*************************************************************/

  /*! exports provided: DevloperTestModule */

  /***/
  function srcAppNtechDevloperTestDevloperTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevloperTestModule", function () {
      return DevloperTestModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ntech_core_components_ntech_core_components_ntech_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ntech-core-components/ntech-core-components/ntech-core.module */
    "./src/app/ntech-core-components/ntech-core-components/ntech-core.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _demo1_demo1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./demo1/demo1.component */
    "./src/app/ntech-devloper-test/demo1/demo1.component.ts");
    /* harmony import */


    var _devloper_test_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./devloper-test.routing.module */
    "./src/app/ntech-devloper-test/devloper-test.routing.module.ts");

    let DevloperTestModule = class DevloperTestModule {};
    DevloperTestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ntech_core_components_ntech_core_components_ntech_core_module__WEBPACK_IMPORTED_MODULE_1__["NtechCoreComponentModule"], _devloper_test_routing_module__WEBPACK_IMPORTED_MODULE_4__["DevloperTestRoutingModule"]],
      exports: [],
      declarations: [_demo1_demo1_component__WEBPACK_IMPORTED_MODULE_3__["Demo1"]],
      providers: []
    })], DevloperTestModule);
    /***/
  },

  /***/
  "./src/app/ntech-devloper-test/devloper-test.routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ntech-devloper-test/devloper-test.routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DevloperTestRoutingModule */

  /***/
  function srcAppNtechDevloperTestDevloperTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevloperTestRoutingModule", function () {
      return DevloperTestRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _demo1_demo1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./demo1/demo1.component */
    "./src/app/ntech-devloper-test/demo1/demo1.component.ts");

    const routes = [{
      path: 'demo1',
      component: _demo1_demo1_component__WEBPACK_IMPORTED_MODULE_3__["Demo1"]
    }];
    let DevloperTestRoutingModule = class DevloperTestRoutingModule {};
    DevloperTestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DevloperTestRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=ntech-devloper-test-devloper-test-module-es5.js.map