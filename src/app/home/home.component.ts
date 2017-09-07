import { Component, OnInit } from '@angular/core';

import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private title: string;
  private user;
  private berries = require("../images/berries.jpg");
  private pizza = require("../images/pizza.jpg");
  private vegies = require("../images/vegies.jpg");

  constructor(private authService: AuthService) {
    this.user = this.authService.user;
    this.user.subscribe(authData => {
      // console.log(authData);         // All user info from firebase
      // console.log(authData.uid);        // User ID from firebase
  });
  }
  ngOnInit() {
    this.title = 'The Tranquil Gazelles Team Project';
  }

}
