import { RecipeGuardService } from './guards/recipe-guard.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RecipesResolver } from './recipe-resolver';

const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: RecipesListComponent, resolve: {
      'recipes': RecipesResolver
    } },
    { path: ':id', component: RecipeDetailsComponent, canActivate: [RecipeGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
