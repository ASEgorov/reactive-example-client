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
var core_1 = require("@angular/core");
var users_service_1 = require("../services/users/users.service");
var UserInfo_1 = require("../types/UserInfo");
var UsernameComponent = (function () {
    function UsernameComponent(users) {
        this.userSend = false;
        this.users = users;
        this.users.connect().subscribe(function (m) {
            console.log("users:" + m);
        });
    }
    ;
    UsernameComponent.prototype.send = function () {
        this.users.send(new UserInfo_1.UserInfo(this.username, "Add"));
        this.userSend = true;
    };
    UsernameComponent = __decorate([
        core_1.Component({
            selector: 'start-comp',
            template: "\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"username\" placeholder=\"name\" [disabled]=\"userSend\">\n      <button (click)=\"send()\" [disabled]=\"userSend\"></button>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService])
    ], UsernameComponent);
    return UsernameComponent;
}());
exports.UsernameComponent = UsernameComponent;
//# sourceMappingURL=user-name.component.js.map