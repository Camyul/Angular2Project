import { Recipe } from './../../Models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe;

  constructor(private router: Router) { }

  redirectToDetails(id) {
    this.router.navigate([ '/recipes', id ]);
    // console.log(id);
  }

  ngOnInit() {
  }

}
