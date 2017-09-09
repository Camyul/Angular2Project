import { Recipe } from './../../Models/recipe.model';
import { AuthService } from './../../providers/auth.service';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  myform: any;

  recipes;
  public isLoggedIn: Boolean = false;

  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute, private authService: AuthService) {

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
    this.recipes = this.activatedRoute.snapshot.data['recipes'];
  }


  addRecipe(title, products, img, description, year) {
    const currDate = new Date().getTime();
    this.authService.af.authState.subscribe(
      (auth) => {

      this.recipesService.addRecipe({title, products, img, description, year, author: auth.uid, created: currDate});
      }
    );
    }


}
