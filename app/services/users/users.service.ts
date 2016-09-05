//import {Observable, Observer, Subject} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {webSocket} from "rxjs/observable/dom/webSocket";
import {WebSocketSubject} from "rxjs/observable/dom/WebSocketSubject";
import {ConnectableObservable, Observable} from "rxjs";
import {UserInfo} from "../../types/UserInfo";


@Injectable()
export class UsersService {
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

    public connect(): WebSocketSubject<UserInfo> {
        if(!this.socket) {
            this.init();
        }
        return this.socket;
    }

    private socket: WebSocketSubject<UserInfo>;
    private observable: ConnectableObservable<UserInfo>;
    private init(){

        this.socket = webSocket<UserInfo>("ws://localhost:8080/ws/userinfo");
        //this.observable = this.socket.publish();


    }

    public send(data: UserInfo){
        if(!this.socket) {
            this.init();
        }
        this.socket.next(<any>JSON.stringify(data));
    }
}
