import { Recipe } from './../../Models/recipe.model';
import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../providers/auth.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  public recipe;
  public isLoggedIn: Boolean = false;

  constructor(private recipesService: RecipesService,
    private activatedRout: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {

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


  addToFavourites(recipe) {
    recipe.then( data =>
      this.recipesService.addFavourite(data)
    );
    this.router.navigate(['/recipes']);
  }

  ngOnInit() {
    const id = this.activatedRout.snapshot.params['id']; // TODO: check for null
    // console.log(id);
    this.recipe = this.recipesService.getById(id);
  }

  onBack(): void {
    this.router.navigate(['/recipes']);
  }

}
