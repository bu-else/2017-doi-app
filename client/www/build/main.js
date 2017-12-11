webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_registration__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/*
import * as basil from 'basil-js';
import * as Hapi from 'hapi';
*/
var LoginPage = (function () {
    function LoginPage(navCtrl, storage, alertCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8)])],
        });
        this.checkAgreed();
    }
    LoginPage.prototype.checkAgreed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("registered")];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            return [2 /*return*/];
                        }
                        this.registered = true;
                        this.navCtrl.parent.select(2);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.signin = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#form2Sbm").click(function () {
            //submitHandlerPatient("<%= configUrl %>");
            var email = __WEBPACK_IMPORTED_MODULE_4_jquery__("#email") ? (__WEBPACK_IMPORTED_MODULE_4_jquery__("#email")[0].value) : "a"; //default
            var password = __WEBPACK_IMPORTED_MODULE_4_jquery__("#psw") ? __WEBPACK_IMPORTED_MODULE_4_jquery__("#psw")[0].value : "a";
            var repeatPassword = __WEBPACK_IMPORTED_MODULE_4_jquery__("#psw-repeat") ? __WEBPACK_IMPORTED_MODULE_4_jquery__("#psw-repeat")[0].value : "ab";
            if (password != repeatPassword) {
                console.log("Don't match");
                return;
            }
            __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
                type: 'POST',
                url: "localhost:8001/api/login",
                data: {
                    email: email,
                    password: password,
                },
                dataType: "application/json",
                success: function (data, text) {
                    //basil.set('cookie', data);
                    console.log("sucess");
                    console.log(data);
                    //window.location.href = serverUrl;
                },
                error: function (request, status, error) {
                    var reply = request.responseText;
                    var replyText = (JSON.parse(reply));
                    alert(replyText.message);
                    console.log('failure');
                }
            });
        });
    };
    LoginPage.prototype.goToReg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__registration_registration__["a" /* RegistrationPage */]);
    };
    LoginPage.prototype.goToMain = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */])
], LoginPage.prototype, "nav", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/logIn/login.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Welcome!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input formControlName="email" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n      <p>Sorry, field email is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.email.hasError(\'email\') && authForm.controls.email.touched">\n      <p>Must be a valid email!</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input formControlName="password" type="password"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n      <p>Sorry, field password is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n      <p>Sorry, minimum password length is 8!</p>\n    </ion-item>\n  </form>\n  <br>\n  <button ion-button full class="quarter-button" [disabled]="!authForm.valid" color="Primary" id ="form1Sbm" type = "submit"(click)="goToMain();">Log In</button>\n  <br>\n  <button ion-button full class="quarter-button" color="secondary" id ="form9Sbm" type = "submit"(click)="goToReg();">Create Account</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/logIn/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wait_wait__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accountSettings_accountSettings__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tabWait = __WEBPACK_IMPORTED_MODULE_1__wait_wait__["a" /* WaitPage */];
        this.tabAccountSettings = __WEBPACK_IMPORTED_MODULE_2__accountSettings_accountSettings__["a" /* AccountSettingsPage */];
        this.tabMainPage = __WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */];
        this.tabMap = __WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tabMainPage" tabTitle="Main Page" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tabAccountSettings" tabTitle="Account Settings" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tabWait" tabTitle="Emergency" tabIcon="car"></ion-tab>\n  <ion-tab [root]="tabMap" tabTitle="Map" tabIcon="map"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logIn_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainPage = (function () {
    function MainPage(navCtrl, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
    }
    MainPage.prototype.clearStorage = function () {
        this.storage.clear();
        // console.log(Config.get("projectName"));
    };
    MainPage.prototype.goToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__logIn_login__["a" /* LoginPage */]);
    };
    MainPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'You have been logged out!',
            subTitle: "You're all set",
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return MainPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */])
], MainPage.prototype, "nav", void 0);
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/main/main.html"*/'<ion-header xmlns="http://www.w3.org/1999/html">\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Version 0.1!</h2>\n  <p>\n    This page will explain information about the application, and allow people to navigate the application easily.\n  </p>\n  <p>\n    For now, all pages created will be added as a tab at the bottom of the page.\n  </p>\n\n  <button ion-button full class="quarter-button" color="secondary" (click)="clearStorage()">Clear Storage</button>\n  <br>\n  <br>\n  <button ion-button full class="quarter-button" color="primary" id ="form3Sbm" (click)="clearStorage();goToLogin();presentAlert();">LogOut</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/main/main.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eula_eula__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/*
import * as basil from 'basil-js';
import * as Hapi from 'hapi';
*/
var RegistrationPage = (function () {
    function RegistrationPage(navCtrl, storage, alertCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.nav = navCtrl;
        this.authForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8)])],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            repeatPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8)])],
            zipCode: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
        }, { validator: this.matchingPasswords('password', 'repeatPassword') });
        this.checkAgreed();
    }
    RegistrationPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    RegistrationPage.prototype.checkAgreed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("registered")];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            return [2 /*return*/];
                        }
                        this.registered = true;
                        this.navCtrl.parent.select(2);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationPage.prototype.register = function () {
        //submitHandlerPatient("<%= configUrl %>");
        var phoneNumber = __WEBPACK_IMPORTED_MODULE_4_jquery__("#phoneNumber") ? __WEBPACK_IMPORTED_MODULE_4_jquery__("#phoneNumber")[0].value : "a";
        var zipCode = __WEBPACK_IMPORTED_MODULE_4_jquery__("#zipCode") ? __WEBPACK_IMPORTED_MODULE_4_jquery__("#zipCode")[0].value : "a";
        var email = __WEBPACK_IMPORTED_MODULE_4_jquery__("#email") ? (__WEBPACK_IMPORTED_MODULE_4_jquery__("#email")[0].value) : "a"; //default
        var password = __WEBPACK_IMPORTED_MODULE_4_jquery__("#psw") ? __WEBPACK_IMPORTED_MODULE_4_jquery__("#psw")[0].value : "a";
        // @Michael: Please keep this or refactor it because @Ben is relying on this for sending it to the server
        // You can remove this comment.
        this.storage.set("phoneNumber", __WEBPACK_IMPORTED_MODULE_4_jquery__("#phoneNumber"));
        __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
            type: 'POST',
            url: "localhost:8001/api/signup",
            data: {
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                zipCode: zipCode
            },
            dataType: "jsonp",
            success: function (data, text) {
                //basil.set('cookie', data);
                console.log("sucess");
                console.log(data);
                //window.location.href = serverUrl;
            },
            error: function (request, status, error) {
                var reply = request.responseText;
                var replyText = (JSON.parse(reply));
                alert(replyText.message);
                console.log('failure');
            }
        });
    };
    RegistrationPage.prototype.goToEULA = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__eula_eula__["a" /* EulaPage */]);
    };
    RegistrationPage.prototype.onSubmit = function (value) {
        if (this.authForm.valid) {
            window.localStorage.setItem('email', value.email);
            window.localStorage.setItem('password', value.password);
            window.localStorage.setItem('repeatPassword', value.repeatPassword);
            window.localStorage.setItem('phoneNum', value.phoneNumber);
            window.localStorage.setItem('zipCode', value.zipCode);
        }
    };
    return RegistrationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */])
], RegistrationPage.prototype, "nav", void 0);
RegistrationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< Updated upstream
        selector: 'page-registration',template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/registration/registration.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input formControlName="email" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n      <p>Sorry, field email is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.email.hasError(\'email\') && authForm.controls.email.touched">\n      <p>Must be a valid email!</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input formControlName="password" type="password"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n      <p>Sorry, field password is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n      <p>Sorry, minimum password length is 8!</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Phone Number</ion-label>\n      <ion-input formControlName="phoneNumber" type="text"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.phoneNumber.hasError(\'required\') && authForm.controls.phoneNumber.touched">\n      <p>Sorry, field Phone Number is required!</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Zip Code</ion-label>\n      <ion-input formControlName="zipCode" type="text"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.zipCode.hasError(\'required\') && authForm.controls.zipCode.touched">\n      <p>Sorry, field Zip Code is required!</p>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Repeat Password</ion-label>\n      <ion-input formControlName="repeatPassword" type="password" ></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.repeatPassword.hasError(\'required\') && authForm.controls.repeatPassword.touched">\n      <p>Sorry, field Repeat Password is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.repeatPassword.hasError(\'minlength\') && authForm.controls.repeatPassword.touched">\n      <p>Sorry, minimum password length is 8!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.repeatPassword.touched && authForm.hasError(\'mismatchedPasswords\') && authForm.controls.password.valid">\n      <p>Passwords do not match</p>\n    </ion-item>\n\n\n\n    <button ion-button full class="quarter-button" [disabled]="!authForm.valid" color="secondary" id ="form1Sbm" type = "submit"(click)="goToEULA();">Create Account</button>\n  </form>\n</ion-content>\n\n\n<!--\n<script>\n  function register(){\n    console.log("hello");\n    $("#form1Sbm").click(function () {\n      //submitHandlerPatient("<%= configUrl %>");\n      var firstName = $("#firstName") ? $("#firstName")[0].value : " ";\n      var phoneNumber = $("#phoneNumber") ? $("#phoneNumber")[0].value : "";\n      var zipCode = $("#zipCode") ? $("#zipCode")[0].value : "";\n      var email = $("#email") ? ($("#email")[0].value) : ""; //default\n      var password = $("#psw") ? $("#psw")[0].value : "";\n\n      $.ajax({\n        type: \'POST\',\n        url: "localhost:8001/api/signup",\n        data: {\n          firstName: Joi.string().required(),\n          email: Joi.string().email().lowercase().required(),\n          password: Joi.string().required(),\n          phoneNumber: Joi.string().required(),\n          zipCode: Joi.string().required()\n        },\n        dataType: "json",\n        success: function (data, text) {\n          basil.set(\'cookie\', data);\n          console.log("sucess");\n          console.log(data)\n          window.location.href = serverUrl;\n        },\n        error: function (request, status, error) {\n          var reply = request.responseText\n          var replyText = (JSON.parse(reply))\n          alert(replyText.message)\n          console.log(\'failure\')\n        }\n      });\n    }\n</script>\n-->\n\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/registration/registration.html"*/
=======
        selector: 'page-registration',template:/*ion-inline-start:"/Users/MichaelHendrick/2017-doi-app/client/src/pages/registration/registration.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input formControlName="email" type="text" id="email"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n      <p>Sorry, field email is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.email.hasError(\'email\') && authForm.controls.email.touched">\n      <p>Must be a valid email!</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input formControlName="password" type="password" id="psw"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n      <p>Sorry, field password is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n      <p>Sorry, minimum password length is 8!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.password.hasError(\'pattern\') && authForm.controls.password.touched">\n      <p>Password should be at least 8 characters long and <br>should contain one number,one character <br>and one special character.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Phone Number</ion-label>\n      <ion-input formControlName="phoneNumber" type="text" id="phoneNumber"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.phoneNumber.hasError(\'required\') && authForm.controls.phoneNumber.touched">\n      <p>Sorry, field Phone Number is required!</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Zip Code</ion-label>\n      <ion-input formControlName="zipCode" type="text" id="zipCode"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.zipCode.hasError(\'required\') && authForm.controls.zipCode.touched">\n      <p>Sorry, field Zip Code is required!</p>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Repeat Password</ion-label>\n      <ion-input formControlName="repeatPassword" type="password" ></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.repeatPassword.hasError(\'required\') && authForm.controls.repeatPassword.touched">\n      <p>Sorry, field Repeat Password is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.repeatPassword.hasError(\'minlength\') && authForm.controls.repeatPassword.touched">\n      <p>Sorry, minimum password length is 8!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.repeatPassword.touched && authForm.hasError(\'mismatchedPasswords\') && authForm.controls.password.valid">\n      <p>Passwords do not match</p>\n    </ion-item>\n\n\n\n    <button ion-button full class="quarter-button" [disabled]="!authForm.valid" color="secondary" id ="form1Sbm" type = "submit"(click)="register();goToEULA();">Create Account</button>\n  </form>\n</ion-content>\n\n\n<!--\n<script>\n  function register(){\n    console.log("hello");\n    $("#form1Sbm").click(function () {\n      //submitHandlerPatient("<%= configUrl %>");\n      var firstName = $("#firstName") ? $("#firstName")[0].value : " ";\n      var phoneNumber = $("#phoneNumber") ? $("#phoneNumber")[0].value : "";\n      var zipCode = $("#zipCode") ? $("#zipCode")[0].value : "";\n      var email = $("#email") ? ($("#email")[0].value) : ""; //default\n      var password = $("#psw") ? $("#psw")[0].value : "";\n\n      $.ajax({\n        type: \'POST\',\n        url: "localhost:8001/api/signup",\n        data: {\n          firstName: Joi.string().required(),\n          email: Joi.string().email().lowercase().required(),\n          password: Joi.string().required(),\n          phoneNumber: Joi.string().required(),\n          zipCode: Joi.string().required()\n        },\n        dataType: "json",\n        success: function (data, text) {\n          basil.set(\'cookie\', data);\n          console.log("sucess");\n          console.log(data)\n          window.location.href = serverUrl;\n        },\n        error: function (request, status, error) {\n          var reply = request.responseText\n          var replyText = (JSON.parse(reply))\n          alert(replyText.message)\n          console.log(\'failure\')\n        }\n      });\n    }\n</script>\n-->\n\n'/*ion-inline-end:"/Users/MichaelHendrick/2017-doi-app/client/src/pages/registration/registration.html"*/
>>>>>>> Stashed changes
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], RegistrationPage);

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EulaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var EulaPage = (function () {
    function EulaPage(navCtrl, storage, geolocation) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.geolocation = geolocation;
        this.checkAgreed();
    }
    EulaPage.prototype.checkAgreed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("agreed")];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            return [2 /*return*/];
                        }
                        this.navCtrl.parent.select(1);
                        return [2 /*return*/];
                }
            });
        });
    };
    EulaPage.prototype.agree = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set("agreed", true)];
                    case 1:
                        _a.sent();
                        this.geolocation.getCurrentPosition().then(function (resp) {
                            // Requesting the coordinate is good enough.
                        }).catch(function (error) {
                            console.log('Error getting location', error);
                        });
                        this.checkAgreed();
                        return [2 /*return*/];
                }
            });
        });
    };
    EulaPage.prototype.goToMain = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    EulaPage.prototype.disagree = function () {
        this.hidden = true;
    };
    return EulaPage;
}());
EulaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-eula',template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/eula/eula.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      EULA\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div *ngIf="!hidden">\n      <ion-card-header>\n        End User Agreement\n      </ion-card-header>\n      <ion-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Ut suscipit suscipit tempus.\n        Vivamus quis fermentum odio.\n        Nunc placerat congue hendrerit.\n        <br/><br/>\n        Sed nisi lacus, condimentum ut magna vel, tempus finibus eros.\n        Ut blandit varius purus, nec lacinia sapien sodales quis.\n        Donec pulvinar vestibulum erat, et accumsan turpis pretium congue.\n        Phasellus tempus sit amet purus ac congue.\n        <br/><br/>\n        Sed ipsum massa, facilisis ut purus a, facilisis pretium dolor.\n        Aenean vel purus convallis, pulvinar lectus quis, pellentesque lacus.\n        Vivamus sit amet porta nulla.\n        Duis ex augue, elementum vitae erat non, accumsan viverra ex.\n        Nulla sodales nunc ac tincidunt accumsan.\n        Nunc lacinia dignissim feugiat.\n        Ut scelerisque ut purus ut molestie.\n        Cras gravida interdum diam, eu aliquam mauris pretium eget.\n        Nam et velit id dui varius rutrum ut id magna.\n        <br/><br/>\n        Phasellus elementum eleifend dui, quis ullamcorper metus ornare porttitor.\n        Etiam blandit, ante blandit consequat ornare, felis eros laoreet odio, in semper est ipsum sed mi.\n        Cras vestibulum, dui eu varius pellentesque, est nulla malesuada quam, non hendrerit lorem eros consectetur\n        sapien.\n        Nunc luctus lectus id arcu consequat, vitae pretium purus consectetur.\n        Ut risus lorem, aliquam eu eros in, varius blandit turpis.\n        In sit amet pretium tortor.\n        Curabitur aliquam nisl eu volutpat semper.\n        Nullam et nisi in sem ultricies malesuada.\n        Donec blandit, nisl id fermentum venenatis, mi odio finibus mauris, et ultrices nisi erat sed ex.\n        Cras viverra blandit imperdiet.\n        Maecenas nulla metus, congue et turpis nec, vehicula egestas leo.\n        <br/><br/>\n        Maecenas sed imperdiet nunc.\n        Praesent in euismod augue.\n        Aliquam nulla tellus, aliquam ut erat nec, ullamcorper vestibulum massa.\n        Suspendisse potenti.\n        Suspendisse eu dapibus lectus.\n        Sed sed nibh quam.\n        Vivamus ac metus ac nisi pretium finibus.\n        Sed ullamcorper sem at dui porttitor sagittis.\n        <br/><br/>\n        <ion-row>\n          <ion-col>\n            <button ion-button full class="quarter-button" (click)="disagree()">I Do Not Agree</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button full class="quarter-button" (click)="goToMain()">I Agree</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </div>\n    <div *ngIf="hidden && !agreed">\n      <ion-card-content>\n        You must agree to the EULA to use the app.\n      </ion-card-content>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/eula/eula.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
], EulaPage);

