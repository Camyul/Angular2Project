import { Component, OnInit } from '@angular/core';

import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  user;
  constructor(private authService: AuthService) {
    this.user = this.authService.user;

  }
  ngOnInit() {
    this.title = 'The Tranquil Gazelles Team Project';
  }

  logout() {
    return this.authService.logout();
  }
}
