webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eula_eula__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wait_wait__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accountSettings_accountSettings__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_registration__ = __webpack_require__(199);
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
        this.tabEula = __WEBPACK_IMPORTED_MODULE_1__eula_eula__["a" /* EulaPage */];
        this.tabWait = __WEBPACK_IMPORTED_MODULE_2__wait_wait__["a" /* WaitPage */];
        this.tabAccountSettings = __WEBPACK_IMPORTED_MODULE_3__accountSettings_accountSettings__["a" /* AccountSettingsPage */];
        this.tabMainPage = __WEBPACK_IMPORTED_MODULE_4__main_main__["a" /* MainPage */];
        this.tabRegistration = __WEBPACK_IMPORTED_MODULE_5__registration_registration__["a" /* RegistrationPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tabEula" tabTitle="EULA" tabIcon="american-football"></ion-tab>\n  <ion-tab [root]="tabRegistration" tabTitle="Registration" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tabMainPage" tabTitle="Main Page" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tabAccountSettings" tabTitle="Account Settings" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tabWait" tabTitle="Emergency" tabIcon="car"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EulaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(195);
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
                        this.agreed = true;
                        this.hidden = true;
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
                            // Simply requesting the coordinate is good enough.
                        }).catch(function (error) {
                            console.log('Error getting location', error);
                        });
                        this.checkAgreed();
                        return [2 /*return*/];
                }
            });
        });
    };
    EulaPage.prototype.disagree = function () {
        this.hidden = true;
    };
    return EulaPage;
}());
EulaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-eula',template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/eula/eula.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      EULA\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div *ngIf="!hidden">\n      <ion-card-header>\n        End User Agreement\n      </ion-card-header>\n      <ion-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Ut suscipit suscipit tempus.\n        Vivamus quis fermentum odio.\n        Nunc placerat congue hendrerit.\n        <br/><br/>\n        Sed nisi lacus, condimentum ut magna vel, tempus finibus eros.\n        Ut blandit varius purus, nec lacinia sapien sodales quis.\n        Donec pulvinar vestibulum erat, et accumsan turpis pretium congue.\n        Phasellus tempus sit amet purus ac congue.\n        <br/><br/>\n        Sed ipsum massa, facilisis ut purus a, facilisis pretium dolor.\n        Aenean vel purus convallis, pulvinar lectus quis, pellentesque lacus.\n        Vivamus sit amet porta nulla.\n        Duis ex augue, elementum vitae erat non, accumsan viverra ex.\n        Nulla sodales nunc ac tincidunt accumsan.\n        Nunc lacinia dignissim feugiat.\n        Ut scelerisque ut purus ut molestie.\n        Cras gravida interdum diam, eu aliquam mauris pretium eget.\n        Nam et velit id dui varius rutrum ut id magna.\n        <br/><br/>\n        Phasellus elementum eleifend dui, quis ullamcorper metus ornare porttitor.\n        Etiam blandit, ante blandit consequat ornare, felis eros laoreet odio, in semper est ipsum sed mi.\n        Cras vestibulum, dui eu varius pellentesque, est nulla malesuada quam, non hendrerit lorem eros consectetur\n        sapien.\n        Nunc luctus lectus id arcu consequat, vitae pretium purus consectetur.\n        Ut risus lorem, aliquam eu eros in, varius blandit turpis.\n        In sit amet pretium tortor.\n        Curabitur aliquam nisl eu volutpat semper.\n        Nullam et nisi in sem ultricies malesuada.\n        Donec blandit, nisl id fermentum venenatis, mi odio finibus mauris, et ultrices nisi erat sed ex.\n        Cras viverra blandit imperdiet.\n        Maecenas nulla metus, congue et turpis nec, vehicula egestas leo.\n        <br/><br/>\n        Maecenas sed imperdiet nunc.\n        Praesent in euismod augue.\n        Aliquam nulla tellus, aliquam ut erat nec, ullamcorper vestibulum massa.\n        Suspendisse potenti.\n        Suspendisse eu dapibus lectus.\n        Sed sed nibh quam.\n        Vivamus ac metus ac nisi pretium finibus.\n        Sed ullamcorper sem at dui porttitor sagittis.\n        <br/><br/>\n        <ion-row>\n          <ion-col>\n            <button ion-button full class="quarter-button" (click)="disagree()">I Do Not Agree</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button full class="quarter-button" (click)="agree()">I Agree</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </div>\n    <div *ngIf="hidden && agreed">\n      <ion-card-content>\n        Thanks for agreeing!\n      </ion-card-content>\n    </div>\n    <div *ngIf="hidden && !agreed">\n      <ion-card-content>\n        You must agree to the EULA to use the app.\n      </ion-card-content>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/eula/eula.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object])
], EulaPage);

