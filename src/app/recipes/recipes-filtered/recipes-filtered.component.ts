import { RecipeWithKey } from './../../Models/recipeWithKey.model';
import { Recipe } from './../../Models/recipe.model';
import { AuthService } from './../../providers/auth.service';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-filtered.component.html',
  styleUrls: ['./recipes-filtered.component.css']
})
export class RecipesFilteredComponent implements OnInit {
  public errorMessage;
  public isLoggedIn: Boolean = false;

  private _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredRecipes = this.listFilter ? this.performFilter(this.listFilter) : this.recipes;
  }

  public filteredRecipes: RecipeWithKey[] = [];
  public recipes: RecipeWithKey[] = [];

  constructor(private recipesService: RecipesService) { }

  performFilter(filterBy: string): RecipeWithKey[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.recipes.filter((recipe: RecipeWithKey) =>
      recipe.products.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {

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
              this.recipes.push(newRecipe);
              this.filteredRecipes.push(newRecipe);
          });

        },
          error => this.errorMessage = <any>error);
  }
}
