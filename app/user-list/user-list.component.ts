import {Component} from "@angular/core";
import {UsersService} from "../services/users/users.service";
import {UserInfo} from "../types/UserInfo";

@Component({
    selector: 'user-list',

    template: `
    <div *ngFor="let user of userList">
     {{user.name}}
    </div>
    `
})
export class UserListComponent {
    private userList: UserInfo[] = [];

    private users:UsersService;

    public constructor(users: UsersService){
        this.users = users;
        let _this = this;

        this.users.connect().subscribe((m)=>{
            console.log("users:" + m);
        });

        this.users.connect().subscribe({next : (m)=>{
            _this.userList.push(m);
        }});
    };

}