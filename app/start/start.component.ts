import {Component} from "@angular/core";
import {UsersService} from "../services/users/users.service";
import {UserInfo} from "../types/UserInfo";

@Component({
    selector: 'start-comp',
    template: `
    <div>
      <label>name: </label>
      <input [(ngModel)]="username" placeholder="name">
      <button (click)="send()"></button>
    </div>
    `
})
export class StartComponent {
    private username: string;

    private users:UsersService;

    public constructor(users: UsersService){
        this.users = users;

        this.users.connect().subscribe((m)=>{
            console.log("users:" + m);
        });
    };

    public send(){
        this.users.send(new UserInfo(this.username, "Add"));
    }
}
