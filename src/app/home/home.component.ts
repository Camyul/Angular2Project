import { RecipeWithKey } from './../Models/recipeWithKey.model';
import { Recipe } from './../Models/recipe.model';
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
  public allRecipes = [];
  public errorMessage;
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
    this.recipes = this.recipesService.getRecipesByCreationDate(8)
      .then( data => {
        this.recipes = data;
        // console.log(this.recipes);
        }
      );
    this.recipesService.getAllRecipes()
        .subscribe((data) => {

          Object.keys(data).forEach((recipeKey) => {
              const newRecipe =
                new RecipeWithKey(
                  data[recipeKey].title,
                  data[recipeKey].products,
                  data[recipeKey].img,
                  data[recipeKey].description,
                  data[recipeKey].yeat,
                  data[recipeKey].author,
                  data[recipeKey].created,
                  recipeKey
                );
              this.allRecipes.push(newRecipe);
          });

          // console.log(this.allRecipes);
        },
          error => this.errorMessage = <any>error);
  }

}
