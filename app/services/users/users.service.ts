import {Injectable} from "@angular/core";
import {webSocket} from "rxjs/observable/dom/webSocket";
import {WebSocketSubject} from "rxjs/observable/dom/WebSocketSubject";
import {UserInfo} from "../../types/UserInfo";


@Injectable()
export class UsersService {
    public connect(): WebSocketSubject<UserInfo> {
        if(!this.socket) {
            this.init();
        }
        return this.socket;
    }

    private socket: WebSocketSubject<UserInfo>;
    private init(){
        this.socket = webSocket<UserInfo>("ws://localhost:8080/ws/userinfo");
    }

    public send(data: UserInfo){
        if(!this.socket) {
            this.init();
        }
        this.socket.next(<any>JSON.stringify(data));
    }
}
