import { Component } from '@angular/core';
import {UsersService} from "./services/users/users.service";
@Component({
    selector: 'my-app',
    template: `<h1>Multiplayer canvas</h1>
    <start-comp></start-comp>
    <user-list></user-list>
    `,
    providers: [UsersService],
})
export class AppComponent { }