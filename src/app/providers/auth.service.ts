import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  error: any;
  user: Observable<firebase.User>;
  constructor(public af: AngularFireAuth) {
    this.user = af.authState;

   }

   loginWithGoogle() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }
   logout() {
    return this.af.auth.signOut();
  }

}

