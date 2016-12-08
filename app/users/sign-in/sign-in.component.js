"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_token_1 = require('angular2-token');
var SignInComponent = (function () {
    function SignInComponent(_tokenService) {
        this._tokenService = _tokenService;
        this._authData = {};
    }
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        this._output = null;
        this._tokenService.signIn(this._authData.email, this._authData.password).subscribe(function (res) {
            _this._authData = {};
            _this._output = res;
        }, function (error) {
            _this._authData = {};
            _this._output = error;
        });
    };
    SignInComponent.prototype.currentUserSignedIn = function () {
        this._tokenService.userSignedIn();
    };
    SignInComponent.prototype.signOut = function () {
        this._tokenService.signOut().subscribe(function (res) { return console.log(res); }, function (error) { return console.log(error); });
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'sign-in',
            templateUrl: 'app/users/sign-in/sign-in.component.html'
        }), 
        __metadata('design:paramtypes', [angular2_token_1.Angular2TokenService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map