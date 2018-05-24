webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomOption */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CustomOption = /** @class */ (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight';
        _this.newestOnTop = true;
        _this.showCloseButton = true;
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_8_ng2_toastr__["ToastOptions"]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__["a" /* HomepageComponent */] },
                    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
                ]),
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_8_ng2_toastr__["ToastOptions"], useClass: CustomOption }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".selected{\n  border-bottom-width: 1px;\n  border-color: white;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  /*background: url(./../../assets/img/caret.png) no-repeat 95% #fff;*/\n  border-bottom-color: #e2e2e2;\n}\n.selected:focus{\n  border-bottom-width: 1px;\n  border-color: white;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-bottom-color: #e2e2e2;\n}\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n}\n/*NAVBAR*/\n.navbar-default{\n  background-color: transparent;\n  border-color: transparent;\n  border: none;\n  font-weight: 100;\n  font-size: 0.8em;\n\n}\n.navbar-default .navbar-nav .l{\n\n  border-right: 1px #C5C8C9 solid;\n  height: 40px;\n}\n.navbar-default .navbar-nav li a {\n  color: #FFFFFF;\n}\n.navbar-nav{\n  color: #FFFFFF;\n  padding-top: 20px;\n}\n.logo2 img{\n  height: 90px;\n  width: 65px;\n}\n.s p{\n  line-height: 0;\n  font-weight: 100;\n  font-size: 0.8em;\n}\n.s h4{\n  font-weight: 100;\n  font-size: 0.9em;\n}\n.hamburger {\n  height: 30px;\n  margin: 26px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: (1fr)[3];\n      grid-template-rows: repeat(3, 1fr);\n  justify-items: center;\n  z-index: 120;\n}\n.hamburger div {\n  background-color: rgb(255, 255, 255);\n  position: relative;\n  width: 40px;\n  height: 2px;\n  margin-top: 7px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n#toggle {\n  display: none;\n}\n#toggle:checked + .hamburger .top {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  margin-top: 22.5px;\n}\n#toggle:checked + .hamburger .meat {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  margin-top: -5px;\n}\n#toggle:checked + .hamburger .bottom {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n#toggle:checked ~ .menu {\n  height: 480px;\n}\n.navigation {\n  display: none;\n}\na{\n  cursor: pointer;\n}\n/* Menu */\n.menu {\n  width: 100%;\n  background-color: #067df4;\n  /*opacity: 0.9;*/\n  margin: 0;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr (0.5fr)[4];\n      grid-template-rows: 1fr repeat(4, 0.5fr);\n  grid-row-gap: 25px;\n  padding: 0;\n  list-style: none;\n  clear: both;\n  width: auto;\n  text-align: center;\n  height: 0px;\n  overflow: hidden;\n  -webkit-transition: height 0.4s ease;\n  transition: height 0.4s ease;\n  z-index: 120;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\na:focus, a:hover {\n  text-decoration: none !important;\n}\n.menu a{\n  color: #FFFFFF;\n}\n.menu a:first-child {\n  margin-top: 58px;\n}\n.link {\n  width: 100%;\n  margin: 0;\n  /*padding: 10px 0;*/\n  font: 700 20px \"Oswald\", sans-serif;\n}\n/*NAVBAR-ENDS*/\n/*HOME*/\n#home{\n  background: url('background-dashboard.3718adcb8c2a416e241c.png');\n  /*height: -webkit-fill-available;*/\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  padding-top: 250px;\n  padding-bottom: 250px;\n}\n#home p{\n  margin-top: -145px;\n  color: #CAD3D3;\n}\n/*HOME-ENDS*/\n#route .first-row p{\n  color: #878787;\n  font-size: 0.9em;\n  font-weight: 400;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n#route .first-row {\n  background-color: #EDF2F5;\n  padding-bottom: 20px;\n  margin-top: -91px;\n}\n#route .second-row p{\n  color: #878787;\n  font-size: 0.9em;\n  font-weight: 400;\n  margin-top: 30px;\n\n}\n.selectpicker{\n  border: none;\n  background: transparent;\n  padding-left: 0px;\n  background-color: #edf2f5 !important;\n  border-color: #edf2f5 !important;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  outline: none !important;\n}\n.open{\n  background-color: #EDF2F5;\n}\n.datpiker1{\n  background-color: transparent;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  margin-left: -28px;\n  padding: 0px;\n  width:100%;\n}\n.datpiker2{\n  background-color: transparent;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  position: absolute;\n  margin-left: -50px;\n  padding: 0px;\n  width:100%;\n}\n.pickers{\n  padding: 0;\n}\n#route .dash{\n  position: absolute;\n  margin-left: -46px;\n  margin-top: 6px;\n}\n.datpiker1:focus{\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.datpiker2:focus{\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.fa{\n  position: absolute;\n  margin-left: -50px;\n  margin-top: 9px;\n\n}\n.last-para{\n  margin-left: -27px;\n}\n.radio-button{\n  padding: 0px;\n}\n.last{\n  margin-top: 20px;\n}\n.advance{\n  margin-top: 40px;\n}\n.btn1 {\n  margin-top: 50px;\n  padding-right: 40px;\n  padding-left: 40px;\n  background-color: #014FA2;\n  border-radius: 20px;\n  border: none;\n}\n/*.btn .dropdown-toggle .selectpicker .btn-default{*/\n/*<!--border: none;-->*/\n/*<!--border-bottom: 1px solid red;-->*/\n/*<!--!* border-color: transparent; *!-->*/\n/*<!--background-color: transparent;*/\n/*<!--border-radius: 0;*/\n/*}*/\n/*ROUTE-ENDS*/\n/*body section css*/\n.head{\n  letter-spacing: 2px;\n  font-size: 2em;\n  margin-top: 20px;\n  font-weight: 200;\n\n}\n.head-link-tab1{\n  color: #014FA2;\n  text-decoration: none;\n\n}\n.head-link-tab{\n  text-decoration: none;\n  color: #DDDDDD;\n}\n.schedule-row1{\n  -webkit-box-shadow: 0 5px 32px 0 rgba(0,0,0,.1);\n          box-shadow: 0 5px 32px 0 rgba(0,0,0,.1);\n  margin-top: 30px;\n}\n.row1-2nd-dive{\n  padding-top: 13px;\n}\n.row1-3rd-dive{\n  padding-top: 13px;\n}\na:hover {\n  text-decoration: none;\n}\n.schedule-sub-row1{\n  font-size: 1.5em;\n  color: #014FA2;\n}\n.btn-upcomming{\n  margin-top: 2%;\n  position: absolute;\n  margin-left: 8px;\n  padding-left: 10px;\n  padding-top: 5px;\n  font-size: 0.4em;\n  color: #ffffff;\n  background-color: #8CC634;\n  border-radius: 20px;\n  border: none;\n  padding-right: 10px;\n}\n.schedule-row2-text{\n  color: #DDDDDD;\n}\n.schedule-row2-span{\n  color: #7D7B7B;\n}\n.schedule-row3-text{\n  color: #DDDDDD;\n}\n.schedule-row3-span{\n  color: #014FA2;\n}\n.schedule-row4-text{\n  margin-top: 25px;\n  color: #B5B5B5;\n}\n.icon-wifi{\n  color: #B5B5B5;\n}\n.schedule-departure{\n  margin-top: -7px;\n  color: #9C9C9E;\n}\n.social-icon{\n  margin-left: 8px;\n  color: #DDDDDD;\n}\n.schedule-boston{\n  font-weight: 200;\n  font-size: 1.2em;\n  color: #2C4558;\n  letter-spacing: 1px;\n  margin-top: -6px;\n}\n.schedule-date{\n  font-size: 0.7em;\n  margin-top: -7px;\n  color: #9D9D9D;\n}\n.london{\n  margin-top: 30px;\n}\n/*body section css*/\n@media (max-width:768px) {\n  #add{\n    text-align: center;\n  }\n  .second-row{\n    text-align: center;\n  }\n\n  .logo img {\n    margin-left: 10px;\n  }\n\n  #navbar {\n    display: block;\n  }\n  .navbar-toggle {\n    margin-top: 20px;\n    margin-right: 15px;\n  }\n\n  .navbar-default .navbar-nav .l {\n    display: none;\n  }\n\n  #home .btn1 {\n    padding-right: 25px;\n    padding-left: 25px;\n  }\n\n  #home .btn2 {\n    padding-right: 20px;\n    padding-left: 20px;\n  }\n  .city-picker1{\n    width: 45%;\n    padding: 0;\n    margin-left: 5%;\n  }\n  .city-picker2{\n    width: 50%;\n    padding: 0;\n  }\n  .last-part{\n    padding-left: 135px;\n  }\n  .selectpicker{\n    text-align: center;\n  }\n  .first-part{\n    text-align: center;\n  }\n  .first-part p{\n    text-align: center;\n  }\n  .last-part p{\n    margin-left: 20px;\n  }\n\n  .bootstrap-select{\n    width: 90% !important;\n  }\n\n\n\n}\n@media (min-width: 767px) and (max-width: 769px) {\n  .first-part{\n    margin-left: 55px;\n  }\n  .first-part p{\n    margin-left: -155px;\n  }\n\n  .last-part{\n    padding-left: 285px;\n  }\n  /*.first-part p{*/\n  /*margin-left: -130px;*/\n  /*}*/\n  .last-part p{\n    margin-left: 25px;\n  }\n  #route .first-row{\n    margin-top: -6.5px;\n  }\n}\n@media (min-width: 1023px) and (max-width: 1025px) {\n\n\n  #route .first-row{\n    margin-top: -103px;\n  }\n\n}\n@media (max-width:400px){\n\n  #sideBarToggle{\n    display: block !important;\n  }\n\n\n  .hamburger{\n    margin-right: 35px;\n    margin-top: 20px;\n  }\n}\n@media (min-width: 768px) {\n  .hamburger{\n    display: none;\n  }\n  .menu a{\n    padding-bottom: 100px;\n  }\n\n}\n/*media query of tablet*/\n@media(min-width: 777px) and (max-width: 992px){\n  .row1-2nd-dive {\n    margin-left: 105px;\n    padding-top: 13px;\n  }\n\n  .schedule-sub-row1 {\n    font-size: 1em;\n    color: #014FA2;\n  }\n  .schedule-boston {\n    font-weight: 200;\n    font-size: 1em;\n    color: #2C4558;\n    letter-spacing: 1px;\n    margin-top: -6px;\n  }\n  .schedule-date {\n    font-size: 0.5em;\n    margin-top: -7px;\n    color: #9D9D9D;\n\n  }\n\n}\n@media(min-width: 992px) and (max-width: 1199px){\n  .row1-2nd-dive {\n    margin-left: 40px;\n    padding-top: 13px;\n  }\n\n\n\n  .row1-3rd-dive {\n    margin-left: 100px;\n    padding-top: 13px;\n  }\n\n}\n/*media query of tablet*/\n/*media query of mobile start*/\n@media(max-width: 768px) {\n  .img-row1{\n    display: none;\n  }\n\n  .schedule-sub-row1 {\n    width: 130%;\n    font-size: 0.9em;\n    color: #014FA2;\n  }\n\n\n  .schedule-row2-text {\n    font-size: 0.7em;\n    color: #DDDDDD;\n  }\n\n  .schedule-row3-text {\n    font-size: 0.6em;\n    color: #DDDDDD;\n  }\n\n  .plan-img{\n    width: 20px;\n    height: auto;\n  }\n\n  .schedule-departure {\n    font-size: 0.6em;\n    margin-top: -7px;\n    color: #9C9C9E;\n  }\n\n  .schedule-boston {\n    font-weight: 200;\n    font-size: 0.7em;\n    color: #2C4558;\n    letter-spacing: 1px;\n    margin-top: -6px;\n  }\n\n  .schedule-date {\n    font-size: 0.5em;\n    margin-top: -7px;\n    color: #9D9D9D;\n  }\n\n\n  .london {\n    margin-top: 18px;\n  }\n\n  .btn-upcomming {\n    margin-top: 1px;\n    margin-left: 8px;\n    padding-left: 10px;\n    padding-top: 4px;\n    font-size: 0.5em;\n    color: #ffffff;\n    background-color: #8CC634;\n    border-radius: 20px;\n    border: none;\n    padding-right: 10px;\n  }\n\n  .americanAirLine{\n    width: 85px;\n    height: auto;\n  }\n\n\n  .row1-2nd-dive {\n    padding-top: 25px;\n  }\n\n  .head {\n    margin-left: 30px;\n    letter-spacing: 1px;\n    font-size: 1em;\n    margin-top: 20px;\n    font-weight: 200;\n  }\n\n\n  .head-link-tab1 {\n    margin-left: 30px;\n    font-size: 0.7em;\n    color: #014FA2;\n    text-decoration: none;\n  }\n\n\n\n  .head-link-tab {\n    font-size: 0.7em;\n    text-decoration: none;\n    color: #DDDDDD;\n  }\n\n  .schedule-row1 {\n    -webkit-box-shadow: 0 5px 32px 0 rgba(0,0,0,.1);\n            box-shadow: 0 5px 32px 0 rgba(0,0,0,.1);\n    margin-top: 15px;\n  }\n\n\n}\n/*media query of mobile end*/\n.box-shadow{\n  -webkit-box-shadow: 0 5px 32px 0 rgba(0,0,0,.1);\n          box-shadow: 0 5px 32px 0 rgba(0,0,0,.1);\n  padding-bottom: 2%;\n}\n#route{\n  margin-bottom: 5%;\n}\n#allDiv:last-child{\n  margin-bottom: 50px;\n}\n.open{\n  background-color: transparent;\n}\n/*******************************\n* MODAL AS LEFT/RIGHT SIDEBAR\n* Add \"left\" or \"right\" in modal parent div, after class=\"modal\".\n* Get free snippets on bootpen.com\n*******************************/\n.modal.left .modal-dialog,\n.modal.right .modal-dialog {\n  position: fixed;\n  margin: auto;\n  width: 320px;\n  height: 100%;\n  -webkit-transform: translate3d(0%, 0, 0);\n  transform: translate3d(0%, 0, 0);\n}\n.modal.left .modal-content,\n.modal.right .modal-content {\n  height: 100%;\n  overflow-y: auto;\n}\n.modal.left .modal-body,\n.modal.right .modal-body {\n  padding: 15px 15px 80px;\n}\n/*Left*/\n.modal.left.fade .modal-dialog{\n  left: -320px;\n  -webkit-transition: opacity 0.3s linear, left 0.3s ease-out;\n  transition: opacity 0.3s linear, left 0.3s ease-out;\n}\n.modal.left.fade.in .modal-dialog{\n  left: 0;\n}\n/*Right*/\n.modal.right.fade .modal-dialog {\n  right: -320px;\n  -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;\n  transition: opacity 0.3s linear, right 0.3s ease-out;\n}\n.modal.right.fade.in .modal-dialog {\n  right: 0;\n}\n/* ----- MODAL STYLE ----- */\n.modal-content {\n  border-radius: 0;\n  border: none;\n}\n.modal-header {\n  border-bottom-color: #EEEEEE;\n  background-color: #FAFAFA;\n}\n/* ----- v CAN BE DELETED v ----- */\nbody {\n  background-color: #78909C;\n}\n.demo {\n  padding-top: 60px;\n  padding-bottom: 110px;\n}\n.btn-demo {\n  margin: 15px;\n  padding: 10px 15px;\n  border-radius: 0;\n  font-size: 16px;\n  background-color: #FFFFFF;\n}\n.btn-demo:focus {\n  outline: 0;\n}\n.demo-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  background-color: #212121;\n  text-align: center;\n}\n.demo-footer > a {\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #fff;\n}\n.sideBarCloseBtn:focus {\n  outline: none !important;\n}\n.selectError{\n  border-bottom: 1px solid red;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"navbar navbar-default navbar-fixed-top\" id=\"navbar\" role=\"navigation\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <div class=\"logo2\">\n        <img class=\"img-responsive\" src=\"./../../assets/img/logo2.png\"/>\n      </div>\n    </a>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-right n\">\n        <li>\n          <a href=\"#about\">ABOUT</a>\n        </li>\n        <li>\n          <a href=\"#blog \">BLOG</a>\n        </li>\n        <li class=\"l\">\n          <div></div>\n        </li>\n        <li>\n\n\n          <div  class=\"row s\" data-toggle=\"dropdown\">\n            <div class=\"col-md-offset-1 col-md-2 i \">\n              <img style=\"height: 30px; width: auto;\" src=\"{{_imageUrl}}\"/>\n            </div>\n\n\n            <div class=\"col-md-offset-1 col-md-8\">\n              <h4>\n                {{_firstName}} {{_lastName}}\n              </h4>\n              <p>\n                {{_username}}\n                <!--<img style=\"float: right; margin-top: -10%;\" src=\"./../../assets/img/expand-arow.png\"/>-->\n              </p>\n\n            </div>\n            <div class=\"col-md-1\">\n\n            </div>\n\n          </div>\n          <ul class=\"dropdown-menu\">\n            <li><a style=\"color: #5280C6;\" (click)=\"gotoHome();\">Home</a></li>\n            <li><a style=\"color: #5280C6;\" (click)=\"logout();\" >Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n\n\n\n\n    <i class=\"fa fa-bars\" id=\"sideBarToggle\" data-toggle=\"modal\" data-target=\"#myModal2\" style=\"float: right;\n    font-size: 2.5em;\n    color: white;\n    margin-top: 8%;\n    position: relative;\n    display: none;\n    margin-right: 5%;\" aria-hidden=\"true\"></i>\n\n\n\n    <!-- Modal -->\n    <div class=\"modal right fade\" id=\"myModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\" style=\"    margin-left: 30%;     color: white;\n    font-size: 1.5em;   background-color: #5487c2;\" >\n\n          <div class=\"modal-header\" style=\"    background-color: #5487c2; border-bottom-color: #5487c2; \">\n\n\n\n            <button type=\"button\" class=\"close sideBarCloseBtn\"  data-dismiss=\"modal\" style=\"    color: white;\n    opacity: 1;\n\n    font-size: 1.5em;\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\" id=\"myModalLabel2\"></h4>\n          </div>\n\n          <div class=\"modal-body\" style=\"height: 90vh;\">\n\n            <div style=\"cursor:pointer; margin-bottom: 10%;\" (click)=\"gotoHome();\"><span>Home</span><i class=\"fa fa-home\" style=\"float: right;\n     margin-top: 0;\n    position: relative;\" aria-hidden=\"true\"></i></div>\n            <div style=\"cursor:pointer;margin-bottom: 10%;\"><span>Blog</span><i class=\"fa fa-rss\" style=\"float: right;\n     margin-top: 0;\n    position: relative;\" aria-hidden=\"true\"></i></div>\n\n            <div (click)=\"logout();\"  style=\"cursor:pointer; margin-top: 30%;\"><span>Logout</span><i class=\"fa fa-sign-out\" style=\"\n     margin-top: 0;\n    position: relative;float: right;\" aria-hidden=\"true\"></i></div>\n\n          </div>\n\n        </div><!-- modal-content -->\n      </div><!-- modal-dialog -->\n    </div><!-- modal -->\n\n\n\n    <!--<input id=\"toggle\" type=\"checkbox\" />-->\n    <!--<label class=\"hamburger\" for=\"toggle\" style=\"width: 5%; float: right;\">-->\n      <!--<div class=\"top\"></div>-->\n      <!--<div class=\"meat\"></div>-->\n      <!--<div class=\"bottom\"></div>-->\n    <!--</label>-->\n\n    <!--<nav class=\"menu\">-->\n      <!--<a class=\"link\">About</a>-->\n      <!--<a class=\"link\">Blog</a>-->\n      <!--<a class=\"link\">Profile</a>-->\n      <!--<a class=\"link\">Dashboard</a>-->\n      <!--<a class=\"link\">Logout</a>-->\n      <!--<a></a>-->\n    <!--</nav>-->\n  </div>\n</div>\n\n\n\n<!--NAVBAR-ENDS-->\n\n<!--HOME-->\n\n<section id=\"home\">\n\n  <div class=\"container\">\n\n  </div>\n\n</section>\n\n<!--HOME-ENDS-->\n\n<!--ROUTE-->\n\n<section id=\"route\">\n  <div class=\"container box-shadow\">\n\n    <div class=\"row first-row\">\n      <div class=\"col-md-3 col-sm-12 col-xs-12 first-part\">\n        <p>Choose way</p>\n        <div class=\"row\">\n          <div class=\"col-md-5 col-sm-4 col-xs-6\">\n            <label class=\"radio-inline\">\n              <input type=\"radio\" value='oneway'  id=\"oneway\" [(ngModel)]=\"tripType\" name=\"optradio\">One way\n            </label>\n          </div>\n          <div class=\"col-md-5 col-sm-offset-1 col-sm-4 col-xs-6 radio-button\">\n            <label class=\"radio-inline\">\n              <input type=\"radio\" value='round' [(ngModel)]=\"tripType\" name=\"optradio\">Round trip\n            </label>\n          </div>\n        </div>\n\n\n\n\n      </div>\n      <div class=\"col-md-3 col-sm-6 col-xs-6 city-picker1\">\n        <p>From</p>\n        <select  class=\"selectpicker\" id=\"from\" data-live-search=\"true\">\n\n            <option *ngFor=\"let airport of airportDate\" value=\"{{airport.code}}\">{{airport.city}}</option>\n\n\n          <!--<option value=\"BOS\">Boston</option>-->\n          <!--<option value=\"ALA\">Alaska </option>-->\n          <!--<option value=\"ARI\">Arizona </option>-->\n          <!--<option value=\"ARK\">Arkansas </option>-->\n          <!--<option value=\"CA\">California </option>-->\n          <!--<option value=\"COL\">Colorado </option>-->\n          <!--<option value=\"CON\">Connecticut </option>-->\n          <!--<option value=\"DEL\" >Delaware </option>-->\n          <!--<option value=\"FLO\">Florida </option>-->\n        </select>\n      </div>\n      <div class=\"col-md-3  col-sm-6 col-xs-6 city-picker2\">\n        <p>To</p>\n        <select class=\"selectpicker\" id=\"to\" data-live-search=\"true\">\n          <option *ngFor=\"let airport of airportDate\" value=\"{{airport.code}}\">{{airport.city}}</option>\n\n\n\n\n\n\n        </select>\n      </div>\n      <div class=\"col-md-3 col-sm-12 col-xs-12 last-part\">\n        <p class=\"last-para\">Date - Return</p>\n        <div class=\"input-group date\" data-provide=\"datepicker\">\n          <div class=\"col-md-4 col-sm-4 col-xs-4 pickers\" id=\"datepickerTo\">\n            <input type=\"text\" name=\"birthday\" id=\"fromDate\" value=\"10/24/1984\" class=\"form-control datpiker1\" />\n          </div>\n          <div class=\"col-md-1 col-sm-1 col-xs-1\" id=\"datepickerDash\">\n            <span class=\"dash\">-</span>\n          </div>\n          <div class=\"col-md-4 col-sm-4 col-xs-4 pickers\" id=\"datepickerReturn\">\n            <input type=\"text\" name=\"birthday1\" id=\"toDate\"  value=\"10/24/1984\" class=\"form-control datpiker2\" />\n          </div>\n          <div>\n            <i class=\"fa fa-calendar fa-1x\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"row second-row\">\n      <div class=\"col-md-3\">\n        <p>Adults</p>\n        <select [(ngModel)]=\"adults\" class=\"form-control selected\" id=\"sel1\">\n          <option value=\"\" hidden>Select Adults</option>\n          <option>1</option>\n          <option>2</option>\n          <option>3</option>\n          <option>4</option>\n        </select>\n      </div>\n      <div class=\"col-md-3\">\n        <p>Send every</p>\n        <select [(ngModel)]=\"sendEvery\" class=\"form-control selected\" id=\"sel2\">\n          <option value=\"\" hidden>Select Day</option>\n          <option>Daily</option>\n          <option>Monday</option>\n          <option>Tuesday</option>\n          <option>Wednesday</option>\n          <option>Thursday</option>\n          <option>Friday</option>\n          <option>Saturday</option>\n          <option>Sunday</option>\n          <option>Weekend</option>\n          <option>Weekly</option>\n        </select>\n\n\n\n      </div>\n      <div class=\"col-md-3 advance\">\n        <u>\n          <p id=\"advanced\" (click)=\"showHideAdvance();\">Advanced</p>\n        </u>\n      </div>\n\n\n\n      <div class=\"col-md-3\">\n        <button type=\"button\" id=\"btnSave1\"  (click)=\"save()\" class=\"btn btn-primary btn1\">Save alert</button>\n      </div>\n\n\n\n\n\n\n    </div>\n\n\n\n    <div class=\"row last animated slideInDown\" id=\"add\" style=\"display: none;\">\n      <div class=\"col-md-2 \">\n        <input type=\"radio\" value=\"class\" name=\"optradio2\" style=\"margin-top: 8%;\" id=\"radioClass\">\n        <select [(ngModel)]=\"class\" class=\"form-control selected\" id=\"selectClass\" style=\"width:90%; float: right;\">\n          <option value=\"\" hidden>Select Class</option>\n          <option>Economy Class</option>\n          <option>Premium Class</option>\n          <option>Business Class</option>\n          <option>First Class</option>\n        </select>\n      </div>\n      <div class=\"col-md-2 col-md-offset-1 \">\n        <input type=\"radio\" value=\"connections\" name=\"optradio2\" style=\"margin-top: 8%;\" id=\"radioConnections\">\n        <select [(ngModel)]=\"connections\" class=\"form-control selected\" id=\"selectConnections\" style=\"width:90%; float: right;\">\n          <option value=\"\" hidden>Connections</option>\n          <option>1</option>\n          <option>2</option>\n          <option>3</option>\n          <option>4</option>\n        </select>\n      </div>\n      <div class=\"col-md-2 col-md-offset-1 \">\n        <input type=\"radio\" value=\"miles\" name=\"optradio2\" style=\"margin-top: 8%;\" id=\"radioMiles\">\n        <select [(ngModel)]=\"miles\" class=\"form-control selected\" id=\"selectMiles\" style=\"width:90%; float: right;\">\n          <option value=\"\" hidden>Executed Miles</option>\n          <option>1</option>\n          <option>2</option>\n          <option>3</option>\n          <option>4</option>\n        </select>\n      </div>\n      <div class=\"col-md-2 col-md-offset-1\"> </div>\n\n\n      <div class=\"col-md-3\">\n        <button type=\"button\" id=\"btnSave2\" (click)=\"save()\" style=\"margin-top: 0; float: right;\" class=\"btn btn-primary btn1\">Save alert</button>\n      </div>\n\n\n    </div>\n\n\n\n  </div>\n</section>\n\n<!--END-ROUTE-->\n<section id=\"body\" style=\"    min-height: 300px;\">\n\n\n  <div class=\"showbox\"  *ngIf=\"isSearching\">\n    <div class=\"loader\">\n      <svg class=\"circular\" viewBox=\"25 25 50 50\">\n        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n      </svg>\n    </div>\n  </div>\n\n\n\n  <div *ngIf=\"!isSearching\" class=\"container\">\n    <div class=\"row\">\n      <p class=\"head\"> SAVE ALERTS</p>\n    </div>\n    <div class=\"row\">\n      <ul class=\"list-inline\">\n        <li (click)=\"showAll();\" ><a class=\"head-link-tab1\" id=\"all\" >SHOW ALL</a></li>\n        <li (click)=\"showUpcomming();\"><a class=\"head-link-tab\"  id=\"upcomming\">UPCOMING</a></li>\n        <li (click)=\"showExpired();\"><a class=\"head-link-tab\"  id=\"expired\">EXPIRED</a></li>\n      </ul>\n\n      <div class=\"col-md-12\"></div>\n\n    </div>\n\n\n    <div id=\"allDiv\" style=\"margin-bottom: 100px;\">\n      <p *ngIf=\"listAll.length == 0\">No alerts.</p>\n    <div  class=\"row schedule-row1\" *ngFor=\"let item of listAll\">\n      <div class=\"col-md-3 col-sm-3 img-row1\" style=\"padding-left: 0\"><img  src=\"./../../assets/img/background.png\" alt=\"\"></div>\n      <div class=\"col-md-4  col-sm-4 col-xs-6 row1-2nd-dive\">\n        <div class=\"col-md-11 col-sm-12 col-xs-12 col-md-offset-1\">\n          <p class=\"schedule-sub-row1\">{{getLocation(item.fromCode)}} , {{getLocation(item.toCode)}}  <i (click)=\"prepareEdit(item.alertId);\" class=\"fa fa-pencil\" aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#edit\" style=\"    position: relative; color: green;\n    margin-left: 0;\n    margin-top: 0;\"></i> <i (click)=\"prepareDelete(item.alertId);\" class=\"fa fa-trash\" aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#delete\" style=\"    position: relative; color: red;\n    margin-left: 0;\n    margin-top: 0;\"></i>  <span *ngIf=\"isUpcomming(item.departureDate);\"> <button class=\"btn-upcomming\" >UPCOMMING</button></span></p>\n        </div>\n\n        <div class=\"col-md-11 col-sm-12 col-xs-12 col-md-offset-1\"><p class=\"schedule-row2-text\">Alert number  : <span class=\"schedule-row2-span\">{{item.alertId}}</span></p></div>\n        <!--<div class=\"col-md-11  col-sm-12 col-xs-12 col-md-offset-1\"><p class=\"schedule-row3-text\">Airline    : <span class=\"schedule-row3-span\"><img class=\"americanAirLine\" src=\"./../../assets/img/logo-americanAIRLINE.png\" alt=\"\"></span></p></div>-->\n\n\n        <!--<div class=\"col-md-11 col-md-offset-1\"><p class=\"schedule-row4-text\">Boeing 777-300</p></div>-->\n        <!--<div class=\"col-md-11 col-md-offset-1\"><i class=\"fa fa-wifi icon-wifi\"></i> <span class=\"social-icon\"><i class=\"fa fa-briefcase\"></i></span> <span class=\"social-icon\"><i class=\"fa fa-plug\"></i></span></div>-->\n      </div>\n      <div class=\"col-md-2\"></div>\n\n      <div class=\"col-md-3 col-sm-3 col-xs-6 row1-3rd-dive\">\n        <div class=\"col-md-2 col-xs-2\"><img class=\"plan-img\" src=\"./../../assets/img/departureArivl-Img.png\" alt=\"\"></div>\n\n        <div class=\"col-md-8 col-xs-8 bostan\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-departure\">Departure </p>\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-boston\">{{getLocation(item.fromCode)}}({{item.fromCode}}) </p>\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-date\">{{getDate(item.departureDate)}} </p>\n          </div>\n\n        </div>\n\n        <div class=\"col-md-8 col-xs-8 london\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-departure\">Arrival </p>\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-boston\">{{getLocation(item.toCode)}}({{item.toCode}}) </p>\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p *ngIf=\"item.oneway\" class=\"schedule-date\">{{getDate(item.returnDate)}} </p>\n            <p *ngIf=\"!item.oneway\" class=\"schedule-date\">{{getDate(item.departureDate)}} </p>\n          </div>\n\n        </div>\n      </div>\n      <!--</div>  &lt;!&ndash;shawdowbox div closed&ndash;&gt;-->\n    </div>\n    </div>\n\n\n\n\n    <div id=\"oldDiv\" style=\"display: none; margin-bottom: 100px;\">\n      <p *ngIf=\"listCurrent.length == 0\">No upcomming alerts.</p>\n    <div class=\"row schedule-row1\" *ngFor=\"let item of listCurrent\" >\n      <div class=\"col-md-3 col-sm-3 img-row1\" style=\"padding-left: 0\"><img  src=\"./../../assets/img/background.png\" alt=\"\"></div>\n      <div class=\"col-md-4  col-sm-4 col-xs-6 row1-2nd-dive\">\n        <div class=\"col-md-11 col-sm-12 col-xs-12 col-md-offset-1\">\n          <p class=\"schedule-sub-row1\">{{getLocation(item.fromCode)}} , {{getLocation(item.toCode)}}  <i (click)=\"prepareEdit(item.alertId);\" class=\"fa fa-pencil\" aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#edit\" style=\"    position: relative; color: green;\n    margin-left: 0;\n    margin-top: 0;\"></i>  <i (click)=\"prepareDelete(item.alertId);\" class=\"fa fa-trash\" aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#delete\" style=\"    position: relative; color: red;\n    margin-left: 0;\n    margin-top: 0;\"></i>   <span> <button class=\"btn-upcomming\" >UPCOMMING</button></span></p>\n        </div>\n\n        <div class=\"col-md-11 col-sm-12 col-xs-12 col-md-offset-1\"><p class=\"schedule-row2-text\">Alert number  : <span class=\"schedule-row2-span\">{{item.alertId}}</span></p></div>\n\n        <!--<div class=\"col-md-11  col-sm-12 col-xs-12 col-md-offset-1\"><p class=\"schedule-row3-text\">Airline    : <span class=\"schedule-row3-span\"><img class=\"americanAirLine\" src=\"./../../assets/img/logo-americanAIRLINE.png\" alt=\"\"></span></p></div>-->\n\n        <!--<div class=\"col-md-11 col-md-offset-1\"><p class=\"schedule-row4-text\">Boeing 777-300</p></div>-->\n        <!--<div class=\"col-md-11 col-md-offset-1\"><i class=\"fa fa-wifi icon-wifi\"></i> <span class=\"social-icon\"><i class=\"fa fa-briefcase\"></i></span> <span class=\"social-icon\"><i class=\"fa fa-plug\"></i></span></div>-->\n      </div>\n      <div class=\"col-md-2\"></div>\n\n      <div class=\"col-md-3 col-sm-3 col-xs-6 row1-3rd-dive\">\n        <div class=\"col-md-2 col-xs-2\"><img class=\"plan-img\" src=\"./../../assets/img/departureArivl-Img.png\" alt=\"\"></div>\n\n        <div class=\"col-md-8 col-xs-8 bostan\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-departure\">Departure </p>\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-boston\">{{getLocation(item.fromCode)}}({{item.fromCode}}) </p>\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-date\">{{getDate(item.departureDate)}} </p>\n          </div>\n\n        </div>\n\n        <div class=\"col-md-8 col-xs-8 london\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-departure\">Arrival </p>\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-boston\">{{getLocation(item.toCode)}}({{item.toCode}}) </p>\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-date\">{{getDate(item.returnDate)}} </p>\n          </div>\n\n        </div>\n      </div>\n      <!--</div>  &lt;!&ndash;shawdowbox div closed&ndash;&gt;-->\n    </div>\n    </div>\n\n\n    <div id=\"currentDiv\" style=\"display: none; margin-bottom: 100px;\">\n      <p *ngIf=\"listOld.length == 0\">No expired alerts.</p>\n    <div  class=\"row schedule-row1\" *ngFor=\"let item of listOld\" >\n      <div class=\"col-md-3 col-sm-3 img-row1\" style=\"padding-left: 0\"><img  src=\"./../../assets/img/background.png\" alt=\"\"></div>\n      <div class=\"col-md-4  col-sm-4 col-xs-6 row1-2nd-dive\">\n        <div class=\"col-md-11 col-sm-12 col-xs-12 col-md-offset-1\">\n          <p class=\"schedule-sub-row1\">{{getLocation(item.fromCode)}} , {{getLocation(item.toCode)}} <i (click)=\"prepareEdit(item.alertId);\" class=\"fa fa-pencil\" aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#edit\" style=\"    position: relative; color: green;\n    margin-left: 0;\n    margin-top: 0;\"></i> <i (click)=\"prepareDelete(item.alertId);\" class=\"fa fa-trash\" aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#delete\" style=\"    position: relative; color: red;\n    margin-left: 0;\n    margin-top: 0;\"></i>   </p>\n        </div>\n\n        <div class=\"col-md-11 col-sm-12 col-xs-12 col-md-offset-1\"><p class=\"schedule-row2-text\">Alert number  : <span class=\"schedule-row2-span\">{{item.alertId}}</span></p></div>\n\n        <!--<div class=\"col-md-11  col-sm-12 col-xs-12 col-md-offset-1\"><p class=\"schedule-row3-text\">Airline    : <span class=\"schedule-row3-span\"><img class=\"americanAirLine\" src=\"./../../assets/img/logo-americanAIRLINE.png\" alt=\"\"></span></p></div>-->\n\n        <!--<div class=\"col-md-11 col-md-offset-1\"><p class=\"schedule-row4-text\">Boeing 777-300</p></div>-->\n        <!--<div class=\"col-md-11 col-md-offset-1\"><i class=\"fa fa-wifi icon-wifi\"></i> <span class=\"social-icon\"><i class=\"fa fa-briefcase\"></i></span> <span class=\"social-icon\"><i class=\"fa fa-plug\"></i></span></div>-->\n      </div>\n      <div class=\"col-md-2\"></div>\n\n      <div class=\"col-md-3 col-sm-3 col-xs-6 row1-3rd-dive\">\n        <div class=\"col-md-2 col-xs-2\"><img class=\"plan-img\" src=\"./../../assets/img/departureArivl-Img.png\" alt=\"\"></div>\n\n        <div class=\"col-md-8 col-xs-8 bostan\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-departure\">Departure </p>\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-boston\">{{getLocation(item.fromCode)}}({{item.fromCode}}) </p>\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-date\">{{getDate(item.departureDate)}} </p>\n          </div>\n\n        </div>\n\n        <div class=\"col-md-8 col-xs-8 london\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-departure\">Arrival </p>\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-boston\">{{getLocation(item.toCode)}}({{item.toCode}}) </p>\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <p class=\"schedule-date\">{{getDate(item.returnDate)}} </p>\n          </div>\n\n        </div>\n      </div>\n      <!--</div>  &lt;!&ndash;shawdowbox div closed&ndash;&gt;-->\n    </div>\n  </div>\n\n\n\n  </div>\n</section>\n\n\n\n<div id=\"delete\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Delete Trip</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <p>Are you sure you want to delete this trip?</p>\n        <button class=\"btn btn-danger\" data-entity=\"user\" id=\"userDeleteButton\" (click)=\"deleteAlert();\" ><span style=\"    position: relative;\n    margin-left: 0;\n    margin-top: 0;\" class=\"fa fa-trash\"></span> Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div id=\"edit\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Update Trip</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n\n\n\n        <div class=\"row first-row\">\n          <div style=\"    margin-bottom: 5%;\" class=\"col-md-12 col-sm-12 col-xs-12 first-part\">\n            <p>Choose way</p>\n            <div class=\"row\">\n              <div class=\"col-md-5 col-sm-4 col-xs-6\">\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" value='oneway'  id=\"updateOneway\" [(ngModel)]=\"updateTripType\" name=\"optradio1\">One way\n                </label>\n              </div>\n              <div class=\"col-md-5 col-sm-offset-1 col-sm-4 col-xs-6 radio-button\">\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" value='round' id=\"updateRound\"  [(ngModel)]=\"updateTripType\" name=\"optradio1\">Round trip\n                </label>\n              </div>\n            </div>\n\n\n\n\n          </div>\n          <div style=\"    margin-bottom: 5%;\" class=\"col-md-6 col-sm-6 col-xs-6 city-picker1\">\n            <p>From</p>\n            <select  class=\"selectpicker\" id=\"updateFrom\" data-live-search=\"true\">\n\n              <option *ngFor=\"let airport of airportDate\" value=\"{{airport.code}}\">{{airport.city}}</option>\n\n\n              <!--<option value=\"BOS\">Boston</option>-->\n              <!--<option value=\"ALA\">Alaska </option>-->\n              <!--<option value=\"ARI\">Arizona </option>-->\n              <!--<option value=\"ARK\">Arkansas </option>-->\n              <!--<option value=\"CA\">California </option>-->\n              <!--<option value=\"COL\">Colorado </option>-->\n              <!--<option value=\"CON\">Connecticut </option>-->\n              <!--<option value=\"DEL\" >Delaware </option>-->\n              <!--<option value=\"FLO\">Florida </option>-->\n            </select>\n          </div>\n          <div style=\"    margin-bottom: 5%;\" class=\"col-md-6  col-sm-6 col-xs-6 city-picker2\">\n            <p>To</p>\n            <select class=\"selectpicker\" id=\"updateTo\" data-live-search=\"true\">\n              <option *ngFor=\"let airport of airportDate\" value=\"{{airport.code}}\">{{airport.city}}</option>\n\n\n\n\n\n\n            </select>\n          </div>\n          <div style=\"    margin-bottom: 5%;\" class=\"col-md-12 col-sm-12 col-xs-12 last-part\">\n            <p class=\"last-para\">Date - Return</p>\n            <div class=\"input-group date\" data-provide=\"datepicker\">\n              <div class=\"col-md-offset-3 col-md-2 col-sm-4 col-xs-4 pickers\" id=\"updateDatepickerTo\">\n                <input style=\"margin: 0;padding: 0;\"  type=\"text\" name=\"birthday\" id=\"updateFromDate\" value=\"10/24/1984\" class=\"form-control datpiker1\" />\n              </div>\n              <div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"    top: 7px;\" id=\"updateDatepickerDash\">\n                <span class=\"dash\">-</span>\n              </div>\n              <div class=\"col-md-2 col-sm-4 col-xs-4 pickers\" id=\"updateDatepickerReturn\">\n                <input style=\"margin: 0;padding: 0;\" type=\"text\" name=\"birthday1\" id=\"updateToDate\"  value=\"10/24/1984\" class=\"form-control datpiker2\" />\n              </div>\n              <div class=\"col-md-1 col-sm-1 col-xs-1\" style=\"    top: 7px;\">\n                <i style=\"margin-left: 0px;margin-top: 0px;\" class=\"fa fa-calendar fa-1x\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row second-row\">\n          <div style=\"    margin-bottom: 5%;\" class=\"col-md-offset-2 col-md-4\">\n            <p>Adults</p>\n            <select [(ngModel)]=\"updateAdults\" class=\"form-control selected\" id=\"updateSel1\">\n              <option value=\"\" hidden>Select Adults</option>\n              <option value=\"1\">1</option>\n              <option  value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option  value=\"4\">4</option>\n            </select>\n          </div>\n          <div style=\"    margin-bottom: 5%;\" class=\"col-md-4\">\n            <p>Send every</p>\n            <select [(ngModel)]=\"updateSendEvery\" class=\"form-control selected\" id=\"updateSel2\">\n              <option value=\"\" hidden>Select Day</option>\n              <option value=\"1\">Daily</option>\n              <option value=\"2\">Monday</option>\n              <option value=\"3\">Tuesday</option>\n              <option value=\"4\">Wednesday</option>\n              <option value=\"5\">Thursday</option>\n              <option value=\"6\">Friday</option>\n              <option value=\"7\">Saturday</option>\n              <option value=\"8\">Sunday</option>\n              <option value=\"9\">Weekend</option>\n              <option value=\"10\">Weekly</option>\n            </select>\n\n\n\n          </div>\n\n\n\n\n\n        </div>\n\n\n\n        <button class=\"btn btn-success\" data-entity=\"user\" id=\"userEditButton\" (click)=\"updateAlert();\" ><span style=\"    position: relative;\n    margin-left: 0;\n    margin-top: 0;\" class=\"fa fa-save\"></span> Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, toastr, vcr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this._imageUrl = '';
        this._firstName = '';
        this._lastName = '';
        this._email = '';
        this._username = '';
        this.tripType = '';
        this.from = '';
        this.fromDate = '';
        this.to = '';
        this.toDate = '';
        this.adults = '';
        this.sendEvery = '';
        this.class = '';
        this.connections = '';
        this.miles = '';
        this.updateTripType = '';
        this.updateFrom = '';
        this.updateFromDate = '';
        this.updateTo = '';
        this.updateToDate = '';
        this.updateAdults = '';
        this.updateSendEvery = '';
        this.updateClass = '';
        this.updateConnections = '';
        this.updateMiles = '';
        this.data = {};
        this.listAll = [];
        this.listOld = [];
        this.listCurrent = [];
        this.today = new Date();
        this.isSearching = false;
        this.isAdvancedVisible = false;
        this.updateData = {};
        this.airportDate = [{ "code": "ABE", "city": "Allentown" }, { "code": "ABI", "city": "Abilene" }, { "code": "ABL", "city": "Kiana" }, { "code": "ABQ", "city": "Albuquerque" }, { "code": "ABR", "city": "Aberdeen" }, { "code": "ABY", "city": "Albany" }, { "code": "ACK", "city": "Nantucket" }, { "code": "ACT", "city": "Waco" }, { "code": "ACV", "city": "Mckinleyville" }, { "code": "ACY", "city": "Egg Harbor City" }, { "code": "ADK", "city": "Adak" }, { "code": "ADQ", "city": "Kodiak" }, { "code": "AET", "city": "Allakaket" }, { "code": "AEX", "city": "Alexandria" }, { "code": "AGN", "city": "Angoon" }, { "code": "AGS", "city": "Augusta" }, { "code": "AHC", "city": "Herlong" }, { "code": "AIA", "city": "Alliance" }, { "code": "AIN", "city": "Wainwright" }, { "code": "AKB", "city": "Atka" }, { "code": "AKI", "city": "Bethel" }, { "code": "AKK", "city": "Kodiak" }, { "code": "AKN", "city": "King Salmon" }, { "code": "AKP", "city": "Anaktuvuk Pass" }, { "code": "ALB", "city": "Latham" }, { "code": "ALM", "city": "Alamogordo" }, { "code": "ALO", "city": "Waterloo" }, { "code": "ALS", "city": "Alamosa" }, { "code": "ALW", "city": "Walla Walla" }, { "code": "ALZ", "city": "Alitak" }, { "code": "AMA", "city": "Amarillo" }, { "code": "ANC", "city": "Anchorage" }, { "code": "ANI", "city": "Bethel" }, { "code": "ANV", "city": "Anvik" }, { "code": "AOO", "city": "Martinsburg" }, { "code": "AOS", "city": "Amook" }, { "code": "APA", "city": "Englewood" }, { "code": "APF", "city": "Naples" }, { "code": "APN", "city": "Alpena" }, { "code": "ARC", "city": "Arctic Village" }, { "code": "ART", "city": "Dexter" }, { "code": "ARV", "city": "Woodruff" }, { "code": "ASE", "city": "Aspen" }, { "code": "ATK", "city": "Atqasuk" }, { "code": "ATL", "city": "Atlanta" }, { "code": "ATT", "city": "Atmautluak" }, { "code": "ATW", "city": "Appleton" }, { "code": "ATY", "city": "Watertown" }, { "code": "AUG", "city": "Augusta" }, { "code": "AUK", "city": "Alakanuk" }, { "code": "AUS", "city": "Austin" }, { "code": "AVL", "city": "Fletcher" }, { "code": "AVP", "city": "Pittston" }, { "code": "AZA", "city": "Phoenix" }, { "code": "AZO", "city": "Kalamazoo" }, { "code": "BDL", "city": "Windsor Locks" }, { "code": "BDR", "city": "Stratford" }, { "code": "BET", "city": "Bethel" }, { "code": "BFD", "city": "Lewis Run" }, { "code": "BFF", "city": "Scottsbluff" }, { "code": "BFI", "city": "Seattle" }, { "code": "BFL", "city": "Bakersfield" }, { "code": "BGM", "city": "Johnson City" }, { "code": "BGR", "city": "Bangor" }, { "code": "BHB", "city": "Ellsworth" }, { "code": "BHM", "city": "Birmingham" }, { "code": "BID", "city": "Block Island" }, { "code": "BIL", "city": "Billings" }, { "code": "BIS", "city": "Bismarck" }, { "code": "BJI", "city": "Bemidji" }, { "code": "BKC", "city": "Buckland" }, { "code": "BKL", "city": "Cleveland" }, { "code": "BKW", "city": "Beaver" }, { "code": "BLI", "city": "Bellingham" }, { "code": "BLV", "city": "Belleville" }, { "code": "BMI", "city": "Bloomington" }, { "code": "BNA", "city": "Nashville" }, { "code": "BOI", "city": "Boise" }, { "code": "BOS", "city": "Boston" }, { "code": "BOW", "city": "Bartow" }, { "code": "BPT", "city": "Beaumont" }, { "code": "BQK", "city": "Brunswick" }, { "code": "BQN", "city": "Aguadilla" }, { "code": "BRD", "city": "Brainerd" }, { "code": "BRL", "city": "Burlington" }, { "code": "BRO", "city": "Brownsville" }, { "code": "BRW", "city": "Barrow" }, { "code": "BTI", "city": "Kaktovik" }, { "code": "BTL", "city": "Battle Creek" }, { "code": "BTM", "city": "Butte" }, { "code": "BTR", "city": "Baton Rouge" }, { "code": "BTT", "city": "Bettles" }, { "code": "BTV", "city": "South Burlington" }, { "code": "BUF", "city": "Buffalo" }, { "code": "BUR", "city": "Burbank" }, { "code": "BWI", "city": "Baltimore" }, { "code": "BZN", "city": "Bozeman" }, { "code": "CAE", "city": "West Columbia" }, { "code": "CAK", "city": "Canton" }, { "code": "CDB", "city": "Cold Bay" }, { "code": "CDC", "city": "Cedar City" }, { "code": "CDR", "city": "Chadron" }, { "code": "CDV", "city": "Cordova" }, { "code": "CDW", "city": "Fairfield" }, { "code": "CEC", "city": "Crescent City" }, { "code": "CEM", "city": "Circle" }, { "code": "CEZ", "city": "Cortez" }, { "code": "CGA", "city": "Craig" }, { "code": "CGI", "city": "Scott City" }, { "code": "CHA", "city": "Chattanooga" }, { "code": "CHO", "city": "Earlysville" }, { "code": "CHS", "city": "North Charleston" }, { "code": "CHU", "city": "Chuathbaluk" }, { "code": "CIC", "city": "Chico" }, { "code": "CID", "city": "Cedar Rapids" }, { "code": "CIK", "city": "Chalkyitsik" }, { "code": "CIU", "city": "Kincheloe" }, { "code": "CKB", "city": "Clarksburg" }, { "code": "CKD", "city": "Aniak" }, { "code": "CKX", "city": "Tok" }, { "code": "CLD", "city": "Carlsbad" }, { "code": "CLE", "city": "Cleveland" }, { "code": "CLL", "city": "College Station" }, { "code": "CLM", "city": "Port Angeles" }, { "code": "CLP", "city": "Clarks Point" }, { "code": "CLT", "city": "Charlotte" }, { "code": "CMH", "city": "Columbus" }, { "code": "CMI", "city": "Savoy" }, { "code": "CMX", "city": "Hancock" }, { "code": "CNM", "city": "Carlsbad" }, { "code": "CNY", "city": "Thompson" }, { "code": "COD", "city": "Cody/Yellowstone" }, { "code": "COS", "city": "Colorado Springs" }, { "code": "COU", "city": "Columbia" }, { "code": "CPR", "city": "Casper" }, { "code": "CPX", "city": "Culebra" }, { "code": "CRP", "city": "Corpus Christi" }, { "code": "CRW", "city": "Charleston" }, { "code": "CSG", "city": "Columbus" }, { "code": "CVG", "city": "Hebron" }, { "code": "CVN", "city": "Texico" }, { "code": "CWA", "city": "Mosinee" }, { "code": "CYF", "city": "Chefornak" }, { "code": "CYS", "city": "Cheyenne" }, { "code": "CZN", "city": "Gakona" }, { "code": "DAB", "city": "Daytona Beach" }, { "code": "DAL", "city": "Dallas" }, { "code": "DAY", "city": "Dayton" }, { "code": "DBQ", "city": "Dubuque" }, { "code": "DCA", "city": "Arlington" }, { "code": "DDC", "city": "Dodge City" }, { "code": "DEC", "city": "Decatur" }, { "code": "DEN", "city": "Denver" }, { "code": "DFW", "city": "Dallas" }, { "code": "DHN", "city": "Dothan" }, { "code": "DIK", "city": "Dickinson" }, { "code": "DLG", "city": "Dillingham" }, { "code": "DLH", "city": "Duluth" }, { "code": "DRG", "city": "Deering" }, { "code": "DRO", "city": "Durango" }, { "code": "DRT", "city": "Del Rio" }, { "code": "DSM", "city": "Des Moines" }, { "code": "DTW", "city": "Detroit" }, { "code": "DUJ", "city": "Reynoldsville" }, { "code": "DUT", "city": "Unalaska" }, { "code": "DVL", "city": "Devils Lake" }, { "code": "EAA", "city": "Tok" }, { "code": "EAR", "city": "Kearney" }, { "code": "EAT", "city": "East Wenatchee" }, { "code": "EAU", "city": "Eau Claire" }, { "code": "EDA", "city": "Ketchikan" }, { "code": "EEK", "city": "Eek" }, { "code": "EGE", "city": "Gypsum" }, { "code": "EGV", "city": "Eagle River" }, { "code": "EGX", "city": "Egegik" }, { "code": "EKO", "city": "Elko" }, { "code": "ELI", "city": "Elim" }, { "code": "ELM", "city": "Horseheads" }, { "code": "ELP", "city": "El Paso" }, { "code": "ELV", "city": "Elfin Cove" }, { "code": "ELY", "city": "Ely" }, { "code": "EMK", "city": "Alakanuk" }, { "code": "ENA", "city": "Kenai" }, { "code": "ENW", "city": "Kenosha" }, { "code": "ERI", "city": "Erie" }, { "code": "ESC", "city": "Escanaba" }, { "code": "ESD", "city": "Eastsound" }, { "code": "EUG", "city": "Eugene" }, { "code": "EVV", "city": "Evansville" }, { "code": "EWB", "city": "New Bedford" }, { "code": "EWD", "city": "Wildman Lake" }, { "code": "EWN", "city": "New Bern" }, { "code": "EWR", "city": "Newark" }, { "code": "EYW", "city": "Key West" }, { "code": "FAI", "city": "Fairbanks" }, { "code": "FAR", "city": "Fargo" }, { "code": "FAT", "city": "Fresno" }, { "code": "FAY", "city": "Fayetteville" }, { "code": "FCA", "city": "Kalispell" }, { "code": "FKL", "city": "Franklin" }, { "code": "FLG", "city": "Flagstaff" }, { "code": "FLL", "city": "Dania Beach" }, { "code": "FLO", "city": "Florence" }, { "code": "FMN", "city": "Farmington" }, { "code": "FMY", "city": "Fort Myers" }, { "code": "FNL", "city": "Loveland" }, { "code": "FNT", "city": "Flint" }, { "code": "FOD", "city": "Fort Dodge" }, { "code": "FRD", "city": "Friday Harbor" }, { "code": "FSD", "city": "Sioux Falls" }, { "code": "FSM", "city": "Fort Smith" }, { "code": "FWA", "city": "Fort Wayne" }, { "code": "FYU", "city": "Fort Yukon" }, { "code": "GAL", "city": "Galena" }, { "code": "GAM", "city": "Gambell" }, { "code": "GBD", "city": "Great Bend" }, { "code": "GCC", "city": "Gillette" }, { "code": "GCK", "city": "Pierceville" }, { "code": "GEG", "city": "Spokane" }, { "code": "GFK", "city": "Grand Forks" }, { "code": "GGG", "city": "Longview" }, { "code": "GJT", "city": "Grand Junction" }, { "code": "GLH", "city": "Greenville" }, { "code": "GLV", "city": "Golovin" }, { "code": "GNU", "city": "Goodnews Bay" }, { "code": "GNV", "city": "Gainesville" }, { "code": "GPT", "city": "Gulfport" }, { "code": "GRB", "city": "Green Bay" }, { "code": "GRK", "city": "Killeen" }, { "code": "GRR", "city": "Grand Rapids" }, { "code": "GSO", "city": "Greensboro" }, { "code": "GSP", "city": "Greer" }, { "code": "GST", "city": "Gustavus" }, { "code": "GTF", "city": "Great Falls" }, { "code": "GTR", "city": "Columbus" }, { "code": "GUC", "city": "Gunnison" }, { "code": "GUM", "city": "Hagåtña" }, { "code": "HAE", "city": "Havasupai" }, { "code": "HCR", "city": "Holy Cross" }, { "code": "HDN", "city": "Hayden" }, { "code": "HHH", "city": "Hilton Head Island" }, { "code": "HIB", "city": "Hibbing" }, { "code": "HKB", "city": "Healy Lake" }, { "code": "HLN", "city": "Helena" }, { "code": "HNH", "city": "Hoonah" }, { "code": "HNL", "city": "Honolulu" }, { "code": "HNM", "city": "Hana" }, { "code": "HNS", "city": "Haines" }, { "code": "HOB", "city": "Hobbs" }, { "code": "HOM", "city": "Homer" }, { "code": "HON", "city": "Huron" }, { "code": "HOU", "city": "Houston" }, { "code": "HPB", "city": "Hooper Bay" }, { "code": "HPN", "city": "Purchase" }, { "code": "HRL", "city": "Harlingen" }, { "code": "HSL", "city": "Huslia" }, { "code": "HSV", "city": "Huntsville" }, { "code": "HTS", "city": "Huntington" }, { "code": "HUS", "city": "Hughes" }, { "code": "HVN", "city": "East Haven" }, { "code": "HVR", "city": "Havre" }, { "code": "HYA", "city": "Hyannis" }, { "code": "HYG", "city": "Hydaburg" }, { "code": "HYL", "city": "Hollis" }, { "code": "HYS", "city": "Hays" }, { "code": "IAD", "city": "Washington" }, { "code": "IAG", "city": "Niagara Falls" }, { "code": "IAH", "city": "Houston" }, { "code": "IAN", "city": "Kiana" }, { "code": "ICT", "city": "Wichita" }, { "code": "IDA", "city": "Idaho Falls" }, { "code": "IFP", "city": "Bullhead City" }, { "code": "IGG", "city": "Igiugig" }, { "code": "IGM", "city": "Kingman" }, { "code": "IKO", "city": "Nikolski" }, { "code": "ILI", "city": "Iliamna" }, { "code": "ILM", "city": "Wilmington" }, { "code": "ILN", "city": "Wilmington" }, { "code": "IMT", "city": "Kingsford" }, { "code": "IND", "city": "Indianapolis" }, { "code": "INL", "city": "International Falls" }, { "code": "INT", "city": "Winston-Salem" }, { "code": "IPL", "city": "Imperial" }, { "code": "IPT", "city": "Montoursville" }, { "code": "IRC", "city": "Circle" }, { "code": "IRM", "city": "Irma" }, { "code": "ISN", "city": "Williston" }, { "code": "ISO", "city": "Kinston" }, { "code": "ISP", "city": "Ronkonkoma" }, { "code": "ITH", "city": "Ithaca" }, { "code": "ITO", "city": "Hilo" }, { "code": "IWD", "city": "Ironwood" }, { "code": "IYK", "city": "Inyokern" }, { "code": "JAC", "city": "Jackson" }, { "code": "JAN", "city": "Pearl" }, { "code": "JAX", "city": "Jacksonville" }, { "code": "JEF", "city": "Holts Summit" }, { "code": "JFK", "city": "Jamaica" }, { "code": "JGC", "city": "Williams" }, { "code": "JHM", "city": "Lahaina" }, { "code": "JHW", "city": "Jamestown" }, { "code": "JKL", "city": "Jackson" }, { "code": "JLN", "city": "Webb City" }, { "code": "JMS", "city": "Jamestown" }, { "code": "JNU", "city": "Juneau" }, { "code": "JRB", "city": "New York" }, { "code": "JST", "city": "Johnstown" }, { "code": "KAL", "city": "Kaltag" }, { "code": "KBC", "city": "Birch Creek" }, { "code": "KCC", "city": "Coffman Cove" }, { "code": "KCG", "city": "Chignik Lagoon" }, { "code": "KCL", "city": "Chignik Lagoon" }, { "code": "KCQ", "city": "Chignik" }, { "code": "KEB", "city": "Nanwalek" }, { "code": "KEK", "city": "Ekwok" }, { "code": "KFP", "city": "False Pass" }, { "code": "KGK", "city": "New Koliganek" }, { "code": "KGX", "city": "Grayling" }, { "code": "KKA", "city": "Koyuk" }, { "code": "KKB", "city": "Kitoi Bay" }, { "code": "KKH", "city": "Kongiganak" }, { "code": "KKI", "city": "Akiachak" }, { "code": "KKU", "city": "Clarks Point" }, { "code": "KLG", "city": "Kalskag" }, { "code": "KLL", "city": "Levelock" }, { "code": "KLN", "city": "Larsen Bay" }, { "code": "KLW", "city": "Klawock" }, { "code": "KMC", "city": "King Khalid Mil. City" }, { "code": "KMO", "city": "Manokotak" }, { "code": "KMY", "city": "Moser Bay" }, { "code": "KNK", "city": "Kakhonak" }, { "code": "KNW", "city": "New Stuyahok" }, { "code": "KOA", "city": "Kailua Kona" }, { "code": "KOT", "city": "Kotlik" }, { "code": "KOY", "city": "Olga Bay" }, { "code": "KOZ", "city": "Ouzinkie" }, { "code": "KPB", "city": "Point Baker" }, { "code": "KPC", "city": "Brevig Mission" }, { "code": "KPN", "city": "Kipnuk" }, { "code": "KPR", "city": "Port Williams" }, { "code": "KPV", "city": "Perryville" }, { "code": "KPY", "city": "Port Bailey" }, { "code": "KQA", "city": "Akutan" }, { "code": "KSM", "city": "Saint Marys" }, { "code": "KTB", "city": "Thorne Bay" }, { "code": "KTN", "city": "Ketchikan" }, { "code": "KTS", "city": "Teller Mission" }, { "code": "KUK", "city": "Kasigluk" }, { "code": "KVC", "city": "King Cove" }, { "code": "KVL", "city": "Kivalina" }, { "code": "KWK", "city": "Kwigillingok" }, { "code": "KWN", "city": "Quinhagak" }, { "code": "KWP", "city": "West Point" }, { "code": "KWT", "city": "Kwethluk" }, { "code": "KXA", "city": "Kasaan" }, { "code": "KYK", "city": "Kodiak" }, { "code": "KYU", "city": "Koyukuk" }, { "code": "KZB", "city": "Zachar Bay" }, { "code": "LAN", "city": "Lansing" }, { "code": "LAR", "city": "Laramie" }, { "code": "LAS", "city": "Las Vegas" }, { "code": "LAW", "city": "Lawton" }, { "code": "LAX", "city": "Los Angeles" }, { "code": "LBB", "city": "Lubbock" }, { "code": "LBE", "city": "Latrobe" }, { "code": "LBF", "city": "North Platte" }, { "code": "LBL", "city": "Liberal" }, { "code": "LCH", "city": "Lake Charles" }, { "code": "LCK", "city": "Columbus" }, { "code": "LEB", "city": "West Lebanon" }, { "code": "LEX", "city": "Lexington" }, { "code": "LFT", "city": "Lafayette" }, { "code": "LGA", "city": "Flushing" }, { "code": "LGB", "city": "Long Beach" }, { "code": "LIH", "city": "Lihue" }, { "code": "LIT", "city": "Little Rock" }, { "code": "LKE", "city": "Seattle" }, { "code": "LMA", "city": "Lake Minchumina" }, { "code": "LMT", "city": "Klamath Falls" }, { "code": "LNK", "city": "Lincoln" }, { "code": "LNY", "city": "Lanai City" }, { "code": "LOU", "city": "Louisville" }, { "code": "LPS", "city": "Lopez Island" }, { "code": "LRD", "city": "Laredo" }, { "code": "LSE", "city": "La Crosse" }, { "code": "LUF", "city": "Webb" }, { "code": "LUP", "city": "Kalaupapa" }, { "code": "LUR", "city": "Point Hope" }, { "code": "LWB", "city": "Lewisburg" }, { "code": "LWS", "city": "Lewiston" }, { "code": "LWT", "city": "Lewistown" }, { "code": "LYH", "city": "Lynchburg" }, { "code": "MAF", "city": "Midland" }, { "code": "MAZ", "city": "Mayaguez" }, { "code": "MBL", "city": "Manistee" }, { "code": "MBS", "city": "Freeland" }, { "code": "MCE", "city": "Merced" }, { "code": "MCG", "city": "Mcgrath" }, { "code": "MCI", "city": "Kansas City" }, { "code": "MCK", "city": "Mccook" }, { "code": "MCN", "city": "Macon" }, { "code": "MCO", "city": "Orlando" }, { "code": "MCW", "city": "Clear Lake" }, { "code": "MDT", "city": "Middletown" }, { "code": "MDW", "city": "Chicago" }, { "code": "MEI", "city": "Meridian" }, { "code": "MEM", "city": "Memphis" }, { "code": "MFE", "city": "Mcallen" }, { "code": "MFR", "city": "Central Point" }, { "code": "MGM", "city": "Montgomery" }, { "code": "MGW", "city": "Morgantown" }, { "code": "MHK", "city": "Manhattan" }, { "code": "MHR", "city": "Mather" }, { "code": "MHT", "city": "Manchester" }, { "code": "MIA", "city": "Miami" }, { "code": "MKC", "city": "Kansas City" }, { "code": "MKE", "city": "Milwaukee" }, { "code": "MKG", "city": "Muskegon" }, { "code": "MKK", "city": "Hoolehua" }, { "code": "MLB", "city": "Melbourne" }, { "code": "MLI", "city": "Coal Valley" }, { "code": "MLL", "city": "Marshall" }, { "code": "MLU", "city": "Monroe" }, { "code": "MLY", "city": "Manley Hot Springs" }, { "code": "MMH", "city": "Mammoth Lakes" }, { "code": "MNT", "city": "Minto" }, { "code": "MOB", "city": "Mobile" }, { "code": "MOD", "city": "Modesto" }, { "code": "MOT", "city": "Minot" }, { "code": "MOU", "city": "Mountain Village" }, { "code": "MQT", "city": "Marquette" }, { "code": "MRY", "city": "Monterey" }, { "code": "MSL", "city": "Muscle Shoals" }, { "code": "MSN", "city": "Madison" }, { "code": "MSO", "city": "Missoula" }, { "code": "MSP", "city": "St. Paul" }, { "code": "MSS", "city": "Massena" }, { "code": "MSY", "city": "Kenner" }, { "code": "MTJ", "city": "Montrose" }, { "code": "MTM", "city": "Metlakatla" }, { "code": "MUE", "city": "Kamuela" }, { "code": "MVY", "city": "Vineyard Haven" }, { "code": "MWA", "city": "Marion" }, { "code": "MYL", "city": "Mccall" }, { "code": "MYR", "city": "Myrtle Beach" }, { "code": "MYU", "city": "Mekoryuk" }, { "code": "NCN", "city": "New Chenega" }, { "code": "NIB", "city": "Nikolai" }, { "code": "NIP", "city": "Jacksonville" }, { "code": "NIU", "city": "Honolulu" }, { "code": "NKI", "city": "Naukiti" }, { "code": "NLG", "city": "Nelson Lagoon" }, { "code": "NME", "city": "Nightmute" }, { "code": "NNL", "city": "Nondalton" }, { "code": "NUI", "city": "Nuiqsut" }, { "code": "NUL", "city": "Nulato" }, { "code": "NUP", "city": "Nunapitchuk" }, { "code": "NYA", "city": "Norwood Young America" }, { "code": "OAJ", "city": "Richlands" }, { "code": "OAK", "city": "Oakland" }, { "code": "OBU", "city": "Kobuk" }, { "code": "ODW", "city": "Oak Harbor" }, { "code": "OGG", "city": "Kahului" }, { "code": "OGS", "city": "Ogdensburg" }, { "code": "OKC", "city": "Oklahoma City" }, { "code": "OLF", "city": "Wolf Point" }, { "code": "OLH", "city": "Old Harbor" }, { "code": "OMA", "city": "Omaha" }, { "code": "OME", "city": "Nome" }, { "code": "ONL", "city": "O'neill" }, { "code": "ONT", "city": "Ontario" }, { "code": "OOK", "city": "Toksook Bay" }, { "code": "OPF", "city": "Opa-Locka" }, { "code": "ORD", "city": "Chicago" }, { "code": "ORF", "city": "Norfolk" }, { "code": "ORH", "city": "Worcester" }, { "code": "ORI", "city": "Port Lions" }, { "code": "ORV", "city": "Noorvik" }, { "code": "OTH", "city": "North Bend" }, { "code": "OTZ", "city": "Kotzebue" }, { "code": "OVS", "city": "Boscobel" }, { "code": "OXR", "city": "Oxnard" }, { "code": "PAH", "city": "West Paducah" }, { "code": "PBG", "city": "Plattsburgh" }, { "code": "PBI", "city": "West Palm Beach" }, { "code": "PCE", "city": "Painter Creek" }, { "code": "PDB", "city": "Pedro Bay" }, { "code": "PDT", "city": "Pendleton" }, { "code": "PDX", "city": "Portland" }, { "code": "PEC", "city": "Pelican" }, { "code": "PFN", "city": "Panama City" }, { "code": "PGA", "city": "Page" }, { "code": "PGM", "city": "Port Graham" }, { "code": "PGV", "city": "Greenville" }, { "code": "PHF", "city": "Newport News" }, { "code": "PHL", "city": "Philadelphia" }, { "code": "PHO", "city": "Point Hope" }, { "code": "PHX", "city": "Phoenix" }, { "code": "PIA", "city": "Peoria" }, { "code": "PIB", "city": "Moselle" }, { "code": "PIE", "city": "Clearwater" }, { "code": "PIH", "city": "Pocatello" }, { "code": "PIP", "city": "Pilot Point" }, { "code": "PIR", "city": "Pierre" }, { "code": "PIT", "city": "Coraopolis" }, { "code": "PIZ", "city": "Point Lay" }, { "code": "PKA", "city": "Napaskiak" }, { "code": "PKB", "city": "Williamstown" }, { "code": "PLN", "city": "Pellston" }, { "code": "PMD", "city": "Palmdale" }, { "code": "PML", "city": "Port Moller" }, { "code": "PNS", "city": "Pensacola" }, { "code": "PPG", "city": "Pago Pago" }, { "code": "PPV", "city": "Port Protection" }, { "code": "PQI", "city": "Presque Isle" }, { "code": "PQS", "city": "Pilot Station" }, { "code": "PRC", "city": "Prescott" }, { "code": "PSC", "city": "Pasco" }, { "code": "PSE", "city": "Coto Laurel" }, { "code": "PSG", "city": "Petersburg" }, { "code": "PSP", "city": "Palm Springs" }, { "code": "PTA", "city": "Port Alsworth" }, { "code": "PTH", "city": "Port Heiden" }, { "code": "PTU", "city": "Platinum" }, { "code": "PUB", "city": "Pueblo" }, { "code": "PUW", "city": "Pullman" }, { "code": "PVC", "city": "Provincetown" }, { "code": "PVD", "city": "Warwick" }, { "code": "PWK", "city": "Wheeling" }, { "code": "PWM", "city": "Portland" }, { "code": "QUL", "city": "Qulin" }, { "code": "RAP", "city": "Rapid City" }, { "code": "RBH", "city": "Brooks Lodge" }, { "code": "RBX", "city": "Roundup" }, { "code": "RBY", "city": "Ruby" }, { "code": "RCE", "city": "Friday Harbor" }, { "code": "RCP", "city": "Cinder River" }, { "code": "RDB", "city": "Red Dog" }, { "code": "RDD", "city": "Redding" }, { "code": "RDM", "city": "Redmond" }, { "code": "RDU", "city": "Raleigh/Durham" }, { "code": "RDV", "city": "Red Devil" }, { "code": "RFD", "city": "Rockford" }, { "code": "RHI", "city": "Rhinelander" }, { "code": "RIC", "city": "Richmond" }, { "code": "RIV", "city": "Alessandro" }, { "code": "RIW", "city": "Riverton" }, { "code": "RKD", "city": "Owls Head" }, { "code": "RKS", "city": "Rock Springs" }, { "code": "RMP", "city": "Rampart" }, { "code": "RNO", "city": "Reno" }, { "code": "ROA", "city": "Roanoke" }, { "code": "ROC", "city": "Rochester" }, { "code": "ROP", "city": "Rota" }, { "code": "ROW", "city": "Roswell" }, { "code": "RSH", "city": "Russian Mission" }, { "code": "RSJ", "city": "Olga" }, { "code": "RST", "city": "Rochester" }, { "code": "RSW", "city": "Fort Myers" }, { "code": "RUT", "city": "North Clarendon" }, { "code": "SAN", "city": "San Diego" }, { "code": "SAT", "city": "San Antonio" }, { "code": "SAV", "city": "Savannah" }, { "code": "SBA", "city": "Goleta" }, { "code": "SBN", "city": "South Bend" }, { "code": "SBP", "city": "San Luis Obispo" }, { "code": "SBY", "city": "Salisbury" }, { "code": "SCC", "city": "Prudhoe Bay" }, { "code": "SCE", "city": "State College" }, { "code": "SCK", "city": "Stockton" }, { "code": "SCM", "city": "Scammon Bay" }, { "code": "SDF", "city": "Louisville" }, { "code": "SDP", "city": "Sand Point" }, { "code": "SDY", "city": "Sidney" }, { "code": "SEA", "city": "Seattle" }, { "code": "SFB", "city": "Sanford" }, { "code": "SFO", "city": "San Francisco" }, { "code": "SGF", "city": "Springfield" }, { "code": "SGU", "city": "St. George" }, { "code": "SGY", "city": "Skagway" }, { "code": "SHD", "city": "Weyers Cave" }, { "code": "SHG", "city": "Shungnak" }, { "code": "SHH", "city": "Shishmaref" }, { "code": "SHR", "city": "Sheridan" }, { "code": "SHV", "city": "Shreveport" }, { "code": "SHX", "city": "Shageluk" }, { "code": "SIG", "city": "San Juan" }, { "code": "SIT", "city": "Sitka" }, { "code": "SJC", "city": "San Jose" }, { "code": "SJT", "city": "San Angelo" }, { "code": "SJU", "city": "Carolina" }, { "code": "SKK", "city": "Shaktoolik" }, { "code": "SLC", "city": "Salt Lake City" }, { "code": "SLE", "city": "Salem" }, { "code": "SLK", "city": "Saranac Lake" }, { "code": "SLN", "city": "Salina" }, { "code": "SLQ", "city": "Sleetmute" }, { "code": "SMF", "city": "Sacramento" }, { "code": "SMK", "city": "St Michael" }, { "code": "SMN", "city": "Salmon" }, { "code": "SMX", "city": "Santa Maria" }, { "code": "SNA", "city": "Santa Ana" }, { "code": "SNP", "city": "Saint Paul Island" }, { "code": "SOV", "city": "Seldovia" }, { "code": "SOW", "city": "Show Low" }, { "code": "SPB", "city": "Charlotte Amalie" }, { "code": "SPI", "city": "Springfield" }, { "code": "SPN", "city": "Saipan" }, { "code": "SPS", "city": "Wichita Falls" }, { "code": "SRQ", "city": "Sarasota" }, { "code": "SRV", "city": "Stony River" }, { "code": "SSB", "city": "Christiansted" }, { "code": "STC", "city": "St. Cloud" }, { "code": "STG", "city": "St George Island" }, { "code": "STL", "city": "St. Louis" }, { "code": "STS", "city": "Windsor" }, { "code": "STT", "city": "Charlotte Amalie" }, { "code": "STX", "city": "Frederiksted" }, { "code": "SUN", "city": "Hailey" }, { "code": "SUX", "city": "Sioux City" }, { "code": "SVA", "city": "Savoonga" }, { "code": "SVC", "city": "Silver City" }, { "code": "SVS", "city": "Stevens Village" }, { "code": "SWF", "city": "New Windsor" }, { "code": "SWO", "city": "Stillwater" }, { "code": "SXP", "city": "Sheldon Point" }, { "code": "SYB", "city": "Kodiak" }, { "code": "SYR", "city": "Syracuse" }, { "code": "TAL", "city": "Tanana" }, { "code": "TBN", "city": "Fort Leonard Wood" }, { "code": "TCT", "city": "Takotna" }, { "code": "TEB", "city": "Teterboro" }, { "code": "TEK", "city": "Valdez" }, { "code": "TEX", "city": "Telluride" }, { "code": "TGC", "city": "Milan" }, { "code": "TKE", "city": "Tenakee Springs" }, { "code": "TKJ", "city": "Tok" }, { "code": "TLA", "city": "Teller" }, { "code": "TLH", "city": "Tallahassee" }, { "code": "TLJ", "city": "Tatalina" }, { "code": "TLT", "city": "Tuluksak" }, { "code": "TNC", "city": "Tin City" }, { "code": "TNK", "city": "Tununak" }, { "code": "TOG", "city": "Togiak Village" }, { "code": "TOL", "city": "Swanton" }, { "code": "TPA", "city": "Tampa" }, { "code": "TRI", "city": "Blountville" }, { "code": "TSS", "city": "New York" }, { "code": "TUL", "city": "Tulsa" }, { "code": "TUP", "city": "Tupelo" }, { "code": "TUS", "city": "Tucson" }, { "code": "TVC", "city": "Traverse City" }, { "code": "TVF", "city": "Thief River Falls" }, { "code": "TWA", "city": "Twin Hills" }, { "code": "TWF", "city": "Twin Falls" }, { "code": "TXK", "city": "Texarkana" }, { "code": "TYR", "city": "Tyler" }, { "code": "TYS", "city": "Knoxville" }, { "code": "UGB", "city": "Pilot Point" }, { "code": "UGI", "city": "Kodiak" }, { "code": "UIN", "city": "Quincy" }, { "code": "UNK", "city": "Unalakleet" }, { "code": "VAK", "city": "Hooper Bay" }, { "code": "VBM", "city": "Blue Mountain" }, { "code": "VCT", "city": "Victoria" }, { "code": "VCV", "city": "Victorville" }, { "code": "VDZ", "city": "Valdez" }, { "code": "VEE", "city": "Venetie" }, { "code": "VEL", "city": "Vernal" }, { "code": "VIS", "city": "Visalia" }, { "code": "VLD", "city": "Valdosta" }, { "code": "VPS", "city": "Eglin Village" }, { "code": "VQS", "city": "Puerto Ferro" }, { "code": "WAA", "city": "Wales" }, { "code": "WBB", "city": "Stebbins" }, { "code": "WBQ", "city": "Beaver" }, { "code": "WKK", "city": "Aleknagik" }, { "code": "WLK", "city": "Selawik" }, { "code": "WMK", "city": "Meyers Chuck" }, { "code": "WMO", "city": "White Mountain" }, { "code": "WNA", "city": "Napakiak" }, { "code": "WRG", "city": "Wrangell" }, { "code": "WRL", "city": "Worland" }, { "code": "WSN", "city": "South Naknek" }, { "code": "WST", "city": "Westerly" }, { "code": "WSX", "city": "Westsound" }, { "code": "WTK", "city": "Noatak" }, { "code": "WTL", "city": "Tuntutuliak" }, { "code": "WWP", "city": "Whale Pass" }, { "code": "WWT", "city": "Newtok" }, { "code": "WYS", "city": "West Yellowstone" }, { "code": "XNA", "city": "Bentonville" }, { "code": "XNY", "city": "New York" }, { "code": "XVG", "city": "Longville" }, { "code": "XZU", "city": "Rail (Generic)" }, { "code": "YAK", "city": "Yakutat" }, { "code": "YIP", "city": "Ypsilanti" }, { "code": "YKM", "city": "Yakima" }, { "code": "YNG", "city": "Vienna" }, { "code": "YUM", "city": "Yuma" }, { "code": "ZBP", "city": "Baltimore" }, { "code": "ZFV", "city": "Philadelphia" }, { "code": "ZFZ", "city": "Buffalo" }, { "code": "ZGD", "city": "Groton" }, { "code": "ZHO", "city": "Houston" }, { "code": "ZLY", "city": "Albany" }, { "code": "ZME", "city": "Newark" }, { "code": "ZML", "city": "Milwaukee" }, { "code": "ZRD", "city": "Richmond" }, { "code": "ZRL", "city": "Lancaster" }, { "code": "ZRP", "city": "Newark" }, { "code": "ZRT", "city": "Hartford" }, { "code": "ZRU", "city": "Boston" }, { "code": "ZRV", "city": "Providence" }, { "code": "ZSF", "city": "Springfield" }, { "code": "ZTD", "city": "Schenectady" }, { "code": "ZTE", "city": "Rochester" }, { "code": "ZTF", "city": "Stamford" }, { "code": "ZTJ", "city": "Princeton" }, { "code": "ZTN", "city": "Philadelphia" }, { "code": "ZTO", "city": "Boston" }, { "code": "ZTV", "city": "Louisville" }, { "code": "ZTY", "city": "Boston" }, { "code": "ZUA", "city": "Utica" }, { "code": "ZUG", "city": "Harrisburg" }, { "code": "ZUN", "city": "Zuni" }, { "code": "ZVE", "city": "New Haven" }, { "code": "ZWB", "city": "Hampton" }, { "code": "ZWI", "city": "Wilmington" }, { "code": "ZWU", "city": "Washington" }, { "code": "ZWV", "city": "Glenview" }, { "code": "ZWW", "city": "Hampton" }, { "code": "ZYP", "city": "New York" }, { "code": "ZYQ", "city": "Syracuse" }];
        this.toDeleteId = '';
        this.toUpdateId = '';
        this.toastr.setRootViewContainerRef(vcr);
    }
    DashboardComponent.prototype.isUpcomming = function (departureDate) {
        if (new Date(departureDate) > this.today) {
            return true;
        }
        else {
            return false;
        }
    };
    DashboardComponent.prototype.gotoHome = function () {
        this.router.navigate(['']);
    };
    DashboardComponent.prototype.logout = function () {
        localStorage.removeItem('id');
        this.toastr.success("Logout Sucessful!", 'Success!');
        setTimeout(function () { window.location.reload(); }, 1000);
    };
    DashboardComponent.prototype.prepareDelete = function (id) {
        console.log(id);
        this.toDeleteId = id;
    };
    DashboardComponent.prototype.prepareEdit = function (id) {
        var _this = this;
        console.log(id);
        this.toUpdateId = id;
        this.http.post("http://thethinkcity.com:3000/api/get-single-alert", {
            'id': this.toUpdateId
        })
            .subscribe(function (val) {
            _this.updateData = val;
            console.log("update", _this.updateData);
            if (val['data'].oneWay == true) {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateDatepickerReturn").css("display", "none");
                // $("#updateDatepickerTo").removeClass("col-md-offset-3");
                // $("#updateDatepickerTo").addClass("col-md-offset-5");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateDatepickerDash").css("display", "none");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateOneway").click();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateDatepickerReturn").css("display", "block");
                // $("#updateDatepickerTo").removeClass("col-md-offset-5");
                // $("#updateDatepickerTo").addClass("col-md-offset-3");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateDatepickerDash").css("display", "block");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateRound").click();
            }
            __WEBPACK_IMPORTED_MODULE_1_jquery__('[data-id=updateFrom]').html('<span class="filter-option pull-left">' + _this.getLocation(val['data'].fromCode) + '</span>');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('[data-id=updateTo]').html('<span class="filter-option pull-left">' + _this.getLocation(val['data'].toCode) + '</span>');
            //$('#updateFrom').val( val['data'].fromCode);
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateFromDate').val(_this.getDateUpdate(val['data'].departureDate));
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateSel1').val(val['data'].passengerCount);
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateSel2').val(val['data'].sendFrequencyId);
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateToDate').val(_this.getDateUpdate(val['data'].returnDate));
            // $('#updateToDate').val(this.getDate(new Date(val['data'].departureDate)));
            // $('#updateSel1 option').each(() => {
            //   if( $(this).attr('value') == 2 ) { $(this).attr('selected','selected'); }
            // });
            console.log(val);
        }, function (response) {
            console.log("POST call in error", response);
        }, function () {
        });
    };
    DashboardComponent.prototype.updateAlert = function () {
        var _this = this;
        this.updateFrom = __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateFrom').val();
        this.updateTo = __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateTo').val();
        this.updateFromDate = __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateFromDate').val();
        var isAddable = true;
        this.updateAdults = __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateSel1").val();
        this.updateSendEvery = __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateSel2").val();
        if (this.updateFrom == this.updateTo) {
            this.updateFrom = this.updateData['data'].fromCode;
            this.updateTo = this.updateData['data'].toCode;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".bootstrap-select").css("border-bottom", "none");
        }
        if ((this.updateAdults).length == 0 || (this.updateSendEvery).length == 0) {
            if ((this.adults).length == 0) {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateSel1").addClass("selectError");
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateSel1").removeClass("selectError");
            }
            if ((this.updateSendEvery).length == 0) {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateSel2").addClass("selectError");
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateSel2").removeClass("selectError");
            }
            this.toastr.error("Please Complete required fields!", 'Error!');
            isAddable = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateSel1").removeClass("selectError");
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateSel2").removeClass("selectError");
        }
        if (this.updateTripType != "oneway") {
            this.updateToDate = __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateToDate').val();
        }
        else {
            this.updateToDate = '-';
        }
        if (this.updateTripType != "oneway") {
            if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#updateToDate').val() < __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateFromDate').val()) {
                this.toastr.error("Invalid Travel Dates!", 'Error!');
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateFromDate").css("color", "red");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateToDate").css("color", "red");
                isAddable = false;
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateFromDate").css("color", "#555");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateToDate").css("color", "#555");
            }
        }
        var oneway = true;
        var round = false;
        if (this.updateTripType == "oneway") {
            oneway = true;
            round = false;
        }
        else if (this.updateTripType == "round") {
            oneway = false;
            round = true;
        }
        this.data = {
            "id": localStorage.getItem("id"),
            "from": this.updateFrom,
            "to": this.updateTo,
            "departureDate": this.updateFromDate,
            "returnDate": this.updateToDate,
            "oneway": oneway,
            "miles": this.updateMiles,
            "exactDates": '-',
            "passengerCount": this.updateAdults,
            "stops": this.updateConnections,
            "duration": '-',
            "airlines": '-',
            "travelClass": this.updateClass,
            "isActive": true,
            "sendEvery": this.updateSendEvery,
            "alertId": this.toUpdateId
        };
        console.log(this.data);
        if ((this.updateAdults).length == 0) {
            this.data.passengerCount = '-';
        }
        if ((this.updateClass).length == 0) {
            this.data.travelClass = '-';
        }
        if ((this.updateConnections).length == 0) {
            this.data.stops = '-';
        }
        if ((this.updateMiles).length == 0) {
            this.data.miles = '-';
        }
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#updateSelectClass').attr('disabled') == 'disabled') {
            this.updateConnections = '';
            this.updateMiles = '';
        }
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#updateSelectConnections').attr('disabled') == 'disabled') {
            this.updateClass = '';
            this.updateMiles = '';
        }
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#updateSelectMiles').attr('disabled') == 'disabled') {
            this.updateConnections = '';
            this.updateClass = '';
        }
        if (isAddable) {
            this.http.post("http://thethinkcity.com:3000/api/update", this.data)
                .subscribe(function (val) {
                if (val == 1) {
                    _this.toastr.success("Alert Update!", 'Success!');
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }
                else {
                    _this.toastr.error("An unexpected error occured!", 'Error!');
                }
                console.log(val);
            }, function (response) {
                _this.toastr.error("An unexpected error occured!", 'Error!');
                console.log("POST call in error", response);
            }, function () {
                // console.log("The POST observable is now completed.");
            });
        }
    };
    DashboardComponent.prototype.deleteAlert = function () {
        var _this = this;
        this.http.post("http://thethinkcity.com:3000/api/delete-alert", {
            'id': this.toDeleteId
        })
            .subscribe(function (val) {
            console.log(val);
        }, function (response) {
            _this.toastr.error("Error while deleting!", 'Error');
            console.log("POST call in error", response);
        }, function () {
            _this.toastr.success("Alert Deleted!", 'Error');
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".close").click();
            setTimeout(function () { location.reload(); }, 1000);
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSearching = true;
        __WEBPACK_IMPORTED_MODULE_1_jquery__("input[name='optradio']").change(function (e) {
            if (__WEBPACK_IMPORTED_MODULE_1_jquery__(this).val() == 'oneway') {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#datepickerDash').css('display', 'none');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#datepickerReturn').css('display', 'none');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#datepickerTo').css('margin-right', '5%');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#datepickerDash').css('display', 'block');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#datepickerReturn').css('display', 'block');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#datepickerTo').css('margin-right', '0%');
            }
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__("input[name='optradio1']").change(function (e) {
            if (__WEBPACK_IMPORTED_MODULE_1_jquery__(this).val() == 'oneway') {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateDatepickerDash').css('display', 'none');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateDatepickerReturn').css('display', 'none');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateDatepickerTo').css('margin-right', '5%');
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateDatepickerTo").removeClass("col-md-offset-3");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateDatepickerTo").addClass("col-md-offset-5");
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateDatepickerDash').css('display', 'block');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateDatepickerReturn').css('display', 'block');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#updateDatepickerTo').css('margin-right', '0%');
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateDatepickerTo").removeClass("col-md-offset-5");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#updateDatepickerTo").addClass("col-md-offset-3");
            }
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#selectClass").change(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#radioClass').click();
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectClass').removeAttr('disabled');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectConnections').attr('disabled', 'disabled');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectMiles').attr('disabled', 'disabled');
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#selectConnections").change(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#radioConnections').click();
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectConnections').removeAttr('disabled');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectClass').attr('disabled', 'disabled');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectMiles').attr('disabled', 'disabled');
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#selectMiles").change(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#radioMiles').click();
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectMiles').removeAttr('disabled');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectClass').attr('disabled', 'disabled');
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectConnections').attr('disabled', 'disabled');
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__("input[name='optradio2']").change(function (e) {
            if (__WEBPACK_IMPORTED_MODULE_1_jquery__(this).val() == 'class') {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectClass').removeAttr('disabled');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectConnections').attr('disabled', 'disabled');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectMiles').attr('disabled', 'disabled');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectConnections').prop('selectedIndex', 0);
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectMiles').prop('selectedIndex', 0);
                this.connections = '';
                this.miles = '';
            }
            else if (__WEBPACK_IMPORTED_MODULE_1_jquery__(this).val() == 'connections') {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectConnections').removeAttr('disabled');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectClass').attr('disabled', 'disabled');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectMiles').attr('disabled', 'disabled');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectClass').prop('selectedIndex', 0);
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectMiles').prop('selectedIndex', 0);
                this.class = '';
                this.miles = '';
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectMiles').removeAttr('disabled');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectClass').attr('disabled', 'disabled');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectConnections').attr('disabled', 'disabled');
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectConnections').prop('selectedIndex', 0);
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#selectClass').prop('selectedIndex', 0);
                this.connections = '';
                this.class = '';
            }
        });
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#oneway").click();
        }, 1000);
        if (localStorage.getItem('id')) {
            if (parseInt(localStorage.getItem('id')) > 0) {
                this.http.post("http://thethinkcity.com:3000/api/get-user", {
                    'id': localStorage.getItem('id')
                })
                    .subscribe(function (val) {
                    console.log(val['data']);
                    if (val['status'] == 'Error') {
                        _this.toastr.warning("Your session expired!", 'Error');
                        localStorage.removeItem('id');
                        setTimeout(function () {
                            _this.router.navigate(["dashboard"]);
                        });
                    }
                    else {
                        _this._imageUrl = val['data'].profile_picture;
                        _this._firstName = val['data'].FirstName;
                        _this._lastName = val['data'].LastName;
                        _this._email = val['data'].EmailAddress;
                        _this._username = val['data'].UserName;
                        // $('#all').click(()=>{
                        //   console.log("Here");
                        //   $('#allDiv').css('display','visible');
                        //
                        //   $('#oldDiv').css('display','none');
                        //   $('#currentDiv').css('display','none');
                        // });
                        //
                        _this.http.post("http://thethinkcity.com:3000/api/get-alert-all", {
                            'id': localStorage.getItem('id')
                        })
                            .subscribe(function (val) {
                            console.log(val);
                            _this.listAll = val;
                        }, function (response) {
                            console.log("POST call in error", response);
                        }, function () {
                            //
                            // $('#upcomming').click(()=>{
                            //   $('#allDiv').css('display','none');
                            //
                            //   $('#oldDiv').css('display','none');
                            //   $('#currentDiv').css('display','block');
                            // });
                            _this.http.post("http://thethinkcity.com:3000/api/get-alert-expired", {
                                'id': localStorage.getItem('id')
                            })
                                .subscribe(function (val) {
                                console.log(val);
                                _this.listOld = val;
                            }, function (response) {
                                console.log("POST call in error", response);
                            }, function () {
                                _this.http.post("http://thethinkcity.com:3000/api/get-alert-upcomming", {
                                    'id': localStorage.getItem('id')
                                })
                                    .subscribe(function (val) {
                                    console.log("Upcomming", val);
                                    _this.listCurrent = val;
                                }, function (response) {
                                    console.log("POST call in error", response);
                                }, function () {
                                    // $('#expired').click(()=>{
                                    //   $('#allDiv').css('display','none');
                                    //
                                    //   $('#oldDiv').css('display','block');
                                    //   $('#currentDiv').css('display','none');
                                    // });
                                    //
                                    _this.isSearching = false;
                                });
                            });
                        });
                    }
                }, function (response) {
                    console.log("POST call in error", response);
                }, function () {
                    // console.log("The POST observable is now completed.");
                });
            }
        }
        else {
            this.router.navigate([""]);
        }
    };
    DashboardComponent.prototype.save = function () {
        var _this = this;
        this.from = __WEBPACK_IMPORTED_MODULE_1_jquery__('#from').val();
        this.to = __WEBPACK_IMPORTED_MODULE_1_jquery__('#to').val();
        this.fromDate = __WEBPACK_IMPORTED_MODULE_1_jquery__('#fromDate').val();
        var isAddable = true;
        if (this.from == this.to) {
            this.toastr.error("From and To airport can not be same!", 'Error!');
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".bootstrap-select").css("border-bottom", "1px solid red");
            isAddable = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".bootstrap-select").css("border-bottom", "none");
        }
        if ((this.adults).length == 0 || (this.sendEvery).length == 0) {
            if ((this.adults).length == 0) {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#sel1").addClass("selectError");
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#sel1").removeClass("selectError");
            }
            if ((this.sendEvery).length == 0) {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#sel2").addClass("selectError");
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#sel2").removeClass("selectError");
            }
            this.toastr.error("Please Complete required fields!", 'Error!');
            isAddable = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#sel1").removeClass("selectError");
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#sel2").removeClass("selectError");
        }
        if (this.tripType != "oneway") {
            this.toDate = __WEBPACK_IMPORTED_MODULE_1_jquery__('#toDate').val();
        }
        else {
            this.toDate = '-';
        }
        if (this.tripType != "oneway") {
            if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#toDate').val() < __WEBPACK_IMPORTED_MODULE_1_jquery__('#fromDate').val()) {
                this.toastr.error("Invalid Travel Dates!", 'Error!');
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#fromDate").css("color", "red");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#toDate").css("color", "red");
                isAddable = false;
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#fromDate").css("color", "#555");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#toDate").css("color", "#555");
            }
        }
        var oneway = true;
        var round = false;
        if (this.tripType == "oneway") {
            oneway = true;
            round = false;
        }
        else if (this.tripType == "round") {
            oneway = false;
            round = true;
        }
        this.data = {
            "id": localStorage.getItem("id"),
            "from": this.from,
            "to": this.to,
            "departureDate": this.fromDate,
            "returnDate": this.toDate,
            "oneway": oneway,
            "miles": this.miles,
            "exactDates": '-',
            "passengerCount": this.adults,
            "stops": this.connections,
            "duration": '-',
            "airlines": '-',
            "travelClass": this.class,
            "isActive": true,
            "sendEvery": this.sendEvery
        };
        console.log(this.data);
        if ((this.adults).length == 0) {
            this.data.passengerCount = '-';
        }
        if ((this.class).length == 0) {
            this.data.travelClass = '-';
        }
        if ((this.connections).length == 0) {
            this.data.stops = '-';
        }
        if ((this.miles).length == 0) {
            this.data.miles = '-';
        }
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#selectClass').attr('disabled') == 'disabled') {
            this.connections = '';
            this.miles = '';
        }
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#selectConnections').attr('disabled') == 'disabled') {
            this.class = '';
            this.miles = '';
        }
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#selectMiles').attr('disabled') == 'disabled') {
            this.connections = '';
            this.class = '';
        }
        if (isAddable) {
            this.http.post("http://thethinkcity.com:3000/api/save-alert", this.data)
                .subscribe(function (val) {
                if (val == 1) {
                    _this.toastr.success("Alert Saved!", 'Success!');
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }
                else {
                    _this.toastr.error("An unexpected error occured!", 'Error!');
                }
                console.log(val);
            }, function (response) {
                _this.toastr.error("An unexpected error occured!", 'Error!');
                console.log("POST call in error", response);
            }, function () {
                // console.log("The POST observable is now completed.");
            });
        }
    };
    DashboardComponent.prototype.getLocation = function (id) {
        for (var key in this.airportDate) {
            if ((this.airportDate).hasOwnProperty(key)) {
                if (this.airportDate[key].code == id) {
                    return this.airportDate[key].city;
                }
            }
        }
        // if(id == 'LON'){
        //   return 'London';
        // }
        //
        // if(id == 'ALA'){
        //   return 'Alaska';
        // }
        //
        // if(id == 'ARI'){
        //   return 'Arizona';
        // }
        //
        // if(id == 'ARK'){
        //   return 'Arkansas';
        // }
        //
        // if(id == 'CA'){
        //   return 'California';
        // }
        //
        // if(id == 'COL'){
        //   return 'Colorado';
        // }
        //
        // if(id == 'CON'){
        //   return 'Connecticut';
        // }
        //
        // if(id == 'DEL'){
        //   return 'Delaware';
        // }
        //
        // if(id == 'FLO'){
        //   return 'Florida';
        // }
        //
        //
        // if(id == 'BOS'){
        //   return 'Boston';
        // }
    };
    DashboardComponent.prototype.getDateUpdate = function (date) {
        var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
        var d = new Date(((date.substr(0, 10)).replace('-', '/')).replace('-', '/'));
        var curr_date = d.getDate();
        var curr_month = d.getMonth();
        var curr_year = d.getFullYear();
        var month = curr_month + 1;
        var stringMonth = '';
        if ((month.toString()).length == 1) {
            stringMonth = "0" + month;
        }
        return (stringMonth + "/" + curr_date
            + "/" + curr_year);
    };
    DashboardComponent.prototype.getDate = function (date) {
        var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
        var d = new Date(((date.substr(0, 10)).replace('-', '/')).replace('-', '/'));
        var curr_date = d.getDate();
        var curr_month = d.getMonth();
        var curr_year = d.getFullYear();
        return (curr_date + "-" + m_names[curr_month]
            + "-" + curr_year);
    };
    DashboardComponent.prototype.showAll = function () {
        console.log("1");
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#allDiv').css('display', 'block');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#oldDiv').css('display', 'none');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#currentDiv').css('display', 'none');
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#all").css('color', '#034fa1');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#upcomming').css('color', '#DDDDDD');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#expired').css('color', '#DDDDDD');
    };
    DashboardComponent.prototype.showUpcomming = function () {
        console.log("2");
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#allDiv').css('display', 'none');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#oldDiv').css('display', 'block');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#currentDiv').css('display', 'none');
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#all").css('color', '#DDDDDD');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#upcomming').css('color', '#034fa1');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#expired').css('color', '#DDDDDD');
    };
    DashboardComponent.prototype.showExpired = function () {
        console.log("3");
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#allDiv').css('display', 'none');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#oldDiv').css('display', 'none');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#currentDiv').css('display', 'block');
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#all").css('color', '#DDDDDD');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#upcomming').css('color', '#DDDDDD');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#expired').css('color', '#034fa1');
    };
    DashboardComponent.prototype.showHideAdvance = function () {
        if (this.isAdvancedVisible) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#add').removeClass("slideInDown");
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#add').removeClass("slideOutUp");
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#add').addClass("slideOutUp");
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#add').css("display", "none");
                __WEBPACK_IMPORTED_MODULE_1_jquery__('#btnSave1').css("display", "block");
            }, 1000);
            this.isAdvancedVisible = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#add').css("display", "block");
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#add').removeClass("slideInDown");
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#add').removeClass("slideOutUp");
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#add').addClass("slideInDown");
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#btnSave1').css("display", "none");
            this.isAdvancedVisible = true;
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n\nbody{\n  background-color: #F6F6F6;\n}\n\n/*NAVBAR*/\n\n.navbar-default{\n  background-color: transparent;\n  border-color: transparent;\n  border: none;\n  font-weight: 100;\n  font-size: 0.8em;\n\n}\n\n.navbar-default .navbar-nav .l{\n\n  border-right: 1px #6c757d solid;\n  height: 40px;\n}\n\n.navbar-default .navbar-nav li a {\n  color: #FFFFFF;\n}\n\n.navbar-nav{\n  color: #FFFFFF;\n  padding-top: 20px;\n}\n\n.s p{\n  line-height: 0;\n  font-weight: 100;\n  font-size: 0.8em;\n}\n\n.s h4{\n  font-weight: 100;\n  font-size: 0.9em;\n}\n\n/*NAVBAR-ENDS*/\n\n/*HOME*/\n\n#home{\n  background: url('header-bg.8a5de50a3bfe616559b0.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n}\n\n#home h2{\n  line-height: 1.3;\n  padding-top: 200px;\n  padding-bottom: 15px;\n  color: white;\n  font-weight: 200;\n  font-size: 2.9em;\n}\n\n#home p{\n  line-height: 2;\n  color: white;\n  margin-bottom: 35px;\n  font-size: 1.3em;\n  font-weight: 400;\n}\n\n#home .p{\n  padding-bottom: 60px;\n}\n\n#home .r{\n  padding-bottom: 150px;\n  text-align: center;\n}\n\n#home .btn1{\n  /*margin-top: 20px;*/\n  /*margin-bottom: 100px;*/\n  padding-right: 40px;\n  padding-left: 40px;\n  background-color: #014FA2;\n  border-radius: 20px;\n  border: none;\n}\n\n#home .btn2{\n  background-color: transparent;\n  border-color: #FFFFFF;\n  border-radius: 20px;\n  padding-right: 40px;\n  padding-left: 40px;\n}\n\n#home .navigation .menu a{\n  color: #FFFFFF;\n}\n\n/*HOME-ENDS*/\n\n/*FLIGHT*/\n\n#flight .container{\n  margin-top: -7px;\n  position: relative;\n}\n\n#flight .i{\n  text-align: center;\n}\n\n#flight p{\n  text-align: center;\n}\n\n#flight .f{\n  background-color: #FFFFFF;\n  text-align: center;\n  z-index: 2;\n}\n\n#flight .r{\n  margin-top: 30px\n}\n\n#flight .i{\n  margin-top: 50px;\n}\n\n#flight p{\n  color: #B7B7B7;\n}\n\n#flight .r1{\n  margin-top: 60px;\n  margin-left: -30px;\n}\n\n#flight .r2{\n  margin-top: 175px;\n  margin-left: 25px;\n}\n\n#flight .r3{\n  position: relative;\n  margin-top: 25px;\n  margin-right: -16px;\n  float: right;\n  z-index: -1;\n}\n\n/*FLIGHT-ENDS*/\n\n/*FEATURES*/\n\n#features .container{\n  margin-top: -38px;\n  background-color:#014FA2;\n  color :#FFFFFF;\n}\n\n#features h1{\n  font-weight: 200;\n  font-size: large;\n}\n\n#features h4{\n  font-weight: 300;\n  font-size: inherit;\n}\n\n#features p{\n  color: #CFD2D5;\n  font-size: small;\n  font-weight: 200;\n}\n\n#features .top{\n  margin-top: 30px;\n  text-align: center;\n}\n\n#features .btn {\n  color: #ffffff;\n  border-color: #FFFFFF;\n  background-color: transparent;\n  border-radius: 20px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-right: 50px;\n  padding-left: 50px;\n}\n\n#features .middle1{\n  margin-top: 50px;\n  /*text-align: center;*/\n}\n\n#features .middle2{\n  margin-top: 50px;\n}\n\n#features .end{\n  text-align: center;\n  margin-top: 50px;\n  margin-bottom: 60px;\n}\n\n/*FEATURES-ENDS*/\n\n/*CARRIERS*/\n\n#carriers .container{\n  background-color: #FFFFFF;\n}\n\n#carriers h3{\n  font-weight: 200;\n}\n\n#carriers p{\n  color: #D8D8D8;\n  font-size: 1em;\n  font-weight: 200;\n}\n\n#carriers .top{\n  text-align: center;\n  margin-top: 40px;\n}\n\n#carriers .i{\n  margin-top: 25px;\n}\n\n#carriers .middle1{\n  margin-top: 70px;\n  text-align: -webkit-center;\n}\n\n#carriers .middle2{\n  margin-top: 70px;\n  text-align: -webkit-center;\n}\n\n#carriers .middle3{\n  text-align: -webkit-center;\n  margin-top: 70px;\n  margin-bottom: 65px;\n}\n\n/*CARRIERS-ENDS*/\n\n/*NEWSLETTER*/\n\n#newsletter .container{\n  background-color:#014FA2;\n  color: #FFFFFF;\n}\n\n#newsletter{\n  text-align: center;\n}\n\n#newsletter h1{\n  font-size: 1.6em;\n  font-weight: 200;\n  margin-top: 45px;\n  margin-bottom: 35px;\n}\n\n#newsletter .l{\n  margin-bottom: 45px;\n}\n\n#newsletter .fa{\n  float: right;\n  position: absolute;\n  margin-top: 10px;\n  margin-left: -26px;\n  color: #014FA2;\n}\n\n#newsletter input{\n  padding-right: 240px;\n  padding-left: 16px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  border-radius: 21px;\n  border: none;\n  color: #BCBCBC;\n  font-size: 1.1em;\n  font-weight: 200;\n}\n\n/*NEWSLETTERENDS*/\n\n/*FAQ'S*/\n\n#faq .container{\n  background-color: #FFFFFF;\n}\n\n#faq .top{\n  text-align: center;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n\n#faq h2{\n  font-size: 1.8em;\n  font-weight: 200;\n\n}\n\n#faq .top p{\n  color : #858585;\n  font-size: 0.9em;\n  font-weight: 200;\n}\n\n#faq p{\n  color : #B1B7BD;\n  font-size: 0.9em;\n  font-weight: 200;\n  letter-spacing: 1px;\n  line-height: 25px;\n}\n\n#faq .grp{\n  margin-left: 5%;\n  margin-right: 3%;\n}\n\n#faq h3{\n  font-size: 1.2em;\n  font-weight: 200;\n  line-height: 40px;\n\n}\n\n#faq .last{\n  margin-bottom: 70px;\n}\n\n/*FAQ'S-ENDS*/\n\n/*FOOTER*/\n\n#footer .container{\n  background-color: #0F346C;\n}\n\n#footer .one{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n#footer img{\n  margin-left: 55px;\n}\n\n#footer h5{\n  margin-top: 14px;\n  margin-left: 22px;\n  font-size: 1.1em;\n  font-weight: 200;\n  color: #FFFFFF;\n}\n\n#footer .fa{\n  color: #FFFFFF;\n}\n\n/*FOOTER-ENDS*/\n\n/*MEDIA*/\n\n@media (max-width:768px) {\n\n  .logo img {\n    margin-left: 10px;\n  }\n  #navbar{\n    display: block;\n  }\n  .logo1{\n    display: none;\n  }\n  .navbar-toggle {\n    margin-top:20px;\n    margin-right:15px;\n  }\n  .navbar-default .navbar-nav .l{\n    display: none;\n  }\n  #home .btn1{\n    padding-right: 25px;\n    padding-left: 25px;\n  }\n  #home .btn2{\n    padding-right: 20px;\n    padding-left: 20px;\n  }\n  #flight .r1{\n    display: none;\n  }\n  #flight .r2{\n    display: none;\n  }\n  #flight .r3{\n    margin-top: 30px;\n    float: initial;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  #flight .i{\n    margin-left: -3px;\n  }\n  #features .middle1{\n    text-align: center;\n  }\n  #features .middle2{\n    text-align: center;\n  }\n  #features .i{\n    margin-top: 25px;\n  }\n  #carriers .i{\n    margin-left: -3px;\n  }\n  #newsletter input{\n    padding-right:145px;\n    padding-left: 16px;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    border-radius: 21px;\n    border: none;\n    color: #BCBCBC;\n    font-size: 1.1em;\n    font-weight: 200;\n  }\n  #faq .grp {\n    text-align: center;\n    margin-left: 0%;\n    margin-right: 0%;\n  }\n  #footer .txt{\n    text-align: center;\n  }\n\n  #footer .one{\n    text-align: center;\n  }\n\n  .footerSocialMediaIcons{\n    margin-left: 30%;\n  }\n}\n\n@media (max-width:992px){\n\n  #flight .r2{\n    margin-top: 160px;\n    margin-left: -15px;\n  }\n}\n\n@media (max-width:375px){\n  #footer img {\n    margin-left: 15px;\n  }\n}\n\n.pricingText{\n  text-align: center;\n}\n\n.promo {\n  width: 250px;\n  background: #FFFFFF;\n  color: #f9f9f9;\n  float: left;\n}\n\n.deal {\n  padding: 10px 0 0 0;\n}\n\n.deal span {\n  display: block;\n  text-align: center;\n}\n\n.deal span:first-of-type {\n  font-size: 23px;\n}\n\n.deal span:last-of-type {\n  font-size: 23px;\n}\n\n.promo .price {\n  display: block;\n  width: 100%;\n  background: #F6F6F6;\n  margin: 15px 0 10px 0;\n  text-align: center;\n  font-size: 43px;\n  padding: 17px 0 17px 0;\n}\n\nul {\n  display: block;\n  margin: 20px 0 10px 0;\n  padding: 0;\n  list-style-type: none;\n  text-align: left;\n  color: #203B4E;\n}\n\nli {\n  display: block;\n  margin: 10px 0 0 0;\n}\n\n.scale {\n  /*transform: scale(1.2);*/\n  -webkit-box-shadow: 0 0 4px 1px #d4dbe2;\n          box-shadow: 0 0 4px 1px #d4dbe2;\n}\n\n.scale .price {\n  color: #203B4E;\n}\n\n.pricingSubtext{\n  color: #969696;\n}\n\n.price p{\n  font-size: 19px;\n  color: #8E8D8D;\n}\n\n.deal span{\n  color: #203B4E;\n}\n\n.features {\n  margin-right: 5%;\n  margin-left: 5%;\n  line-height: 2em;\n}\n\n.features li img{\n  margin-right: 3%;\n}\n\n#pricing .btn2 {\n  background-color: transparent;\n  border-color: #014FA2;\n  color: #014FA2;\n  border-radius: 20px;\n  padding-right: 40px;\n  padding-left: 40px;\n  margin-bottom: 10%;\n  padding-top: 3%;\n  margin-top: 10%;\n  padding-bottom: 3%;\n}\n\n.promo.scale{\n  text-align: center;\n  width: 100%;\n}\n\n#pricing .btn3 {\n  background-color: transparent;\n  border-color: #ffffff;\n  color: #ffffff;\n  background-color: #014FA2;\n  border-radius: 20px;\n  padding-right: 40px;\n  padding-left: 40px;\n  margin-bottom: 10%;\n  padding-top: 3%;\n  margin-top: 10%;\n  padding-bottom: 3%;\n}\n\n.pricingCardHolder{\n  margin-top: 3%;\n  margin-left: 8%;\n  margin-right: 8%;\n}\n\n.pricingHeadingHolder{\n  margin-top: 4%;\n}\n\n.pricingContainer{\n  background: white;\n  padding-bottom: 5%;\n}\n\n@media (max-width:400px){\n  #sideBarToggle{\n    display: block !important;\n  }\n\n\n  .pricingCardHolder > div{\n    margin-bottom: 10%;\n  }\n\n  .features{\n    line-height: 1.5em;\n  }\n\n  #pricing .btn2{\n    margin-bottom: 7%;\n    margin-top: 5%;\n  }\n\n  #pricing .btn3{\n    margin-bottom: 7%;\n    margin-top: 5%;\n  }\n\n  .pricingCardHolder {\n    margin-left: 1%;\n    margin-right: 1%;\n    margin-top: 10%;\n  }\n\n  .pricingSubtext{\n    margin-right: 1%;\n    margin-left: 1%;\n  }\n\n  .signupModalDialog{\n    width: 80% !important;\n    margin-right: 10%;\n    margin-left: 10%;\n  }\n\n  .signUp-left-div{\n    display: none;\n  }\n\n  .login-para{\n    margin-left: 0px !important;\n  }\n\n  .signinModalDialog{\n    width: 80% !important;\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n\n}\n\n@media (max-width:992px){\n  .pricingCardHolder{\n    margin-left: 1%;\n    margin-right: 1%;\n  }\n\n  .features{\n    line-height: 1.5em;\n  }\n\n  .reviewContent{\n    margin-left: 5%;\n    margin-right: 5%;\n  }\n\n  .reviewPeople{\n    text-align: center;\n  }\n}\n\n.usersFeedbackContainer{\n  background-color: #014FA2;\n}\n\n.usersFeedbackText{\n  text-align: center;\n}\n\n.usersFeedbackText > h3{\n  color: white;\n}\n\n.usersFeedbackText > p{\n  color: #BCBCBC;\n}\n\n.reviews{\n  color: white;\n  font-size: 20px;\n  text-align: center;\n}\n\n.usersFeedbackHeading{\n  margin-top: 5%;\n  margin-bottom: 6%;\n}\n\n.usersFeedbackQuotes{\n  margin-bottom: 2%;\n}\n\n.reviewContent{\n  line-height: 2.4em;\n  letter-spacing: 0.1em;\n  font-weight: 100;\n}\n\n.reviewPeople{\n  margin-top: 6%;\n}\n\n.reviewName{\n  line-height: 0.7em;\n  margin-top: 5%;\n}\n\n.reviewName p:nth-child(1){\n  font-size: 16px;\n  color: white;\n}\n\n.reviewName p:nth-child(2){\n  font-size: 14px;\n  color: white;\n}\n\n.faded{\n  opacity: 0.5;\n}\n\n.notFaded{\n  opacity: 1;\n}\n\n.reviewPeople img{\n  width: 57px;\n}\n\n@media (max-width:670px){\n  .reviewName{\n    line-height: 1em;\n  }\n}\n\n@media (max-width:670px){\n  .reviewPeople div:nth-child(3){\n    padding: 0;\n  }\n}\n\n#pricing button:hover {\n  background-color: transparent;\n  border-color: #ffffff;\n  color: #ffffff;\n  background-color: #014FA2;\n  border-radius: 20px;\n  padding-right: 40px;\n  padding-left: 40px;\n  margin-bottom: 10%;\n  padding-top: 3%;\n  margin-top: 10%;\n  padding-bottom: 3%;\n}\n\n.hamburger {\n  height: 30px;\n  margin: 26px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: (1fr)[3];\n      grid-template-rows: repeat(3, 1fr);\n  justify-items: center;\n  z-index: 120;\n}\n\n.hamburger div {\n  background-color: rgb(255, 255, 255);\n  position: relative;\n  width: 40px;\n  height: 2px;\n  margin-top: 7px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n#toggle {\n  display: none;\n}\n\n#toggle:checked + .hamburger .top {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  margin-top: 22.5px;\n}\n\n#toggle:checked + .hamburger .meat {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  margin-top: -5px;\n}\n\n#toggle:checked + .hamburger .bottom {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n#toggle:checked ~ .menu {\n  height: 480px;\n}\n\n/* Menu */\n\n.menu {\n  width: 100%;\n  background-color: #067df4;\n  /*opacity: 0.9;*/\n  margin: 0;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr (0.5fr)[4];\n      grid-template-rows: 1fr repeat(4, 0.5fr);\n  grid-row-gap: 25px;\n  padding: 0;\n  list-style: none;\n  clear: both;\n  width: auto;\n  text-align: center;\n  height: 0px;\n  overflow: hidden;\n  -webkit-transition: height 0.4s ease;\n  transition: height 0.4s ease;\n  z-index: 120;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\na:focus, a:hover {\n  text-decoration: none !important;\n}\n\n.menu a{\n  color: #FFFFFF;\n}\n\n.menu a:first-child {\n  margin-top: 58px;\n}\n\n.link {\n  width: 100%;\n  margin: 0;\n  /*padding: 10px 0;*/\n  font: 700 20px \"Oswald\", sans-serif;\n}\n\n/*.link:hover {*/\n\n/*color:#FFFFFF;*/\n\n/*background-color: transparent;*/\n\n/*color: rgb(61, 61, 61);*/\n\n/*-webkit-transition: all 0.3s ease;*/\n\n/*transition: all 0.3s ease;*/\n\n/*}*/\n\n@media (max-width:767px){\n\n  #navbar1{\n    display: none;\n  }\n\n  #navbar{\n    display: block;\n  }\n}\n\na{\n  cursor: pointer;\n}\n\n@media (max-width:400px){\n  .hamburger{\n    margin-right: 35px;\n    margin-top: 20px;\n  }\n  #flight .container{\n    margin-top: -9px;\n    position: relative;\n  }\n}\n\n.navigation{\n  display: none;\n}\n\n@media (max-width:767px) {\n  .pricingCardHolder > div {\n    margin-bottom: 10%;\n  }\n}\n\n@media (max-width:339px){\n  #flight .flightdetails {\n    width: 80.33%\n  }\n  #carriers .carrierdetails{\n    witdh:80.33%;\n  }\n}\n\n@media (min-width:1528px){\n  #flight .container{\n    margin-top: 0px;\n    position: relative;\n  }\n}\n\n@media (min-width:1518px) and (max-width:1523px) {\n  #flight .container{\n    margin-top: -3px;\n    position: relative;\n  }\n}\n\n@media (min-width:1523px) and (max-width:1525px) {\n  #flight .container{\n    margin-top: -3px;\n    position: relative;\n  }\n}\n\n@media (min-width:1526px) and (max-width:1528px) {\n  #flight .container{\n    margin-top: -1px;\n    position: relative;\n  }\n}\n\n@media (min-width:768px) and (max-width:992px) {\n  #footer .txt{\n    margin-left: 30%;\n  }\n  #footer .img{\n    margin-left: 35%;\n    padding-bottom: 10px;\n  }\n  .footerSocialMediaIcons{\n    padding-top: 10px;\n    margin-left: 36%;\n  }\n}\n\n@media (min-width: 768px) {\n  .hamburger{\n    display: none;\n  }\n  .menu a{\n    padding-bottom: 100px;\n  }\n\n}\n\n/*@media (max-width: 768px) {*/\n\n/*#flight .container{*/\n\n/*margin-top: -8.5px;*/\n\n/*z-index: -2;*/\n\n/*position: relative;*/\n\n/*}*/\n\n/*}*/\n\n.loginBtn{\n  padding-right: 40px;\n  padding-left: 40px;\n  background-color: #014FA2;\n  border-radius: 20px;\n  border: none;\n}\n\n.loginBtn:active{\n  color: #fff;\n  background-color: #034fa1;\n  border-color: #034fa1;\n}\n\n.signUp-whole-div{\n  background-color: white;\n  margin-top: 80px;\n}\n\n.signUp-left-div{\n  background-repeat: no-repeat;\n  background-image: url('nature-background-31.85392958f140dc4bc8b9.jpg');\n  opacity: 0.5;\n}\n\n.signUp-left-div-head{\n  font-weight: 300;\n  font-size: 3.5em;\n  margin-top: 80px;\n  color: #ffff;\n  text-align: center;\n}\n\n.sign-cross{\n  margin-top: 20px;\n  margin-right: 21px;\n  color: #929292;\n}\n\n.signUp-left-div-para {\n  font-weight: 300;\n  margin-top: 20px;\n  font-size: 1.2em;\n  color: #ffff;\n}\n\n.signUp-left-div-para2 {\n  font-weight: 300;\n  margin-top: 20px;\n  font-size: 1.2em;\n  color: #ffff;\n}\n\n.logo-img{\n  margin-top: 230px;\n  margin-bottom: 60px;\n}\n\n.form-group1{\n  margin-top: 65px;\n}\n\n.form-group{\n  margin-top: 15px;\n}\n\n.form-group1 , .form-group label{\n  color: #929292;\n  font-weight: 300;\n}\n\n.form-group1 label{\n  color: #929292;\n  font-weight: 300;\n}\n\n.form-control{\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: transparent;\n  border-bottom: 1px solid #929292;\n  border-radius: 0;\n}\n\n.signUp-anchor{\n  color: #014FA2;\n}\n\n.checkbox{\n  margin-top: 30px;\n}\n\n.btn-signUp {\n  font-size: 1.2em;\n  margin-top: 50px;\n  background-color: #014FA2;\n  color: #ffffff;\n  width: 180px;\n  height: 50px;\n\n}\n\n.btn-signUp:hover{\n  color: #ffffff;\n  text-decoration: none;\n}\n\n.checkbox label{\n  color: #929292;\n}\n\n.logIn{\n  color: #014FA2;\n}\n\n.login-para{\n  margin-top: 60px;\n  margin-left: 60px;\n  font-size: 1.4em;\n}\n\n@media(max-width: 768px) {\n  .logo-img {\n    margin-top: 5px;\n    margin-bottom: 60px;\n  }\n\n  .btn-signUp {\n    font-size: 1.2em;\n    margin-top: 50px;\n    background-color: #014FA2;\n    color: #ffffff;\n    width: 130px;\n    height: 40px;\n  }\n\n  .signUp-whole-div {\n    background-color: white;\n    margin-top: 80px;\n    padding-bottom: 20px;\n  }\n}\n\n/*******************************\n* MODAL AS LEFT/RIGHT SIDEBAR\n* Add \"left\" or \"right\" in modal parent div, after class=\"modal\".\n* Get free snippets on bootpen.com\n*******************************/\n\n.modal.left .modal-dialog,\n.modal.right .modal-dialog {\n  position: fixed;\n  margin: auto;\n  width: 320px;\n  height: 100%;\n  -webkit-transform: translate3d(0%, 0, 0);\n  transform: translate3d(0%, 0, 0);\n}\n\n.modal.left .modal-content,\n.modal.right .modal-content {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.modal.left .modal-body,\n.modal.right .modal-body {\n  padding: 15px 15px 80px;\n}\n\n/*Left*/\n\n.modal.left.fade .modal-dialog{\n  left: -320px;\n  -webkit-transition: opacity 0.3s linear, left 0.3s ease-out;\n  transition: opacity 0.3s linear, left 0.3s ease-out;\n}\n\n.modal.left.fade.in .modal-dialog{\n  left: 0;\n}\n\n/*Right*/\n\n.modal.right.fade .modal-dialog {\n  right: -320px;\n  -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;\n  transition: opacity 0.3s linear, right 0.3s ease-out;\n}\n\n.modal.right.fade.in .modal-dialog {\n  right: 0;\n}\n\n/* ----- MODAL STYLE ----- */\n\n.modal-content {\n  border-radius: 0;\n  border: none;\n}\n\n.modal-header {\n  border-bottom-color: #EEEEEE;\n  background-color: #FAFAFA;\n}\n\n/* ----- v CAN BE DELETED v ----- */\n\nbody {\n  background-color: #78909C;\n}\n\n.demo {\n  padding-top: 60px;\n  padding-bottom: 110px;\n}\n\n.btn-demo {\n  margin: 15px;\n  padding: 10px 15px;\n  border-radius: 0;\n  font-size: 16px;\n  background-color: #FFFFFF;\n}\n\n.btn-demo:focus {\n  outline: 0;\n}\n\n.demo-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  background-color: #212121;\n  text-align: center;\n}\n\n.demo-footer > a {\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #fff;\n}\n\n.sideBarCloseBtn:focus {\n  outline: none !important;\n}\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<script src=\"../../../../../TravelAirmiles/routes/index.js\"></script>-->\n<div class=\"navbar navbar-default navbar-fixed-top\" id=\"navbar\" role=\"navigation\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <div class=\"logo\">\n        <img  src=\"./../../assets/img/logo.png\">\n      </div>\n    </a>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-right n\">\n        <li><a href=\"#about\">ABOUT</a></li>\n        <li><a href=\"#blog \">BLOG</a></li>\n        <li class=\"l\"><div></div></li>\n        <li>\n\n          <div *ngIf=\"!loggedIn\" style=\"    margin-left: 10%;\n    margin-top: 6%;\" >\n            <button  class=\"loginBtn btn btn-success btn1\" type=\"button\" data-target=\"#signup\" data-toggle=\"modal\">Join</button>\n          </div>\n\n\n          <div *ngIf=\"loggedIn\"  (click)=\"showMenu();\" class=\"row s\" data-toggle=\"dropdown\">\n            <div class=\"col-md-offset-1 col-md-2 i \">\n              <img style=\"height: 30px; width: auto;\" src=\"{{_imageUrl}}\"/>\n            </div>\n\n\n            <div class=\"col-md-offset-1 col-md-8\">\n              <h4>\n                {{_firstName}} {{_lastName}}\n              </h4>\n              <p>\n                {{_username}}\n                <!--<img style=\"float: right; margin-top: -10%;\" src=\"./../../assets/img/expand-arow.png\"/>-->\n              </p>\n\n            </div>\n            <div class=\"col-md-1\">\n\n            </div>\n\n          </div>\n\n\n\n          <ul class=\"dropdown-menu\" id=\"dropdown\" style=\"display: none;\">\n            <li><a style=\"color: #5280C6;\" (click)=\"gotoDashboard();\">Dashboard</a></li>\n            <li><a style=\"color: #5280C6;\" (click)=\"logout();\" >Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n\n\n    <i class=\"fa fa-bars\"  id=\"sideBarToggle\" data-toggle=\"modal\" data-target=\"#myModal2\" style=\"float: right;\n    font-size: 2.5em;\n    color: white;\n    margin-top: 8%;\n     display: none;\n    margin-right: 5%;\" aria-hidden=\"true\"></i>\n\n\n\n    <!-- Modal -->\n    <div class=\"modal right fade\" id=\"myModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\" style=\"    margin-left: 30%;     color: white;\n    font-size: 1.5em;   background-color: #5487c2;\" >\n\n          <div class=\"modal-header\" style=\"    background-color: #5487c2; border-bottom-color: #5487c2; \">\n\n\n\n            <button type=\"button\" class=\"close sideBarCloseBtn\"  data-dismiss=\"modal\" style=\"    color: white;\n    opacity: 1;\n\n    font-size: 1.5em;\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\" id=\"myModalLabel2\"></h4>\n          </div>\n\n          <div class=\"modal-body\">\n\n            <div style=\"cursor:pointer; margin-bottom: 10%;\"><span>Home</span><i class=\"fa fa-home\" style=\"float: right;\" aria-hidden=\"true\"></i></div>\n            <div style=\"cursor:pointer;margin-bottom: 10%;\"><span>Blog</span><i class=\"fa fa-rss\" style=\"float: right;\" aria-hidden=\"true\"></i></div>\n            <div *ngIf=\"loggedIn\" style=\"cursor:pointer;margin-bottom: 10%;\" (click)=\"gotoDashboard();\"><span>Dashboard</span><i class=\"fa fa-dashboard\" style=\"float: right;\" aria-hidden=\"true\"></i></div>\n\n            <div *ngIf=\"!loggedIn\" data-target=\"#signup\" data-toggle=\"modal\" style=\"cursor:pointer; margin-top: 65vh;\"><span>Join</span><i class=\"fa fa-sign-in\" style=\"float: right;\" aria-hidden=\"true\"></i></div>\n\n            <div *ngIf=\"loggedIn\" (click)=\"logout();\"  style=\"cursor:pointer; margin-top: 30%;\"><span>Logout</span><i class=\"fa fa-sign-out\" style=\"float: right;\" aria-hidden=\"true\"></i></div>\n\n          </div>\n\n        </div><!-- modal-content -->\n      </div><!-- modal-dialog -->\n    </div><!-- modal -->\n\n\n\n\n\n\n\n\n    <!--<input id=\"toggle\" type=\"checkbox\" />-->\n    <!--<label class=\"hamburger\" for=\"toggle\" style=\"width: 5%; float: right;\">-->\n      <!--<div class=\"top\"></div>-->\n      <!--<div class=\"meat\"></div>-->\n      <!--<div class=\"bottom\"></div>-->\n    <!--</label>-->\n\n    <!--<nav class=\"menu\">-->\n      <!--<a class=\"link\">About</a>-->\n      <!--<a class=\"link\" >Blog</a>-->\n      <!--<a class=\"link\" >Profile</a>-->\n      <!--<a class=\"link\" >Dashboard</a>-->\n      <!--<a class=\"link\" >Logout</a>-->\n      <!--<a></a>-->\n    <!--</nav>-->\n  </div>\n</div>\n\n\n\n<!--NAVBAR-ENDS-->\n\n<!--HOME-->\n\n<section id=\"home\" class=\"img-responsive\" >\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-md-5 col-sm-7\">\n        <h2>Discover the potential\n          of your airmiles</h2>\n        <p>Get notified instantly on airmiles for the best\n          deals on your selected destinations.</p>\n      </div>\n    </div>\n    <div class=\"row r\">\n      <div class=\"col-md-2 col-sm-3 col-xs-4\">\n        <button type=\"button\" class=\"btn btn-success btn1\">Get Started</button>\n      </div>\n      <div class=\"col-md-2 col-sm-3 col-xs-3\">\n        <button data-toggle=\"modal\" data-target=\"#myModal\"  type=\"button\" class=\"btn btn-success btn2\"><i class=\"fa fa-play-circle-o\" aria-hidden=\"true\"></i>Watch Video</button>\n      </div>\n\n      <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\" style=\"\n      margin-top: 5%;\n    width: 90%;\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\" style=\"    height: 85vh;\n    margin-left: 2%;\n    margin-right: 2%;\">\n            <iframe style=\"width: 100%;\n    height: 100%;\" src=\"https://www.youtube.com/embed/2gBxS_8_Zkg\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n\n<!--HOME-ENDS-->\n\n<!--FLIGHT-ALERTS-->\n\n<section id=\"flight\">\n  <div class=\"container f\">\n    <div class=\"row r\">\n      <div class=\"col-md-2 col-sm-2 col-xs-1 i\" id=\"flightPreviousDiv\" >\n        <img src=\"./../../assets/img/sliderL.png\" >\n      </div>\n      <div class= \"col-md-8 col-sm-8 col-xs-10 flightdetails\">\n        <h3>\n          SET FLIGHT ALERTS\n        </h3>\n        <p class=\"p\">\n          Select flight criteria and save, get notified by email when the criteria matches. Femme helps you use your\n          air miles efficiently without any efforts. No need to search the internet for the flights any more.\n        </p>\n      </div>\n      <div class=\"col-md-2 col-sm-2 col-xs-1 i\"  id=\"flightNextDiv\">\n        <img src=\"./../../assets/img/sliderR.png\">\n      </div>\n    </div>\n\n\n\n\n    <div class=\"row \" style=\"z-index: -1;\" >\n\n      <div class=\"col-md-12 animated\" style=\"animation-duration: 0.5s;\" id=\"flightOne\">\n        <div class=\"col-md-4 col-sm-4\">\n          <img class=\"img-responsive r1\" src=\"./../../assets/img/mac.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n          <img class=\"img-responsive r2\" src=\"./../../assets/img/line.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n          <img class=\"img-responsive r3\" src=\"./../../assets/img/mobile.png\">\n        </div>\n      </div>\n\n      <div class=\"col-md-12 animated\"  style=\"display: none; animation-duration: 0.5s;\" id=\"flightTwo\">\n        <div class=\"col-md-4 col-sm-4\">\n          <img class=\"img-responsive r1\" src=\"./../../assets/img/mac.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n          <img class=\"img-responsive r2\" src=\"./../../assets/img/line.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n          <img class=\"img-responsive r3\" src=\"./../../assets/img/mobile.png\">\n        </div>\n      </div>\n\n      <div class=\"col-md-12 animated\" style=\"display: none; animation-duration: 0.5s;\" id=\"flightThree\">\n        <div class=\"col-md-4 col-sm-4\">\n          <img class=\"img-responsive r1\" src=\"./../../assets/img/mac.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n          <img class=\"img-responsive r2\" src=\"./../../assets/img/line.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n          <img class=\"img-responsive r3\" src=\"./../../assets/img/mobile.png\">\n        </div>\n      </div>\n\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</section>\n\n\n<!--FLIGHT-ALERT-ENDS-->\n\n<!--FEATURES-->\n\n<section id=\"features\" style=\"z-index: 4; position: relative\">\n  <div class=\"container\">\n    <div class=\"row top\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <h1>FEATURES YOU WILL LOVE</h1>\n        <p>Once you start using femme these features will feel like you were missing them in life.</p>\n      </div>\n    </div>\n    <div class=\"row middle1\">\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"col-md-offset-1 col-md-2 i\">\n          <img src=\"./../../assets/img/RU.png\">\n        </div>\n        <div class=\"col-md-9\">\n          <h4>Realtime Updates</h4>\n          <p>\n            Once you start using femme these features will feel like you were missing them in life. Once you start using femme these features will feel.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"col-md-offset-1 col-md-2 i\">\n          <img src=\"./../../assets/img/IM.png\">\n        </div>\n        <div class=\"col-md-9\">\n          <h4>Instant Messaging</h4>\n          <p>\n            Once you start using femme these features will feel like you were missing them in life. Once you start using femme these features will feel.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"col-md-offset-1 col-md-2 i\">\n          <img src=\"./../../assets/img/IN.png\">\n        </div>\n        <div class=\"col-md-9\">\n          <h4>Instant Notification</h4>\n          <p>\n            Once you start using femme these features will feel like you were missing them in life. Once you start using femme these features will feel.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row middle2\">\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"col-md-offset-1 col-md-2 \">\n          <img src=\"./../../assets/img/YF.png\">\n        </div>\n        <div class=\"col-md-9\">\n          <h4>Your Favourite</h4>\n          <p>\n            Once you start using femme these features will feel like you were missing them in life. Once you start using femme these features will feel.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"col-md-offset-1 col-md-2 i\">\n          <img src=\"./../../assets/img/YV.png\">\n        </div>\n        <div class=\"col-md-9\">\n          <h4>Your Airmiles</h4>\n          <p>\n            Once you start using femme these features will feel like you were missing them in life. Once you start using femme these features will feel.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"col-md-offset-1 col-md-2 i\">\n          <img src=\"./../../assets/img/man.png\">\n        </div>\n        <div class=\"col-md-9\">\n          <h4>Your Vacation</h4>\n          <p>\n            Once you start using femme these features will feel like you were missing them in life. Once you start using femme these features will feel.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row end\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12 \">\n        <button type=\"button\" class=\"btn btn-default btn\">Get Started</button>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--FEATURES-ENDS-->\n<!--CARRIERS-->\n\n<section id=\"carriers\">\n  <div class=\"container\">\n    <div class=\"row top\">\n      <div class=\"col-md-2 col-sm-2 col-xs-1 i\" id=\"carrierPreviousDiv\">\n        <img src=\"./../../assets/img/sliderL.png\">\n      </div>\n      <div class= \"col-md-8 col-sm-8 col-xs-10 carrierdetails\">\n        <h3>\n          CARRIERS YOU TRUST\n        </h3>\n        <p class=\"p\">\n          We support all major carriers, you can defintely find your favourite in our curated list.\n        </p>\n      </div>\n      <div class=\"col-md-2 col-sm-2 col-xs-1 i\" id=\"carrierNextDiv\">\n        <img src=\"./../../assets/img/sliderR.png\">\n      </div>\n    </div>\n    <div class=\"animated\" id=\"carrierone\">\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle1\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/american-airlines.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle1\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/british-airways-2.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle1\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/Cathay_Pacific.png\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle2\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/Air_France.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle2\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/logo-qantas.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle2\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/aeromexico-logo.png\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle3\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/american-airlines.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle3\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/british-airways-2.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle3\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/Cathay_Pacific.png\">\n        </div>\n      </div>\n    </div>\n    <div class=\"animated\" style=\"display: none;\" id=\"carriertwo\">\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle1\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/american-airlines.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle1\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/british-airways-2.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle1\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/Cathay_Pacific.png\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle2\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/Air_France.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle2\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/logo-qantas.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle2\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/aeromexico-logo.png\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle3\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/american-airlines.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle3\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/british-airways-2.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle3\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/Cathay_Pacific.png\">\n        </div>\n      </div>\n    </div>\n    <div class=\"animated\" style=\"display: none;\" id=\"carrierthree\">\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle1\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/american-airlines.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle1\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/british-airways-2.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle1\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/Cathay_Pacific.png\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle2\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/Air_France.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle2\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/logo-qantas.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle2\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/aeromexico-logo.png\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle3\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/american-airlines.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle3\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/british-airways-2.png\">\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-4 middle3\">\n          <img class=\"img-responsive\" src=\"./../../assets/img/Cathay_Pacific.png\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--CARREIERS-ENDS-->\n<!--NEWSLETTER-->\n\n<section id=\"newsletter\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12 l\">\n        <h1>\n          SUBSCRIBE TO OUR NEWSLETTER\n        </h1>\n        <input type=\"text\" placeholder=\"Your email...\" name=\"search\"><span class=\"fa fa-paper-plane\"></span>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--NEWSLETTER-ENDS-->\n<!--FEATURES-->\n\n<section id=\"pricing\">\n  <div class=\"container pricingContainer\">\n\n    <div class=\"row pricingHeadingHolder\">\n      <div class= \"col-md-offset-2 col-md-8 col-sm-12 col-xs-12 pricingText\">\n        <h3>\n          AFFORDABLE PRICE PLAN\n        </h3>\n        <p class=\"p pricingSubtext\">\n          Our price plan is decided with YOU in mind and always easily affordable give double the value\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row pricingCardHolder\" >\n\n\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"promo scale\">\n          <div class=\"deal\">\n            <span>Basic</span>\n          </div>\n          <span class=\"price\">$09<p style=\"margin:0;\">USD/mo</p></span>\n          <ul class=\"features\">\n            <li><img src=\"./../../assets/img/tick.png\">Aliquam tincidunt mauris eu </li>\n            <li><img src=\"./../../assets/img/tick.png\">risus.</li>\n            <li><img src=\"./../../assets/img/tick.png\">Vestibulum auctor dapibus </li>\n            <li><img src=\"./../../assets/img/tick.png\">neque. </li>\n            <li><img src=\"./../../assets/img/tick.png\">Nunc dignissim risus id metus. </li>\n            <li><img src=\"./../../assets/img/tick.png\">Cras ornare tristique elit. </li>\n            <li><img src=\"./../../assets/img/tick.png\">Praesent placerat risus quis eros.</li>\n            <li><img src=\"./../../assets/img/tick.png\">Fusce pellentesque suscipit nibh. </li>\n          </ul>\n          <button type=\"button\" class=\"btn btn-success btn2\">Get Started</button>\n        </div>\n      </div>\n      <div class=\"col-md-4  col-sm-4  col-xs-12\">\n        <div class=\"promo scale\">\n          <div class=\"deal\">\n            <span>Standard</span>\n          </div>\n          <span class=\"price\">$99<p style=\"margin:0;\">USD/mo</p></span>\n          <ul class=\"features\">\n            <li><img src=\"./../../assets/img/tick.png\">Aliquam tincidunt mauris eu </li>\n            <li><img src=\"./../../assets/img/tick.png\">risus.</li>\n            <li><img src=\"./../../assets/img/tick.png\">Vestibulum auctor dapibus </li>\n            <li><img src=\"./../../assets/img/tick.png\">neque. </li>\n            <li><img src=\"./../../assets/img/tick.png\">Nunc dignissim risus id metus. </li>\n            <li><img src=\"./../../assets/img/tick.png\">Cras ornare tristique elit. </li>\n            <li><img src=\"./../../assets/img/tick.png\">Praesent placerat risus quis eros.</li>\n            <li><img src=\"./../../assets/img/tick.png\">Fusce pellentesque suscipit nibh. </li>\n          </ul>\n          <button type=\"button\" class=\"btn btn-success btn2\">Get Started</button>\n        </div>\n      </div>\n      <div class=\"col-md-4  col-sm-4  col-xs-12\">\n        <div class=\"promo scale\">\n          <div class=\"deal\">\n            <span>Diamond</span>\n          </div>\n          <span class=\"price\">$199<p style=\"margin:0;\">USD/mo</p></span>\n          <ul class=\"features\">\n            <li><img src=\"./../../assets/img/tick.png\">Aliquam tincidunt mauris eu </li>\n            <li><img src=\"./../../assets/img/tick.png\">risus.</li>\n            <li><img src=\"./../../assets/img/tick.png\">Vestibulum auctor dapibus </li>\n            <li><img src=\"./../../assets/img/tick.png\">neque. </li>\n            <li><img src=\"./../../assets/img/tick.png\">Nunc dignissim risus id metus. </li>\n            <li><img src=\"./../../assets/img/tick.png\">Cras ornare tristique elit. </li>\n            <li><img src=\"./../../assets/img/tick.png\">Praesent placerat risus quis eros.</li>\n            <li><img src=\"./../../assets/img/tick.png\">Fusce pellentesque suscipit nibh. </li>\n          </ul>\n          <button type=\"button\" class=\"btn btn-success btn2\">Get Started</button>\n        </div>\n      </div>\n\n\n\n\n    </div>\n\n\n\n  </div>\n</section>\n\n<!--FEATURES-ENDS-->\n\n<section id=\"usersFeedback\">\n  <div class=\"container usersFeedbackContainer\" style=\"padding-bottom: 5%;\">\n\n    <div class=\"row usersFeedbackHeading\">\n      <div class= \"col-md-offset-2 col-md-8 col-sm-12 col-xs-12 usersFeedbackText\">\n        <h3>\n          What users say about us!\n        </h3>\n        <p class=\"p pricingSubtext\">\n          Our price plan is decided with YOU in mind and always easily affordable give double the value\n        </p>\n      </div>\n    </div>\n\n    <div id=\"quote1\">\n      <div class=\"row usersFeedbackQuotes\" >\n        <div class=\"col-md-1 col-md-offset-6 col-xs-1 col-xs-offset-5 \">\n          <img src=\"./../../assets/img/quotes.png\">\n        </div>\n      </div>\n      <div class=\"row reviewContent\">\n\n        <div id=\"reviewOne\" class=\"col-md-8 col-md-offset-2 animated slideInRight\">\n          <p class=\"p reviews\">\n            I never knew that I can bring the airmiles to such good use. Femme have helped me travel to destinations for free where I would have otherwise paid thousands of dollars. Thank you to have my back, Femme!\n          </p>\n        </div>\n\n        <div id=\"reviewTwo\" class=\"col-md-8 col-md-offset-2 animated\" style=\"display: none;\">\n          <p class=\"p reviews\">\n            Cras vel sodales mauris. Morbi sagittis nibh neque, a maximus arcu vehicula vitae. Vestibulum ut fringilla eros. Cras molestie mi eget nulla iaculis, quis suscipit sem porta.\n          </p>\n        </div>\n\n        <div id=\"reviewThree\" class=\"col-md-8 col-md-offset-2 animated\" style=\"display: none;\">\n          <p class=\"p reviews\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id orci quis tortor tristique pulvinar sed non tellus. Aenean commodo enim nisi, ac vulputate lacus cursus vel.\n          </p>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"row reviewPeople\">\n      <div id=\"reviewOnePerson\" class=\"col-md-3 col-md-offset-2 col-xs-3 col-xs-offset-2  notFaded animated fadeIn\">\n        <div class=\"row\" >\n          <div class=\"col-md-3\">\n            <img  src=\"./../../assets/img/face1.png\">\n          </div>\n          <div class=\"col-md-9 reviewName\">\n            <p>John Blake</p>\n            <p>Facebook</p>\n          </div>\n        </div>\n      </div>\n      <div id=\"reviewTwoPerson\" class=\"col-md-3 col-xs-3 faded animated\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <img src=\"./../../assets/img/face2.png\">\n          </div>\n          <div class=\"col-md-9 reviewName\">\n            <p>Sarah Lingard</p>\n            <p>Google</p>\n          </div>\n        </div>\n      </div>\n      <div id=\"reviewThreePerson\" class=\"col-md-3 col-xs-3 faded animated\">\n        <div class=\"col-md-3\">\n          <img src=\"./../../assets/img/face3.png\">\n        </div>\n        <div class=\"col-md-9 reviewName\">\n          <p>Tores Samntha</p>\n          <p>Quora</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n\n\n<!--FAQ'S-->\n\n<section id=\"faq\">\n  <div class=\"container\">\n    <div class=\"row top\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <h2>\n          FREQUENTLY ASKED QUESTION\n        </h2>\n        <p>\n          Questions most of our users ask of us, go through them below and get your self answered\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-5 col-sm-5 col-xs-12 grp\">\n        <h3>\n          Can i use my sirmiles for travel\n        </h3>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sagittis elit. Etiam condimentum faucibus lectus, quis consequat dui lacinia id. Nunc sapien diam, convallis id consequat non, tempus vel urna\n        </p>\n      </div>\n      <div class=\"col-md-5 col-sm-5 col-xs-12 grp\">\n        <h3>\n          Why can’t I see hotel rewards?\n        </h3>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sagittis elit. Etiam condimentum faucibus lectus, quis consequat dui lacinia id. Nunc sapien diam, convallis id consequat non, tempus vel urna\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-5 col-sm-5 col-xs-12 grp\">\n        <h3>\n          Do you cover all the airlines in the world?\n        </h3>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sagittis elit. Etiam condimentum faucibus lectus, quis consequat dui lacinia id. Nunc sapien diam, convallis id consequat non, tempus vel urna\n        </p>\n      </div>\n      <div class=\"col-md-5 col-sm-5 col-xs-12 grp\">\n        <h3>\n          Who is behind this website?\n        </h3>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sagittis elit. Etiam condimentum faucibus lectus, quis consequat dui lacinia id. Nunc sapien diam, convallis id consequat non, tempus vel urna\n        </p>\n      </div>\n    </div>\n    <div class=\"row last\">\n      <div class=\"col-md-5 col-sm-5 col-xs-12 grp\">\n        <h3>\n          I want a refund of membership?\n        </h3>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sagittis elit. Etiam condimentum faucibus lectus, quis consequat dui lacinia id. Nunc sapien diam, convallis id consequat non, tempus vel urna\n        </p>\n      </div>\n      <div class=\"col-md-5 col-sm-5 col-xs-12 grp\">\n        <h3>\n          Why can’t I login to the dashboard?\n        </h3>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sagittis elit. Etiam condimentum faucibus lectus, quis consequat dui lacinia id. Nunc sapien diam, convallis id consequat non, tempus vel urna\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--FAQ'S-ENDS-->\n\n<!--FOOTER-->\n\n<section id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row one\">\n      <div class=\"col-md-2 col-sm-2 col-xs-12 img\">\n        <img src=\"./../../assets/img/logo.png\">\n      </div>\n      <div class=\"col-md-3 col-md-offset-2 col-sm-6 col-sm-offset-1 col-xs-12 txt\">\n        <h5>\n          Femme 2018 All Rights Reserved.\n        </h5>\n      </div>\n      <div class=\"footerSocialMediaIcons col-md-offset-2 col-md-3 col-sm-3 col-xs-5 col-xs-offset-3\">\n        <div class=\"col-md-3 col-sm-3 col-xs-3\">\n          <i class=\"fa fa-facebook fa-2x\"></i>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-3\">\n          <i class=\"fa fa-twitter fa-2x\"></i>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-3\">\n          <i class=\"fa fa-instagram fa-2x\"></i>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-3\">\n          <i class=\"fa fa-pinterest fa-2x\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--FOOTER-ENDS-->\n\n\n\n\n<div _ngcontent-c1=\"\" class=\"modal fade\" id=\"signup\" role=\"dialog\" >\n  <div _ngcontent-c1=\"\" class=\"modal-dialog signupModalDialog\" style=\"width: 70%;\">\n\n\n\n\n    <div class=\"row signUp-whole-div\">\n      <div class=\"col-md-4 col-xs-12 col-sm-4 signUp-left-div\">\n\n        <div class=\"col-md-8 col-xs-8 col-sm-12 col-md-offset-1\">\n          <p class=\"signUp-left-div-head\">\n            Sign up\n          </p>\n        </div>\n\n        <div class=\"col-md-8 col-xs-8 col-sm-12 col-md-offset-2\">\n          <p class=\"signUp-left-div-para\">\n            it is much better when you have account\n          </p>\n        </div>\n        <div class=\"col-md-8 col-xs-8 col-sm-12 col-md-offset-2\">\n          <p class=\"signUp-left-div-para2\">\n            Get Yourself one\n          </p>\n        </div>\n\n        <div class=\"col-md-8 col-xs-8 col-sm-8 col-md-offset-2 logo-img\">\n          <img class=\"\" src=\"./../../assets/img/logo.png\" alt=\"\">\n        </div>\n\n      </div>\n\n\n      <div class=\"col-md-8 col-xs-12 col-sm-8\">\n        <div class=\"close\" data-dismiss=\"modal\" class=\"row\" align=\"right\" id=\"signupModalCloseBtn\" style=\"cursor: pointer;\">\n          <i class=\"fa fa-times fa-2x sign-cross\"></i>\n\n        </div>\n        <div class=\"col-md-8 col-xs-12 col-sm-12 col-md-offset-2\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"email\">First Name:</label>\n              <input type=\"email\" class=\"form-control\" [(ngModel)] ='firstName' id=\"first\" name=\"first\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Last Name:</label>\n              <input type=\"email\" class=\"form-control\" [(ngModel)] ='lastName' id=\"last\" name=\"last\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">User Name:</label>\n              <input type=\"email\" class=\"form-control\" [(ngModel)] ='username' id=\"user\" name=\"name\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Email:</label>\n              <input type=\"email\" class=\"form-control\" [(ngModel)] ='email' id=\"email\" name=\"email\">\n            </div>\n            <div class=\"form-group\">\n              <label >Password:</label>\n              <input type=\"password\" class=\"form-control\"  [(ngModel)] ='password' id=\"Password\" name=\"pwd\">\n            </div>\n            <div  class=\"form-group\" style=\"margin-left: 0px;\">\n              <label  for=\"exampleFormControlFile1\">Profile Picture</label>\n              <input class=\"form-control-file\" id=\"exampleFormControlFile1\"  (change)=\"uploadFile($event)\" style=\"    margin-left: 17%;\" type=\"file\">\n            </div>\n            <!--<div class=\"checkbox\">-->\n              <!--<label><input type=\"checkbox\" name=\"remember\">by signing up i agree to <a class=\"signUp-anchor\" href=\"#\">terms and condition</a>  </label>-->\n            <!--</div>-->\n\n            <div class=\"row\">\n              <div class=\"col-md-4 col-xs-6\"> <button type=\"submit\" (click)=\"signup()\"  class=\"btn btn-signUp\">Submit</button></div>\n              <div class=\"col-md-4 col-xs-6\"> <p class=\"login-para\"> or   <a class=\"logIn\" id=\"openLogin\" data-target=\"#login\" data-toggle=\"modal\"> Login</a></p></div>\n            </div>\n          </form>\n\n        </div>\n\n      </div>\n    </div>\n\n\n\n\n\n\n\n    <!--<div _ngcontent-c1=\"\" class=\"modal-content signupModalContent\" style=\"height: 685px;  \">-->\n      <!--<div _ngcontent-c1=\"\" class=\"modal-header\">-->\n        <!--<button _ngcontent-c1=\"\" class=\"close\" data-dismiss=\"modal\" id=\"signupModalCloseBtn\" type=\"button\">×</button>-->\n        <!--<h4 _ngcontent-c1=\"\" class=\"modal-title\" style=\"text-align: center;\">Signup</h4>-->\n      <!--</div>-->\n      <!--<div _ngcontent-c1=\"\" class=\"modal-body\">-->\n      <!--<form _ngcontent-c1=\"\" class=\"form-horizontal ng-untouched ng-pristine ng-invalid\" id=\"2\" method=\"post\" novalidate=\"\" role=\"form\" style=\"\">-->\n        <!--<div _ngcontent-c1=\"\" class=\"row\">-->\n          <!--<div _ngcontent-c1=\"\" class=\"col-md-7 col-sm-7\" style=\"border-right: 1px solid #c4c4c4;padding-right: 5%; padding-left: 5%;\">-->\n            <!--<label _ngcontent-c1=\"\">First Name</label>-->\n            <!--<div _ngcontent-c1=\"\" class=\"input-group col-md-offset-4\" style=\"margin-bottom: 25px; margin-left: 0;     width: 100%;\">-->\n              <!--<input _ngcontent-c1=\"\" class=\"form-control popupInput ng-untouched ng-pristine ng-invalid\" [(ngModel)] ='firstName' name=\"firstName\" required=\"\" style=\"   \" type=\"firstName\" value=\"\" ng-reflect-required=\"\" ng-reflect-name=\"firstName\" ng-reflect-model=\"\">-->\n            <!--</div>-->\n            <!--<label _ngcontent-c1=\"\">Last Name</label>-->\n            <!--<div _ngcontent-c1=\"\" class=\"input-group col-md-offset-4\" style=\"margin-bottom: 25px; margin-left: 0;     width: 100%;\">-->\n              <!--<input _ngcontent-c1=\"\" class=\"form-control popupInput ng-untouched ng-pristine ng-invalid\"  [(ngModel)] ='lastName' name=\"lastName\" required=\"\" style=\"\" type=\"lastName\" value=\"\" ng-reflect-required=\"\" ng-reflect-name=\"lastName\" ng-reflect-model=\"\">-->\n            <!--</div>-->\n            <!--<label _ngcontent-c1=\"\">Username</label>-->\n            <!--<div _ngcontent-c1=\"\" class=\"input-group col-md-offset-4\" style=\"margin-bottom: 25px; margin-left: 0;     width: 100%;\">-->\n              <!--<input _ngcontent-c1=\"\" class=\"form-control popupInput ng-untouched ng-pristine ng-invalid\"  [(ngModel)] ='username' name=\"signupUserPassword\" required=\"\" type=\"text\" value=\"\" ng-reflect-required=\"\" ng-reflect-name=\"signupUserPassword\" ng-reflect-model=\"\">-->\n            <!--</div>-->\n\n            <!--<label _ngcontent-c1=\"\">Email Name</label>-->\n            <!--<div _ngcontent-c1=\"\" class=\"input-group col-md-offset-4\" style=\"margin-bottom: 25px; margin-left: 0;     width: 100%;\">-->\n              <!--<input _ngcontent-c1=\"\" class=\"form-control popupInput ng-untouched ng-pristine ng-invalid\"  [(ngModel)] ='email' name=\"signupUserEmail\" required=\"\" style=\"\" type=\"email\" value=\"\" ng-reflect-required=\"\" ng-reflect-name=\"signupUserEmail\" ng-reflect-model=\"\">-->\n            <!--</div>-->\n            <!--<label _ngcontent-c1=\"\">Password</label>-->\n            <!--<div _ngcontent-c1=\"\" class=\"input-group col-md-offset-4\" style=\"margin-bottom: 25px; margin-left: 0;     width: 100%;\">-->\n              <!--<input _ngcontent-c1=\"\" class=\"form-control popupInput ng-untouched ng-pristine ng-invalid\"  [(ngModel)] ='password' name=\"signupUserPassword\" required=\"\" type=\"password\" value=\"\" ng-reflect-required=\"\" ng-reflect-name=\"signupUserPassword\" ng-reflect-model=\"\">-->\n            <!--</div>-->\n\n\n            <!--<div _ngcontent-c1=\"\" class=\"input-group col-md-offset-4 popupFileUpload \" style=\"  margin-left: 0;  margin-bottom: 5%;     width: 100%;\">-->\n              <!--<div _ngcontent-c1=\"\" class=\"form-group\" style=\"margin-left: 0px;\">-->\n                <!--<label _ngcontent-c1=\"\" for=\"exampleFormControlFile1\">Profile Picture</label>-->\n                <!--<input _ngcontent-c1=\"\" class=\"form-control-file\" id=\"exampleFormControlFile1\"  (change)=\"uploadFile($event)\" style=\"    margin-left: 17%;\" type=\"file\">-->\n              <!--</div>-->\n            <!--</div>-->\n            <!--<div _ngcontent-c1=\"\" class=\"form-group\" style=\"margin-top: 10px; margin-left: 0px; margin-bottom: 0;\">-->\n              <!--<div _ngcontent-c1=\"\" class=\"col-sm-12 controls\" style=\"text-align: center;\"><button _ngcontent-c1=\"\" (click)=\"signup()\" class=\"btn btn-primary\" style=\"margin-left: 10px; margin-bottom: 10px; margin-top: 10px; text-align: center; width: 200px; background-color: rgb(0, 151, 167); border-radius: 1px;\" type=\"button\">Submit</button>-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n          <!--<div _ngcontent-c1=\"\" class=\"col-md-5 col-sm-5\" style=\"text-align: center;\">-->\n            <!--<p _ngcontent-c1=\"\">or signup using any of the social networks</p>-->\n            <!--<button _ngcontent-c1=\"\" classnamename=\"btn btn-primary\" style=\"color: rgb(255, 255, 255); text-align: center; height: 35px; margin-right: 30px; margin-bottom: 20px; width: 200px; margin-left: 40px; background-color: rgb(48, 63, 159);\" type=\"button\"><i _ngcontent-c1=\"\" aria-hidden=\"true\" class=\"fa fa-facebook \" style=\"margin-right: 10px;\"></i>Login With Facebook</button>-->\n          <!--</div>-->\n\n          <!--<div _ngcontent-c1=\"\" class=\"col-md-5 col-sm-5\" style=\"text-align: center;\">-->\n            <!--<p _ngcontent-c1=\"\">or login with your email</p>-->\n            <!--<button _ngcontent-c1=\"\" id=\"openLogin\" data-target=\"#login\" data-toggle=\"modal\" classnamename=\"btn btn-primary\" style=\"color: rgb(255, 255, 255); text-align: center; height: 35px; margin-right: 30px; margin-bottom: 20px; width: 200px; margin-left: 40px;     background-color: rgb(0, 151, 167);\" type=\"button\"><i _ngcontent-c1=\"\" aria-hidden=\"true\" class=\"fa fa-envelope-o \" style=\"margin-right: 10px;\"></i>Login With Email</button>-->\n          <!--</div>-->\n\n        <!--</div>-->\n        <!--<div _ngcontent-c1=\"\" class=\"row\">-->\n          <!--<div _ngcontent-c1=\"\" class=\"col-md-12 col-sm-12\" style=\"border-top: 1px solid #c4c4c4; text-align: center; margin-top: 15px;\">-->\n            <!--<p _ngcontent-c1=\"\" style=\"margin-top: 10px;     color: #a09c9c;\">By regestering I conform that I have read and agree with <a _ngcontent-c1=\"\" data-target=\"#privicyPolicy\" data-toggle=\"modal\"><u _ngcontent-c1=\"\">Privacy Policy</u></a>.</p>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</form>-->\n\n\n\n\n\n\n\n\n\n      <!--</div>-->\n    <!--</div>-->\n  </div>\n</div>\n\n\n\n\n<div _ngcontent-c1=\"\" class=\"modal fade\" id=\"login\" role=\"dialog\" >\n  <div _ngcontent-c1=\"\" class=\"modal-dialog signinModalDialog\" style=\"width: 70%;\">\n\n\n    <div class=\"row signUp-whole-div\">\n      <div class=\"col-md-4 col-xs-12 col-sm-4 signUp-left-div\">\n\n        <div class=\"col-md-8 col-xs-8 col-sm-12 col-md-offset-1\">\n          <p class=\"signUp-left-div-head\">\n            Login\n          </p>\n        </div>\n\n        <div class=\"col-md-8 col-xs-8 col-sm-12 col-md-offset-2\">\n          <p class=\"signUp-left-div-para\">\n            it is much better when you have account\n          </p>\n        </div>\n        <div class=\"col-md-8 col-xs-8 col-sm-12 col-md-offset-2\">\n          <p class=\"signUp-left-div-para2\">\n            Get Yourself one\n          </p>\n        </div>\n\n        <div class=\"col-md-8 col-xs-8 col-sm-8 col-md-offset-2 logo-img\">\n          <img class=\"\" src=\"./../../assets/img/logo.png\" alt=\"\">\n        </div>\n\n      </div>\n\n\n      <div class=\"col-md-8 col-xs-12 col-sm-8\">\n        <div class=\"close\" data-dismiss=\"modal\" class=\"row\" align=\"right\" id=\"loginModalCloseBtn\" style=\"cursor: pointer;\">\n          <i class=\"fa fa-times fa-2x sign-cross\"></i>\n\n        </div>\n        <div class=\"col-md-8 col-xs-12 col-sm-12 col-md-offset-2\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"email\">Email:</label>\n              <input type=\"email\" class=\"form-control\" [(ngModel)]=\"loginEmail\" name=\"loginUserEmail\">\n            </div>\n            <div class=\"form-group\">\n              <label >Password:</label>\n              <input type=\"password\" class=\"form-control\"   [(ngModel)]=\"loginPassword\" name=\"loginUserPassword\">\n            </div>\n            <!--<div class=\"checkbox\">-->\n            <!--<label><input type=\"checkbox\" name=\"remember\">by signing up i agree to <a class=\"signUp-anchor\" href=\"#\">terms and condition</a>  </label>-->\n            <!--</div>-->\n            <div class=\"row\">\n              <div class=\"col-md-4 col-xs-6\"> <button type=\"button\" (click)=\"login()\"  class=\"btn btn-signUp\">Login</button></div>\n              <!--<div class=\"col-md-4 col-xs-6\"> <p class=\"login-para\"> or   <a class=\"logIn\" id=\"openLogin\" data-target=\"#login\" data-toggle=\"modal\"> Login</a></p></div>-->\n            </div>\n          </form>\n\n        </div>\n\n      </div>\n    </div>\n\n    <!--<div _ngcontent-c1=\"\" class=\"modal-content signinModalContent\" style=\"    height: 310px;  \">-->\n      <!--<div _ngcontent-c1=\"\" class=\"modal-header\">-->\n        <!--<button _ngcontent-c1=\"\" class=\"close\" data-dismiss=\"modal\" id=\"loginModalCloseBtn\" type=\"button\">×</button>-->\n        <!--<h4 _ngcontent-c1=\"\" class=\"modal-title\" style=\"text-align: center;\">Login</h4>-->\n      <!--</div>-->\n      <!--<div _ngcontent-c1=\"\" class=\"modal-body\">-->\n      <!--<form _ngcontent-c1=\"\" class=\"form-horizontal ng-untouched ng-pristine ng-invalid\" id=\"loginform\" method=\"post\" novalidate=\"\" role=\"form\" style=\"text-align: center;\">-->\n        <!--<div _ngcontent-c1=\"\" class=\"col-md-6 col-sm-6 loginXsNoBorder\" style=\"border-right: 1px solid #c4c4c4;-->\n    <!--padding-right: 5%;\">-->\n          <!--<label _ngcontent-c1=\"\" style=\"float: left;\">Email Name</label>-->\n          <!--<div _ngcontent-c1=\"\" class=\"input-group col-md-offset-4\" style=\"margin-bottom: 25px; margin-left: 0;     width: 100%;\">-->\n            <!--<input _ngcontent-c1=\"\" class=\"form-control popupInput ng-untouched ng-pristine ng-invalid\" [(ngModel)]=\"loginEmail\" name=\"loginUserEmail\" required=\"\" style=\"\" type=\"email\" value=\"\" ng-reflect-required=\"\" ng-reflect-name=\"loginUserEmail\" ng-reflect-model=\"\">-->\n          <!--</div>-->\n          <!--<label _ngcontent-c1=\"\" style=\"float: left;\">Password</label>-->\n          <!--<div _ngcontent-c1=\"\" class=\"input-group col-md-offset-4\" style=\"margin-bottom: 25px; margin-left: 0;     width: 100%;\">-->\n            <!--<input _ngcontent-c1=\"\" class=\"form-control popupInput ng-untouched ng-pristine ng-invalid\" [(ngModel)]=\"loginPassword\" name=\"loginUserPassword\" required=\"\" type=\"password\" value=\"\" ng-reflect-required=\"\" ng-reflect-name=\"loginUserPassword\" ng-reflect-model=\"\">-->\n          <!--</div>-->\n          <!--<div _ngcontent-c1=\"\" class=\"form-group\" style=\"margin-top: 10px; margin-left: 0px; margin-bottom: 0;\">-->\n            <!--<div _ngcontent-c1=\"\" class=\"col-sm-12 controls\" style=\"text-align: center;\"><button (click)=\"login()\" _ngcontent-c1=\"\" class=\"btn btn-primary\" style=\"margin-left: 10px; margin-bottom: 10px; margin-top: 10px; text-align: center; width: 200px; background-color: rgb(0, 151, 167); border-radius: 1px;\" type=\"button\">Submit</button>-->\n            <!--</div>-->\n          <!--</div>-->\n        <!--</div>-->\n        <!--<div _ngcontent-c1=\"\" class=\"col-md-6 col-sm-6\" style=\"text-align: center;\">-->\n          <!--<p _ngcontent-c1=\"\">or signin using any of the social networks</p>-->\n          <!--<button _ngcontent-c1=\"\" classnamename=\"btn btn-primary\" style=\"color: rgb(255, 255, 255); text-align: center; height: 35px; margin-right: 30px; margin-bottom: 20px; width: 200px; margin-left: 40px; background-color: rgb(48, 63, 159);\" type=\"button\">-->\n            <!--<i _ngcontent-c1=\"\" aria-hidden=\"true\" class=\"fa fa-facebook \" style=\"margin-right: 10px;\"></i>Login With Facebook</button>-->\n        <!--</div>-->\n      <!--</form>-->\n      <!--</div>-->\n\n\n\n    <!--</div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(http, toastr, vcr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.username = '';
        this.loginEmail = '';
        this.loginPassword = '';
        this.file = '';
        this.regexp = '';
        this.insertId = '';
        this.loggedIn = false;
        this._imageUrl = '';
        this._firstName = '';
        this._lastName = '';
        this._email = '';
        this._username = '';
        this.toastr.setRootViewContainerRef(vcr);
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('id')) {
            if (parseInt(localStorage.getItem('id')) > 0) {
                this.loggedIn = true;
                this.http.post("http://thethinkcity.com:3000/api/get-user", {
                    'id': localStorage.getItem('id')
                })
                    .subscribe(function (val) {
                    console.log(val['data']);
                    if (val['status'] == 'Error') {
                        _this.toastr.warning("Your session expired!", 'Error');
                        localStorage.removeItem('id');
                    }
                    else {
                        _this._imageUrl = val['data'].profile_picture;
                        _this._firstName = val['data'].FirstName;
                        _this._lastName = val['data'].LastName;
                        _this._email = val['data'].EmailAddress;
                        _this._username = val['data'].UserName;
                    }
                }, function (response) {
                    console.log("POST call in error", response);
                }, function () {
                    // console.log("The POST observable is now completed.");
                });
            }
        }
        else {
            this.loggedIn = false;
        }
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#openLogin').click(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#signupModalCloseBtn').click();
        });
    };
    HomepageComponent.prototype.signup = function () {
        var _this = this;
        this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (this.firstName.length == 0) {
            this.toastr.error('First Name Required!', 'Field Required!');
        }
        else if (this.lastName.length == 0) {
            this.toastr.error('Last Name Required!', 'Field Required!');
        }
        else if (this.username.length == 0) {
            this.toastr.error('User Name Required!', 'Field Required!');
        }
        else if (this.email.length == 0) {
            this.toastr.error('Email Required!', 'Field Required!');
        }
        else if (!(this.regexp.test(this.email))) {
            this.toastr.error('Email not in correct format!', 'Field Required!');
        }
        else if (this.password.length == 0) {
            this.toastr.error('Password Required!', 'Field Required!');
        }
        else if (this.file == '' || this.file == undefined) {
            this.toastr.error('Profile Picture Required!', 'Field Required!');
        }
        else {
            this.http.post("http://thethinkcity.com:3000/api/signup", {
                "firstName": this.firstName,
                "lastName": this.lastName,
                "email": this.email,
                "password": this.password,
                "username": this.username,
                "profilePic": this.file
            })
                .subscribe(function (val) {
                console.log(val);
                if (val['status'] == 'Error') {
                    _this.toastr.error(val['data'], 'Error!');
                }
                else {
                    _this.insertId = val['data'];
                    __WEBPACK_IMPORTED_MODULE_1_jquery__('#signupModalCloseBtn').click();
                    _this.firstName = '';
                    _this.lastName = '';
                    _this.email = '';
                    _this.password = '';
                    _this.username = '';
                    _this.file = '';
                    _this.toastr.success('Signup Sucessful', 'Sucess!');
                }
            }, function (response) {
                console.log("POST call in error", response);
            }, function () {
                // console.log("The POST observable is now completed.");
            });
        }
    };
    HomepageComponent.prototype.login = function () {
        var _this = this;
        this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (this.loginEmail.length == 0) {
            this.toastr.error('Email Required!', 'Field Required!');
        }
        else if (!(this.regexp.test(this.loginEmail))) {
            this.toastr.error('Email not in correct format!', 'Field Required!');
        }
        else if (this.loginPassword.length == 0) {
            this.toastr.error('Password Required!', 'Field Required!');
        }
        else {
            this.http.post("http://thethinkcity.com:3000/api/login", {
                "email": this.loginEmail,
                "password": this.loginPassword
            })
                .subscribe(function (val) {
                console.log(val);
                if (val['status'] == 'Error') {
                    _this.toastr.error(val['data'], 'Error!');
                }
                else {
                    _this.insertId = val['data'];
                    localStorage.setItem("id", _this.insertId);
                    _this.toastr.success('Signin Sucessful', 'Sucess!');
                    __WEBPACK_IMPORTED_MODULE_1_jquery__('#loginModalCloseBtn').click();
                    __WEBPACK_IMPORTED_MODULE_1_jquery__('body').css('padding-right', '0px !important');
                    setTimeout(function () {
                        window.location.href = "/dashboard";
                    }, 1000);
                }
            }, function (response) {
                console.log("POST call in error", response);
            }, function () {
                // console.log("The POST observable is now completed.");
            });
        }
    };
    HomepageComponent.prototype.showMenu = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__('#dropdown').css('display') == 'none') {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#dropdown').css('display', 'block');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#dropdown').css('display', 'none');
        }
    };
    HomepageComponent.prototype.getBase64 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.file = reader.result;
            console.log(_this.file);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    HomepageComponent.prototype.uploadFile = function (event) {
        console.log(event.target.files[0]);
        if (typeof event.srcElement == 'undefined') {
            var fileSize = event.target.files[0].size;
            var fileData = event.target.files[0];
        }
        else {
            var fileSize = event.srcElement.files[0].size;
            var fileData = event.srcElement.files[0];
        }
        if (fileSize > 8000) {
            this.toastr.warning("Image file size exceeds limit!", 'Error!');
        }
        else {
            this.getBase64(fileData);
        }
    };
    HomepageComponent.prototype.gotoDashboard = function () {
        this.router.navigate(['dashboard']);
    };
    HomepageComponent.prototype.logout = function () {
        localStorage.removeItem('id');
        this.toastr.success("Logout Sucessful!", 'Success!');
        setTimeout(function () { window.location.reload(); }, 1000);
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map