import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyrecipesComponent } from './myrecipes.component';
import { SharedModule } from '../../shared/shared.module';
import { RecipesRoutingModule } from '../recipe-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RecipesRoutingModule
  ],
  declarations: [MyrecipesComponent]
})
export class MyrecipesModule { }
