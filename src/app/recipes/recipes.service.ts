import { element } from 'protractor';
import { Recipe } from './../Models/recipe.model';
import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../providers/auth.service';

@Injectable()
export class RecipesService {

  private recipes$: FirebaseListObservable<any>;
  private favourites$: FirebaseListObservable<any>;
  private recipe: Recipe;
  public getRecipesByYear;

  constructor(private db: AngularFireDatabase, private authService: AuthService) {

     authService.user.subscribe(authData => {
       const userId = authData.uid;
       this.favourites$ = db.list('/' + userId);
      });
     this.recipes$ = db.list('/recipes');
     this.getRecipesByYear = this.recipes$ = db.list('/recipes', {
        query: {
          orderByChild: 'year',
          limitToLast: 8
        }
      });
    }

  addRecipe(recipe: Recipe) {
    this.recipes$.push(recipe);
  }
  addFavourite(recipe: Recipe) {
    this.favourites$.push(recipe);
  }

  deleteFromFavourite(key: string) {
    this.favourites$.remove(key);
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
  getAllFavourites() {
    return new Promise(res => { // Here get data from Database
      setTimeout(() => {
        res(this.favourites$);
      }, 2000);
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
