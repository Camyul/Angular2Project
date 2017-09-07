import { element } from 'protractor';
import { Recipe } from './../Models/recipe.model';
import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class RecipesService {

  private recipes$: FirebaseListObservable<any>;
  // private recipe$: FirebaseObjectObservable<any>;
  private recipe: Recipe;

  constructor(private db: AngularFireDatabase) {
    this.recipes$ = db.list('/recipes');
    // this.recipe$ = db.object('/recipes/');
   }

  addRecipe(recipe: Recipe) {
    this.recipes$.push(recipe);
  }

  getById(key: string) {

/* this.recipes$.subscribe(resipeshData => {
  console.log(resipeshData);              // All data in table: 'recipes'
}); */

  this.db.list('/recipes', {
                    query: {
                        orderByKey: true,
                        equalTo: key // current recipe id
                    }
                  })
            .subscribe(recipe => this.recipe = recipe[0]);

       return new Promise(res => {
        setTimeout(() => {
          res(this.recipe);
        }, 1000);
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
