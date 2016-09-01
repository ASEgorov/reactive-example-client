import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import {StartComponent} from "./start/start.component";
import {UsersService} from "./services/users/users.service";
import {UserListComponent} from "./user-list/user-list.component";

@NgModule({
    imports:      [ BrowserModule,
        FormsModule],
    declarations: [ AppComponent, StartComponent, UserListComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
