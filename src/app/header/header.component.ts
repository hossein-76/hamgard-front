import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Hamgard';
  constructor(private authServive: AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authServive.signoutUser();
  }
}