//# sourceMappingURL=eula.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EmergencyState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_unique_device_id__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sms__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var EmergencyState;
(function (EmergencyState) {
    EmergencyState[EmergencyState["CALL"] = 0] = "CALL";
    EmergencyState[EmergencyState["SEND"] = 1] = "SEND";
    EmergencyState[EmergencyState["WAIT"] = 2] = "WAIT"; // Nothing else to be done. Wait for dispatcher or button to be pressed.
})(EmergencyState || (EmergencyState = {}));
;
var WaitPage = (function () {
    function WaitPage(navCtrl, alertCtrl, geolocation, http, uniqueDeviceID, sms) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.http = http;
        this.uniqueDeviceID = uniqueDeviceID;
        this.sms = sms;
        // tslint:disable-next-line: no-unused-variable
        this.emergencyEnum = EmergencyState;
        this.confirmationTime = 2 * 60 * 1000;
        this.confirmationPings = 4;
        this.currentPings = 0;
        this.state = EmergencyState.CALL;
    }
    WaitPage.prototype.startEmergency = function () {
        var _this = this;
        var dialogue = this.alertCtrl.create({
            title: 'Emergency',
            message: 'Please confirm the emergency.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        _this.resetEmergency();
                    }
                },
                {
                    text: 'Confirm Emergency',
                    handler: function () {
                        _this.askMethod();
                    }
                }
            ],
            cssClass: 'big-alert'
        });
        dialogue.present();
    };
    WaitPage.prototype.askMethod = function () {
        var _this = this;
        var dialogue = this.alertCtrl.create({
            title: 'Method',
            message: 'Send this emergency over wifi or sms?',
            buttons: [
                {
                    text: 'Sms',
                    handler: function () {
                        _this.isSMS = true;
                        _this.sendLocation();
                    }
                },
                {
                    text: 'Wifi',
                    handler: function () {
                        _this.isSMS = false;
                        _this.sendLocation();
                    }
                }
            ],
            cssClass: 'big-alert'
        });
        dialogue.present();
    };
    WaitPage.prototype.sendLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var location, e_1, deviceID, e_2, latLng;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.state = EmergencyState.SEND;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 2:
                        location = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log("Error getting location");
                        return [2 /*return*/];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.uniqueDeviceID.get()];
                    case 5:
                        deviceID = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_2 = _a.sent();
                        deviceID = "computer-id";
                        return [3 /*break*/, 7];
                    case 7:
                        latLng = location.coords.latitude + "," + location.coords.longitude;
                        if (this.isSMS) {
                            this.sms.send("6178299064", "latlng\n" + deviceID + "\n" + latLng, { replaceLineBreaks: true });
                        }
                        else {
                            this.http.get("http://localhost:8100/latlng/?&deviceID=" + deviceID + "&LatLng=" + latLng, { "responseType": "text" }).subscribe(function (data) {
                                _this.getDispatch();
                                return console.log(data);
                            }, function (err) {
                                console.log(err);
                                _this.showError(err.status, err.statusText);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WaitPage.prototype.sendAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var deviceID, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.uniqueDeviceID.get()];
                    case 1:
                        deviceID = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        deviceID = "computer-id";
                        return [3 /*break*/, 3];
                    case 3:
                        if (this.isSMS) {
                            this.sms.send("6178299064", "address\n" + deviceID + "\n" + this.address + "\n" + this.zipcode, { replaceLineBreaks: true });
                        }
                        else {
                            console.log("HELLO");
                            this.http.get("http://localhost:8100/address/?&deviceID=" + deviceID + "&Address=" + this.address + "&Zipcode=" + this.zipcode, { "responseType": "text" }).subscribe(function (data) {
                                return console.log(data);
                            }, function (err) {
                                console.log(err);
                                _this.showError(err.status, err.statusText);
                            });
                        }
                        this.state = EmergencyState.WAIT;
                        return [2 /*return*/];
                }
            });
        });
    };
    WaitPage.prototype.endEmergency = function () {
        var _this = this;
        var dialogue = this.alertCtrl.create({
            title: 'Please confirm ending this emergency.',
            message: 'Emergency dispatcher will be notified.',
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Yes, End Emergency',
                    handler: function () {
                        _this.sendEndHttp();
                    }
                },
            ],
            cssClass: 'big-alert'
        });
        dialogue.present();
    };
    WaitPage.prototype.sendEndHttp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var deviceID, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.resetEmergency();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.uniqueDeviceID.get()];
                    case 2:
                        deviceID = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        deviceID = "computer-id";
                        return [3 /*break*/, 4];
                    case 4:
                        if (this.isSMS) {
                            this.sms.send("6178299064", "end\n" + deviceID, { replaceLineBreaks: true });
                        }
                        else {
                            this.http.get("http://localhost:8100/end/?&deviceID=" + deviceID, { "responseType": "text" }).subscribe(function (data) {
                                return console.log(data);
                            }, function (err) {
                                console.log(err);
                                _this.showError(err.status, err.statusText);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WaitPage.prototype.getDispatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var deviceID, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.state == EmergencyState.CALL) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.uniqueDeviceID.get()];
                    case 2:
                        deviceID = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_5 = _a.sent();
                        deviceID = "computer-id";
                        return [3 /*break*/, 4];
                    case 4:
                        this.currentPings++;
                        this.http.get("http://localhost:8100/dispatch/?&deviceID=" + deviceID, { "responseType": "text" }).subscribe(function (data) {
                            if (data == "Accepted") {
                                var dialogue = _this.alertCtrl.create({
                                    title: 'Emergency confirmed!',
                                    message: 'Help is on the way to your position now!',
                                    buttons: [
                                        {
                                            text: 'OK',
                                        },
                                    ],
                                    cssClass: 'big-alert'
                                });
                                dialogue.present();
                                _this.isConfirmed = true;
                            }
                            else if (data == "Rejected") {
                                _this.showError("503", "The dispatcher is unable to handle your request.");
                            }
                            else {
                                if (_this.currentPings < _this.confirmationPings) {
                                    setTimeout(function () { _this.getDispatch(); }, _this.confirmationTime / _this.confirmationPings);
                                }
                                else {
                                    _this.showError("408", "Did not recieve a confirmation in time.");
                                }
                            }
                        }, function (err) {
                            console.log(err);
                            _this.showError(err.status, err.statusText);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    WaitPage.prototype.showError = function (code, text) {
        var _this = this;
        var dialogue = this.alertCtrl.create({
            title: 'Error ' + code,
            message: 'An error occurred:\n' + text + "\n Please call 911 to handle this emergency!",
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.resetEmergency();
                    }
                },
            ],
            cssClass: 'big-alert'
        });
        dialogue.present();
    };
    WaitPage.prototype.resetEmergency = function () {
        this.state = EmergencyState.CALL;
        this.navCtrl.parent.select(0);
        this.isConfirmed = false;
        this.currentPings = 0;
    };
    return WaitPage;
}());
WaitPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wait',template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/wait/wait.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Wait</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngIf="state==emergencyEnum.CALL">\n    <ion-card-content>\n      <button ion-button full class="quarter-button" color="danger" (click)="startEmergency()">Emergency</button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf="state==emergencyEnum.SEND">\n    <ion-card-content>\n      <h2 style="text-align: center;">Please confirm your location</h2>\n      <ion-label color="primary" stacked>Address</ion-label>\n      <ion-input type="text" [(ngModel)]="address" placeholder="Confirm Address"></ion-input>\n      <ion-label color="primary" stacked>Zipcode</ion-label>\n      <ion-input type="text" [(ngModel)]="zipcode" placeholder="Confirm Zipcode"></ion-input>\n      <button ion-button full class="quarter-button" color="light" (click)="sendAddress()">Update Information</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="state!=emergencyEnum.CALL">\n    <ion-card-header>\n      <div *ngIf="isSMS">\n        Please check your SMS to ensure help is on the way!\n      </div>\n      <div *ngIf="!isSMS">\n        <div *ngIf="isConfirmed">\n          Help is on the way!\n        </div>\n        <div *ngIf="!isConfirmed">\n          Waiting for confirmation from the dispatcher!\n        </div>\n      </div>\n    </ion-card-header>\n    <ion-card-content>\n      <button ion-button full class="quarter-button" color="dark" (click)="endEmergency()">Emergency Over</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/wait/wait.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_unique_device_id__["a" /* UniqueDeviceID */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_sms__["a" /* SMS */]])
], WaitPage);

