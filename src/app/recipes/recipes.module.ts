import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesRoutingModule } from './recipe-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

@NgModule({
  imports: [
    SharedModule,
    RecipesRoutingModule
  ],
  declarations: [RecipesListComponent, RecipeComponent, RecipeDetailsComponent]
})
export class RecipesModule { }
