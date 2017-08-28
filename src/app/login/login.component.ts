import { AuthService } from './../providers/auth.service';
import { Component, OnInit, HostBinding } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()]
  // host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  user: Observable<firebase.User>;
  constructor(private authService: AuthService, private router: Router) {

    this.user = authService.user;

    this.authService.af.authState.subscribe(auth => {
    if (auth) {
      this.router.navigateByUrl('home');
    }
  });
}

ngOnInit() {
}

loginGoogle() {
  this.authService.loginWithGoogle().then((data) => {
    this.router.navigate(['home']);
  });
}

}
