import { Injectable } from '@angular/core';

@Injectable()
export class RecipesService {

  private recipes = [
    {id: 1, title: 'Chips', products: 'potato', description: 'Some with potato'},
    {id: 2, title: 'Duner', products: 'chikens meat', description: 'An Arabic breadcrumb'},
    {id: 3, title: 'Tomato juce', products: 'tomato', description: 'Squeezing tomato'},
  ];

  constructor() { }

  addRecipie(recipie: {id: number, title: string, products: string, description: string}) {
    this.recipes.push(recipie);
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
