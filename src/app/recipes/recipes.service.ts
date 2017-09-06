import { Recipe } from './../Models/recipe.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipesService {

  private recipes = [
    {id: 1, title: 'Chips', products: 'potato',
    img: 'http://images.media-allrecipes.com/userphotos/250x250/3485679.jpg', description: 'Some with potato', year: '2017'},
    {id: 2, title: 'Duner', products: 'chikens meat',
    img: 'http://images.media-allrecipes.com/userphotos/250x250/3485679.jpg', description: 'An Arabic breadcrumb', year: '2017'},
    {id: 3, title: 'Tomato juce', products: 'tomato',
    img: 'http://images.media-allrecipes.com/userphotos/250x250/3485679.jpg', description: 'Squeezing tomato', year: '2017'},
  ];

  constructor() { }

  addRecipie(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  getById(id) {
    return this.recipes.find(x => x.id === id);
  }

  getAll() {
    return new Promise(res => { // Here get data from Database
      setTimeout(() => {
        res(this.recipes);
      }, 1000);
    });
  }

}
