import { AuthGuard } from './../providers/auth-guard.service';
import { RecipesResolver } from './../recipes/recipe-resolver';
import { RecipeGuardService } from './../recipes/guards/recipe-guard.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesService } from '../recipes/recipes.service';
import { AuthService } from '../providers/auth.service';

@NgModule({
  providers: [RecipesService, AuthService, RecipeGuardService, RecipesResolver, AuthGuard] // For only one istance
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Core module is already provided elsewhere');
    }
  }
}
