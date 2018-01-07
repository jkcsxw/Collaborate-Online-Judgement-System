// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { Router,NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import {AUTH_CONFIG} from "../../../constant";
import 'rxjs/add/operator/filter';

@Injectable()
export class AuthService {

  //authorilazation information, you may need you create an account on auth0 for this function
  //noinspection TypeScriptUnresolvedFunction
  auth0 = new auth0.WebAuth(AUTH_CONFIG[0]);
  userProfile: any;

  constructor(public router: Router) {}


  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    const scopes = authResult.scope || AUTH_CONFIG[0].scope || '';
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }



  //...
  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
          if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  //TODO some problem requesting reset password
  public resetPassword() {
    //noinspection TypeScriptUnresolvedFunction
    var webAuth = new auth0.WebAuth({
      domain:       'kkzero.auth0.com',
      clientID:     'WSDDAcSNhDrSrwXBEe3uIVj8HTkovjPt'
    });

    webAuth.changePassword({
      connection: 'CONNECTION',
      email:   this.userProfile.name
    }, function (err, resp) {
      if(err){
        console.log(err.message);
      }else{
        console.log(resp);
      }
    });
  }

  public userHasScopes(scopes: Array<string>): boolean {
    const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
    return scopes.every(scope => grantedScopes.includes(scope));
  }
}
