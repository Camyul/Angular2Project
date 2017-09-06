import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: {
    id: number;
    title: string;
    products: string;
    description: string;
  };

  constructor(private router: Router) { }

  redirectToDetails(id) {
    this.router.navigate([ '/recipes', id ]);
  }

  ngOnInit() {
  }

}
