import { AuthService } from './../../providers/auth.service';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.component.html',
  styleUrls: ['./myrecipes.component.css']
})
export class MyrecipesComponent implements OnInit {

  recipes;

      constructor(private recipesService: RecipesService, private router: Router, private authService: AuthService) {}


      ngOnInit() {
        this.authService.user.subscribe(authData => {
          const userId = authData.uid;        // User ID from firebase

          this.recipesService.getByUser(userId)
          .then( data =>  {
            // console.log(data);
            this.recipes = data;
            }
          );

      });
      }

      deleteRecipe(key) {
        // console.log(key);

        this.recipesService.deleteFromRecipes(key);
      }

}
