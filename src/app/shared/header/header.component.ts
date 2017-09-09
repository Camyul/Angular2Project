import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user;
  public userPhoto;
  public isLoggedIn: Boolean = false;

  constructor(private authService: AuthService) {
    this.user = this.authService.user;
    this.userPhoto = this.authService.af.auth.currentUser.photoURL;
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
