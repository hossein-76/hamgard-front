import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private  authService: AuthService ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const uName = form.value.userName;
    const fName = form.value.firstName;
    const lName = form.value.lastName;

    this.authService.signupUser(email, uName, fName, lName, password).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
