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
var token_service_1 = require('../token.service');
var router_1 = require('@angular/router');
var RegisterComponent = (function () {
    function RegisterComponent(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
        this._authData = {};
    }
    ;
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this._output = null;
        this.tokenService._tokenService.registerAccount(this._authData.email, this._authData.password, this._authData.passwordConfirmation).subscribe(function (res) {
            _this._authData = {};
            _this._output = res;
            _this.router.navigate(['/recipes']);
        }, function (error) {
            _this._authData = {};
            _this._output = error;
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'app/users/register/register.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, token_service_1.TokenService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map