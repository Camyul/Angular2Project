import { RecipesService } from './../recipes.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Injectable()
export class RecipeGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const id = route.params['id'];

        let recipeFound = false;
        const result = this.recipesService.getById(id).then(
          data => {recipeFound = !!data;

          let check = true;

          if (recipeFound) {
            check = true;
          } else {
            this.router.navigate(['/home']); // If id don't exist, redirect to 'home'
            check = false;
          }
          return check;
        }
        );

        return result;
  }

  constructor(private recipesService: RecipesService, private router: Router) { }

}
