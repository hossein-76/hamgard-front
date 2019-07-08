import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {GroupsComponent} from './groups/groups.component';
import {EventsComponent} from './events/events.component';
import {GroupsEditComponent} from './groups/groups-edit/groups-edit.component';
import {GroupsStartComponent} from './groups/groups-start/groups-start.component';
import {NewGroupComponent} from './groups/new-group/new-group.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'groups', component: GroupsComponent, children: [
      { path: '', component: GroupsStartComponent},
      { path: 'new', component: NewGroupComponent},
      { path: ':index', component: GroupsEditComponent}
    ] },
  { path: 'events', component:  EventsComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
