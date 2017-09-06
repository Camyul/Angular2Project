import { element } from 'protractor';
import { Recipe } from './../Models/recipe.model';
import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class RecipesService {

  private recipes$: FirebaseListObservable<any>;
  // private recipe$: FirebaseObjectObservable<any>;
  private localVar: Recipe;

  constructor(db: AngularFireDatabase) {
    this.recipes$ = db.list('/recipes');
    // this.recipe$ = db.object('/recipes/');
   }

  addRecipe(recipe: Recipe) {
    this.recipes$.push(recipe);
  }

  getById(key: string) {
    // this.recipe = this.db.object('/recipes/' + key);

    this.recipes$.subscribe((val) => {val.forEach(element => {   // Big Shit, but works
      if (element.$key === key) {
        this.localVar = element;
      }
    });
  });

       return new Promise(res => {
        setTimeout(() => {
          res(this.localVar);
        }, 0);
      });
  }

  getAll() {
    return new Promise(res => { // Here get data from Database
      setTimeout(() => {
        res(this.recipes$);
      }, 1000);
    });
  }

}
