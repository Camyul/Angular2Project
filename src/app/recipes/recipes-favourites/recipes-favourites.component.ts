import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-favourites',
  templateUrl: './recipes-favourites.component.html',
  styleUrls: ['./recipes-favourites.component.css']
})
export class RecipesFavouritesComponent implements OnInit {

  recipes;


    constructor(private recipesService: RecipesService, private router: Router) {}

    ngOnInit() {
      this.recipesService.getAllFavourites()
      .then( data => {
        this.recipes = data;
        // console.log(this.recipes);
      }
      );
    }

}
