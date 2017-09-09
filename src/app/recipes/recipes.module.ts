import { MyrecipesModule } from './myrecipes/myrecipes.module';
import { SummaryPipe } from './../pipes/summary.pipe';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesRoutingModule } from './recipe-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { InputYearValidationDirective } from '../directives/input-year-validation.directive';
import { InputStringValidationDirective } from '../directives/input-string-validation.directive';
import { InputFormatDirective } from '../directives/input-format.directive';
import { RecipesFavouritesComponent } from './recipes-favourites/recipes-favourites.component';

@NgModule({
  imports: [
    SharedModule,
    RecipesRoutingModule,
    MyrecipesModule
  ],
  declarations: [
    RecipesListComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    SummaryPipe,
    InputYearValidationDirective,
    InputStringValidationDirective,
    InputFormatDirective,
    RecipesFavouritesComponent
  ]
})
export class RecipesModule { }
