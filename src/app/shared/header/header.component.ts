import { AuthService } from './../../providers/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user;
  public currUser;
  public isLoggedIn: Boolean = false;

  constructor(private authService: AuthService) {
    this.user = this.authService.user;
    this.currUser = this.authService.af.auth.currentUser;

    this.authService.af.authState.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
        }
      }
    );
   }

  ngOnInit() {
  }

  logout() {
    return this.authService.logout();
  }

}
