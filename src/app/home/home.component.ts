import { Component, OnInit } from '@angular/core';

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.title = 'The Tranquil Gazelles Team Project';
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  ngOnInit() {
  }

}
