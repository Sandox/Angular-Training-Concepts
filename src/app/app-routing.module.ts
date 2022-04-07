import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewDirectAppComponent} from "./Components/new-direct-app/new-direct-app.component";
import {HomeComponent} from "./Components/Routing-application-examples/home/home.component";
import {NothingComponent} from "./Components/Routing-application-examples/nothing/nothing.component";
import {AllUsersComponent} from "./Components/Routing-application-examples/all-users/all-users.component";
import {UserComponent} from "./Components/Routing-application-examples/user/user.component";
import {EditUsersComponent} from "./Components/Routing-application-examples/edit-users/edit-users.component";
import {DirectivesComponent} from "./Components/directives/directives.component";
import {NewAccountComponent} from "./Components/new-account/new-account.component";
import {PracticeBindingsComponent} from "./Components/practice-bindings/practice-bindings.component";
import {TemplateDrivenComponent} from "./Components/forms/template-driven/template-driven.component";
import {ReactiveFormsComponent} from "./Components/forms/reactive-forms/reactive-forms.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: AllUsersComponent ,children: [
      { path: ':id/:name', component: UserComponent }, //: [:/id] colon tells Angular that this name or by id is dynamic
      { path: ':id', component: UserComponent }, // Loads a single user using the ID
      { path: ':id/:edit', component: EditUsersComponent }
    ]},
  { path: 'special', component: NewDirectAppComponent },
  {path:'assesment1', component:DirectivesComponent},
  {path:'accounts', component:NewAccountComponent},
  {path:'bindings', component:PracticeBindingsComponent},
  {path:'template-forms', component:TemplateDrivenComponent},
  {path:'reactive-forms', component:ReactiveFormsComponent},
  { path: 'not-found', component: NothingComponent },
  { path: '**', redirectTo:'/not-found' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