//# sourceMappingURL=wait.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountSettingsPage = (function () {
    function AccountSettingsPage(navCtrl, storage, alertCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.nav = navCtrl;
        this.authForm = formBuilder.group({
            email: [window.localStorage.getItem('email'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8)])],
            phoneNumber: [window.localStorage.getItem('phoneNum'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            repeatPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8)])],
            zipCode: [window.localStorage.getItem('zipCode'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,])],
        }, { validator: this.matchingPasswords('password', 'repeatPassword') });
    }
    AccountSettingsPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    AccountSettingsPage.prototype.goToMain = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__main_main__["a" /* MainPage */]);
    };
    AccountSettingsPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Your account had been updated!',
            subTitle: "You're all set",
            buttons: ['Dismiss']
        });
        alert.present();
    };
    AccountSettingsPage.prototype.onSubmit = function (value) {
        if (this.authForm.valid) {
            window.localStorage.setItem('email', value.email);
            window.localStorage.setItem('password', value.password);
            window.localStorage.setItem('phoneNum', value.phoneNumber);
            window.localStorage.setItem('zipCode', value.zipCode);
        }
    };
    return AccountSettingsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */])
], AccountSettingsPage.prototype, "nav", void 0);
AccountSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-accountSettings',template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/accountSettings/accountSettings.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n\n    <ion-item>\n      <ion-label floating>Change Email</ion-label>\n      <ion-input formControlName="email" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n      <p>Sorry, field email is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.email.hasError(\'email\') && authForm.controls.email.touched">\n      <p>Must be a valid email!</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Change Password</ion-label>\n      <ion-input formControlName="password" type="password"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n      <p>Sorry, field password is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n      <p>Sorry, minimum password length is 8!</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Change Phone Number</ion-label>\n      <ion-input formControlName="phoneNumber" type="text"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.phoneNumber.hasError(\'required\') && authForm.controls.phoneNumber.touched">\n      <p>Sorry, field Phone Number is required!</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Change Zip Code</ion-label>\n      <ion-input formControlName="zipCode" type="text"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.zipCode.hasError(\'required\') && authForm.controls.zipCode.touched">\n      <p>Sorry, field Zip Code is required!</p>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Repeat New Password</ion-label>\n      <ion-input formControlName="repeatPassword" type="password"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.repeatPassword.hasError(\'required\') && authForm.controls.repeatPassword.touched">\n      <p>Sorry, field Repeat Password is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.repeatPassword.hasError(\'minlength\') && authForm.controls.repeatPassword.touched">\n      <p>Sorry, minimum password length is 8!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.repeatPassword.touched && authForm.hasError(\'mismatchedPasswords\') && authForm.controls.password.valid">\n      <p>Passwords do not match</p>\n    </ion-item>\n\n\n\n  <button ion-button full class="quarter-button" [disabled]="!authForm.valid" color="secondary" id ="form1Sbm" type = "submit"(click)="goToMain();presentAlert();">Confirm Changes</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/accountSettings/accountSettings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], AccountSettingsPage);

