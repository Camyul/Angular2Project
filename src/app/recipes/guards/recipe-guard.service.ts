import { RecipesService } from './../recipes.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Injectable()
export class RecipeGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const id = +route.params['id'];

        const recipeFound = !!this.recipesService.getById(id);

        let check = true;

        if (recipeFound) {
          check = true;
        } else {
          this.router.navigate(['/home']); // If id don't exist, redirect to 'home'
          check = false;
        }

        return check;
  }

  constructor(private recipesService: RecipesService, private router: Router) { }

}
