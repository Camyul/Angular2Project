import { ActivatedRoute } from '@angular/router';
import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes;

  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.activatedRoute.snapshot.data['recipes'];
  }

  addRecipie(title, products, img, description, year) {
    const id = +this.recipes.length + 1;

    this.recipesService.addRecipie({id: id, title: title, products: products, img: img, description: description, year: year});
  }

}
