import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  } */
  title = 'The Tranquil Gazelles Team app';
  user: Observable<firebase.User>;
    constructor(public afAuth: AngularFireAuth) {
      this.user = afAuth.authState;
    }
    login() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      // console.log(this.afAuth.auth.currentUser.displayName);
    }
    logout() {
      this.afAuth.auth.signOut();
    }
}