var _a, _b, _c;
//# sourceMappingURL=eula.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EmergencyState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmergencyState;
(function (EmergencyState) {
    EmergencyState[EmergencyState["CALL"] = 0] = "CALL";
    EmergencyState[EmergencyState["WAIT"] = 1] = "WAIT";
})(EmergencyState || (EmergencyState = {}));
;
var WaitPage = (function () {
    function WaitPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.emergencyEnum = EmergencyState;
        this.state = EmergencyState.CALL;
    }
    WaitPage.prototype.startEmergency = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Emergency',
            message: 'Please confirm the emergency.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        _this.emergencyOver();
                    }
                },
                {
                    text: 'Confirm Emergency',
                    handler: function () {
                        _this.state = EmergencyState.WAIT;
                    }
                }
            ],
            cssClass: 'big-alert'
        });
        confirm.present();
    };
    WaitPage.prototype.emergencyOver = function () {
        this.state = EmergencyState.CALL;
        this.navCtrl.parent.select(0);
    };
    return WaitPage;
}());
WaitPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wait',template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/wait/wait.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Wait</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="state==emergencyEnum.CALL">\n    <button ion-button full class="quarter-button" color="danger" (click)="startEmergency()">Emergency</button>\n  </div>\n\n  <div *ngIf="state==emergencyEnum.WAIT">\n    <h1 style="text-align: center;"><b>Help is on the way!</b></h1>\n    <button ion-button full class="quarter-button" color="dark" (click)="emergencyOver()">Emergency Over</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/wait/wait.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], WaitPage);

//# sourceMappingURL=wait.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    function AccountSettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AccountSettingsPage;
}());
AccountSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-accountSettings',template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/accountSettings/accountSettings.html"*/'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Title</title>\n</head>\n<body>\n\n<form class="modal-content animate">\n  <div class="container">\n    <label><b>Change Phone Number</b></label>\n    <ion-input type="text" placeholder="Enter New Phone Number" name="phoneNumber" required></ion-input>\n    <label><b>Change Zip Code</b></label>\n    <ion-input type="text" placeholder="Enter New ZipCode" name="zipCode" required></ion-input>\n    <label><b>Change Email</b></label>\n    <ion-input type="text" placeholder="Enter New Email" name="email" required></ion-input>\n\n    <label><b>Change Password</b></label>\n    <ion-input type="password" placeholder="Enter New Password" name="psw" required></ion-input>\n\n    <label><b>Repeat Changed Password</b></label>\n    <ion-input type="password" placeholder="Repeat New Password" name="psw-repeat" required></ion-input>\n\n    <div class="clearfix">\n      <button type="submit" class="confirmbtn">Confirm</button>\n    </div>\n  </div>\n</form>\n\n</body>\n</html>\n\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/accountSettings/accountSettings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AccountSettingsPage);

//# sourceMappingURL=accountSettings.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
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
    function MainPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    MainPage.prototype.clearStorage = function () {
        this.storage.clear();
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/main/main.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Version 0.1!</h2>\n  <p>\n    This page will explain information about the application, and allow people to navigate the application easily.\n  </p>\n  <p>\n    For now, all pages created will be added as a tab at the bottom of the page.\n  </p>\n\n  <button ion-button full class="quarter-button" color="secondary" (click)="clearStorage()">Clear Storage</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/main/main.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
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



var RegistrationPage = (function () {
    function RegistrationPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.checkAgreed();
    }
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set("registered", true)];
                    case 1:
                        _a.sent();
                        this.checkAgreed();
                        return [2 /*return*/];
                }
            });
        });
    };
    return RegistrationPage;
}());
RegistrationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registration',template:/*ion-inline-start:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/registration/registration.html"*/'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Title</title>\n</head>\n<body>\n\n<div *ngIf="!registered">\n  <form class="modal-content animate">\n    <div class="container">\n      <label><b>First Name</b></label>\n      <ion-input type="text" placeholder="First Name" name="firstName" required></ion-input>\n      <label><b>Phone Number</b></label>\n      <ion-input type="text" placeholder="Enter Phone Number" name="phoneNumber" required></ion-input>\n      <label><b>Zip Code</b></label>\n      <ion-input type="text" placeholder="Enter ZipCode" name="zipCode" required></ion-input>\n      <label><b>Email</b></label>\n      <ion-input type="text" placeholder="Enter Email" name="email" required></ion-input>\n\n      <label><b>Password</b></label>\n      <ion-input type="password" placeholder="Enter Password" name="psw" required></ion-input>\n\n      <label><b>Repeat Password</b></label>\n      <ion-input type="password" placeholder="Repeat Password" name="psw-repeat" required></ion-input>\n\n      <button ion-button full class="quarter-button" color="secondary" (click)="register()">Register</button>\n    </div>\n  </form>\n</div>\n<div *ngIf="registered">\n  <ion-card>\n    <ion-card-content>\n      Thanks for registering\n    </ion-card-content>\n  </ion-card>\n</div>\n\n</body>\n</html>\n\n\n'/*ion-inline-end:"/Users/Ben/Desktop/2017-doi-app/client/src/pages/registration/registration.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], RegistrationPage);

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_eula_eula__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wait_wait__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_accountSettings_accountSettings__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_main_main__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_registration_registration__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(195);
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
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_eula_eula__["a" /* EulaPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_wait_wait__["a" /* WaitPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_accountSettings_accountSettings__["a" /* AccountSettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_registration_registration__["a" /* RegistrationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_eula_eula__["a" /* EulaPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_wait_wait__["a" /* WaitPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_accountSettings_accountSettings__["a" /* AccountSettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_registration_registration__["a" /* RegistrationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
            Storage
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map