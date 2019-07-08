import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit( form: NgForm) {
    const userName = form.value.userName;
    const password = form.value.password;
    this.authService.signinUser(userName, password);
  }
}