//# sourceMappingURL=accountSettings.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = (function () {
    function MapPage(navCtrl, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.showMap = false;
        this.mapWidth = "500px";
        this.mapHeight = "500px";
        this.zero = "0px";
        this.viewHeight = 15;
    }
    MapPage.prototype.viewEmergency = function () {
        var _this = this;
        this.http.get("http://localhost:8100/fetch/?&emergencyID=" + this.uuid, { "responseType": "json" }).subscribe(function (data) {
            _this.loadMap(data["address"], data["latLng"]);
        }, function (err) {
            console.log(err);
            _this.showError(err.status, err.statusText);
        });
    };
    MapPage.prototype.endEmergency = function () {
        var _this = this;
        var dialogue = this.alertCtrl.create({
            title: 'Please confirm ending this emergency.',
            message: 'Emergency caller will be notified.',
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Yes, End Emergency',
                    handler: function () {
                        _this.sendEndHttp();
                    }
                },
            ],
            cssClass: 'big-alert'
        });
        dialogue.present();
    };
    MapPage.prototype.sendEndHttp = function () {
        var _this = this;
        this.http.get("http://localhost:8100/end/?&emergencyID=" + this.uuid, { "responseType": "text" }).subscribe(function (data) {
            _this.goBack();
        }, function (err) {
            console.log(err);
            _this.showError(err.status, err.statusText);
        });
    };
    MapPage.prototype.loadMap = function (address, latLngRaw) {
        if (!this.loaded) {
            this.initMap();
        }
        this.showMap = true;
        var mapBox = document.getElementById("map");
        mapBox.style.width = this.mapWidth;
        mapBox.style.height = this.mapHeight;
        var s = latLngRaw.split(",");
        var latLng = new __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.LatLng(Number(s[0]), Number(s[1]));
        this.map.setView(latLng, this.viewHeight);
        var marker = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.marker(latLng).addTo(this.map);
        marker.bindPopup(address).openPopup();
    };
    MapPage.prototype.goBack = function () {
        this.uuid = "";
        this.showMap = false;
        var mapBox = document.getElementById("map");
        mapBox.style.width = this.zero;
        mapBox.style.height = this.zero;
    };
    MapPage.prototype.initMap = function () {
        this.loaded = true;
        this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map('map', {
            zoom: 13
        });
        //Add OSM Layer
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
            .addTo(this.map);
    };
    MapPage.prototype.showError = function (code, text) {
        var _this = this;
        var dialogue = this.alertCtrl.create({
            title: 'Error ' + code,
            message: 'An error occurred:\n' + text,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.goBack();
                    }
                },
            ],
            cssClass: 'big-alert'
        });
        dialogue.present();
    };
    return MapPage;
}());
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/map/map.html"*/'<head>\n  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"\n        integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="\n        crossorigin=""/>\n  <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"\n          integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="\n          crossorigin=""></script>\n</head>\n<ion-header>\n  <ion-navbar>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <div *ngIf="!showMap">\n      <ion-card-header>\n        Please enter 4-digit emergency code:\n      </ion-card-header>\n      <ion-card-content>\n        <ion-input type="text" style="width: 50%; margin: auto;" [(ngModel)]="uuid" placeholder=""></ion-input>\n        <button ion-button full class="quarter-button" color="secondary" (click)="viewEmergency()">View Emergency</button>\n      </ion-card-content>\n    </div>\n    <div *ngIf="showMap">\n      <button ion-button full style="width: 10%;" color="secondary" (click)="goBack()">←</button>\n      <button ion-button full class="quarter-button" color="dark" (click)="endEmergency()">Emergency Over</button>\n    </div>\n    <div id="map"></div>\n  </ion-card>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/map/map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_eula_eula__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_wait_wait__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_accountSettings_accountSettings__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_main_main__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_logIn_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_map_map__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_unique_device_id__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_sms__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_eula_eula__["a" /* EulaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_wait_wait__["a" /* WaitPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_accountSettings_accountSettings__["a" /* AccountSettingsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration__["a" /* RegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_logIn_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_map_map__["a" /* MapPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_eula_eula__["a" /* EulaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_wait_wait__["a" /* WaitPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_accountSettings_accountSettings__["a" /* AccountSettingsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration__["a" /* RegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_logIn_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_map_map__["a" /* MapPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_sms__["a" /* SMS */],
            Storage,
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_logIn_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_logIn_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map