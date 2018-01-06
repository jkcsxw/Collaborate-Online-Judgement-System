import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
//TODO After log in, must refresh to view username
export class NavbarComponent implements OnInit {

  // profile: any;

  nickname = "New User";

  title = "FakeOJ";

  constructor(@Inject('auth') public auth) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    if (this.auth.userProfile) {
      // this.profile = ;
      this.nickname = this.auth.userProfile.nickname;
    } else {
      this.auth.getProfile((err, profile) => {
        // this.profile = ;
        this.nickname = profile.nickname;
      });
    }
  }


  login():void{
    this.auth.login()
      .then(profile => this.nickname = profile.nickname)
      .catch(error => console.log(error));
  }

  logout(): void{
    this.auth.logout();
  }

}
