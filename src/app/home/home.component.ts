import { Router } from '@angular/router';
import { RecipesService } from './../recipes/recipes.service';
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
  public recipes;

  constructor(private authService: AuthService, private recipesService: RecipesService, private router: Router) {
    this.user = this.authService.user;
    this.user.subscribe(authData => {
      // console.log(authData);         // All user info from firebase
      // console.log(authData.uid);        // User ID from firebase
    });
  }

   redirectToDetails(id) {
    this.router.navigate([ '/recipes', id ]);
    // console.log(id);
  }

  ngOnInit() {
    this.title = 'The Tranquil Gazelles Team Project';
    this.recipes = this.recipesService.getRecipesByYear;
  }

}
