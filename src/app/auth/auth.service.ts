import {Injectable} from '@angular/core';

import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  token: string;
  host = 'http://192.168.43.124:8001';

  constructor(private  router: Router,
              private http: HttpClient) {}

  signupUser(e: string, uName: string, fName: string, lName: string, pass: string) {
    return this.http.post(this.host + '/api/account/register/', {
      email: e,
      username: uName,
      firstname: fName,
      lastname: lName,
      password: pass
    });

  }

  signinUser(uname: string, pass: string) {
    return this.http.post(this.host + '/api/account/signin/', {
      username: uname,
      password: pass
    }).subscribe(
      (response: any) => {
        this.token = response.token;
        console.log(this.token);
        this.router.navigate(['/']);
      }
    );
  }

  signoutUser() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
