import {Component} from "@angular/core";
import {UsersService} from "../services/users/users.service";
import {UserInfo} from "../types/UserInfo";

@Component({
    selector: 'start-comp',
    template: `
    <div>
      <label>name: </label>
      <input [(ngModel)]="username" placeholder="name" [disabled]="userSend">
      <button (click)="send()" [disabled]="userSend"></button>
    </div>
    `
})
export class UsernameComponent {
    private username: string;

    private users:UsersService;

    private userSend:boolean = false;

    public constructor(users: UsersService){
        this.users = users;

        this.users.connect().subscribe((m)=>{
            console.log("users:" + m);
        });
    };

    public send(){
        this.users.send(new UserInfo(this.username, "Add"));
        this.userSend = true;
    }
}
