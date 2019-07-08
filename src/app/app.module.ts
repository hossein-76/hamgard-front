import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import {AuthService} from './auth/auth.service';
import { GroupsComponent } from './groups/groups.component';
import { EventsComponent } from './events/events.component';
import { GroupsListComponent } from './groups/groups-list/groups-list.component';
import { GroupsEditComponent } from './groups/groups-edit/groups-edit.component';
import { GroupsStartComponent } from './groups/groups-start/groups-start.component';
import { NewGroupComponent } from './groups/new-group/new-group.component';
import {GroupsService} from './groups/groups.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    NotFoundComponent,
    GroupsComponent,
    EventsComponent,
    GroupsListComponent,
    GroupsEditComponent,
    GroupsStartComponent,
    NewGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
