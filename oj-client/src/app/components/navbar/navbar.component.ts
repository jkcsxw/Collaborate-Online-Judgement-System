import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
//TODO Bug: fter log in, must refresh to view username
export class NavbarComponent implements OnInit {

  nickname = "New User";

  title = "FakeOJ";

  constructor(@Inject('auth') public auth) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    this.auth.getProfile((err, profile) => { if(profile.nickname){this.nickname = profile.nickname;} });
  }

  login():void{
    this.auth.login();
  }

  logout(): void{
    this.auth.logout();
  }

}
