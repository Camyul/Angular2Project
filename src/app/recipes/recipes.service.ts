import { Recipe } from './../Models/recipe.model';
import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class RecipesService {

  private recipes: FirebaseListObservable<any>;
  private recipe: FirebaseObjectObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.recipes = db.list('/recipes');
    this.recipe = db.object('/recipes/recipe');
   }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  getById(key) {
       console.log(this.recipe.filter(x => x.$key === key));
       return new Promise(res => {
        setTimeout(() => {
          res(this.recipe);
        }, 0);
      });
  }

  getAll() {
    return new Promise(res => { // Here get data from Database
      setTimeout(() => {
        res(this.recipes);
      }, 1000);
    });
  }

}
