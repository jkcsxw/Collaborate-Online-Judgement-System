import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { routing } from "./app.routes";
import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';

import { DataService } from "./services/data.service";
import { AuthService} from "./services/auth.service";

import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import {AuthGuardService} from "./services/auth-guard.service";
import { EditorComponent } from './components/editor/editor.component';
import { CollaborationService } from './services/collaboration.service';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    ProfileComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
    provide: "data",
    useClass: DataService
    },
    {
      provide: "auth",
      useClass: AuthService
    },
    // {
    //   provide: "authGuard",
    //   useClass: AuthGuardService
    // },
    AuthGuardService,
    {
      provide: "collaboration",
      useClass: CollaborationService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
