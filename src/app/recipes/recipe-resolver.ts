import { RecipesService } from './recipes.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class RecipesResolver implements Resolve<any> {

  constructor(private recipesService: RecipesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  // From here call Database
    return this.recipesService.getAll();
  }
}
