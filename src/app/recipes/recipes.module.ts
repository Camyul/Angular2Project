import { SummaryPipe } from './../pipes/summary.pipe';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesRoutingModule } from './recipe-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { InputYearValidationDirective } from '../directives/input-year-validation.directive';
import { InputStringValidationDirective } from '../directives/input-string-validation.directive';

@NgModule({
  imports: [
    SharedModule,
    RecipesRoutingModule
  ],
  declarations: [
    RecipesListComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    SummaryPipe,
    InputYearValidationDirective,
    InputStringValidationDirective
  ]
})
export class RecipesModule { }
