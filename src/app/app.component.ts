import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyC8B7-vl2zI0R8k0xf6qff_h_JIdjtru-8',
      authDomain: 'hamgard-test.firebaseapp.com'
    });

    this.router.navigate(['']);
  }
}
