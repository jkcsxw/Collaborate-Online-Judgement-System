import {Component, OnInit, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {Subscription} from "rxjs"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
//TODO Bug: after log in, must refresh to view username
export class NavbarComponent implements OnInit {

  nickname = "New User";

  title = "FakeOJ";

  searchBox: FormControl = new FormControl();
  subscription: Subscription;

  constructor(@Inject('auth') public auth,
              @Inject('input') private input,
              private router : Router) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    this.auth.getProfile((err, profile) => { if(profile.nickname){this.nickname = profile.nickname;} });

    this.subscription = this.searchBox.valueChanges.subscribe(term => {this.input.changeInput(term);});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  searchProblem(): void {
    this.router.navigate(['/problems']);
  }

  login():void{
    this.auth.login();
  }

  logout(): void{
    this.auth.logout();
  }

}
