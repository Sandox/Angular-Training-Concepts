import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './Components/bindings/bindings.component';
import { PracticeBindingsComponent } from './Components/practice-bindings/practice-bindings.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DirectivesComponent } from './Components/directives/directives.component';
import { InputDecoratorComponent } from './Components/input-decorator/input-decorator.component';
import { SingleElementComponent } from './Components/single-element/single-element.component';
import { GameControlComponent } from './Components/secondLecture/game-control/game-control.component';
import { OddComponent } from './Components/secondLecture/odd/odd.component';
import { EvenComponent } from './Components/secondLecture/even/even.component';
import { NewDirectAppComponent } from './Components/new-direct-app/new-direct-app.component';
import { HighlighterDirective } from './Directives/highlighter.directive';
import { BetterHighlightDirective } from './Directives/better-highlight.directive';
import { AccountComponent } from './Components/account/account.component';
import { NewAccountComponent } from './Components/new-account/new-account.component';
import {AccountsService} from "./shared/accounts.service";
import { ActiveUsersComponent } from './Components/active-users/active-users.component';
import { InactiveUsersComponent } from './Components/inactive-users/inactive-users.component';
import {UsersService} from "./shared/users.service";
import {RouteConnectComponent}
from './Components/Routing-application-examples/route-connect.component/route-connect.component.component';
import { NothingComponent } from './Components/Routing-application-examples/nothing/nothing.component';
import { HomeComponent } from './Components/Routing-application-examples/home/home.component';
import { SpecialsComponent } from './Components/Routing-application-examples/specials/specials.component';
import { AllUsersComponent } from './Components/Routing-application-examples/all-users/all-users.component';
import { UserComponent } from './Components/Routing-application-examples/user/user.component';
import { EditUsersComponent } from './Components/Routing-application-examples/edit-users/edit-users.component';
import { ObservablesComponent } from './Components/observables/observables.component';
import { TemplateDrivenComponent } from './Components/forms/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './Components/forms/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    PracticeBindingsComponent,
    DirectivesComponent,
    InputDecoratorComponent,
    SingleElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    NewDirectAppComponent,
    HighlighterDirective,
    BetterHighlightDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RouteConnectComponent,
    NothingComponent,
    HomeComponent,
    SpecialsComponent,
    AllUsersComponent,
    UserComponent,
    EditUsersComponent,
    ObservablesComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AccountsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
