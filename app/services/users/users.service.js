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
//import {Observable, Observer, Subject} from "rxjs/Rx";
var core_1 = require("@angular/core");
var webSocket_1 = require("rxjs/observable/dom/webSocket");
var UsersService = (function () {
    function UsersService() {
    }
    // private socket: Subject<MessageEvent>;
    // public connect(): Subject<MessageEvent> {
    //     if(!this.socket) {
    //         this.socket = this.create("ws://localhost:8080/ws/userinfo");
    //     }
    //     return this.socket;
    // }
    //
    // public constructor(){
    //     this.socket = this.create("ws://localhost:8080/ws/userinfo");
    // }
    //
    // private create(url): Subject<MessageEvent> {
    //     let ws = new WebSocket(url);
    //     let observable = Observable.create(
    //         (obs: Observer<MessageEvent>) => {
    //             ws.onmessage = obs.next.bind(obs);
    //             ws.onerror = obs.error.bind(obs);
    //             ws.onclose = obs.complete.bind(obs);
    //             return ws.close.bind(ws);
    //         }
    //     );
    //     let observer = {
    //         next: (data: Object) => {
    //             if (ws.readyState === WebSocket.OPEN) {
    //                 ws.send(JSON.stringify(data));
    //             }
    //         },
    //     };
    //     return Subject.create(observer, observable);
    // }
    //
    // public send(data: string){
    //     //this.socket.next(new MessageEvent());
    // }
    // private socket: Rx.Subject<MessageEvent>;
    // public connect(): Subject<MessageEvent>{
    //     if(!this.socket) {
    //         this.socket = <Subject<MessageEvent>> Rx.DOM.fromWebSocket("ws://localhost:8080/ws/userinfo", null);
    //     }
    //     return this.socket;
    // }
    //
    // public send(data: string){
    //      this.socket.next({data:data});
    // }
    UsersService.prototype.connect = function () {
        if (!this.socket) {
            this.init();
        }
        return this.socket;
    };
    UsersService.prototype.init = function () {
        this.socket = webSocket_1.webSocket("ws://localhost:8080/ws/userinfo");
        //this.observable = this.socket.publish();
    };
    UsersService.prototype.send = function (data) {
        if (!this.socket) {
            this.init();
        }
        this.socket.next(JSON.stringify(data));
    };
    UsersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map