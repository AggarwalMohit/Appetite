import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
id:number;
  constructor(private recipeService:RecipeService,
    private activateRoute:ActivatedRoute,
    private route:Router) { }

  ngOnInit() {
    this.activateRoute.params
    .subscribe(
      (par:Params)=>{
        this.id=+par['id'];
        this.recipe=this.recipeService.getRecipeId(this.id);
      }
    );
  }
  onAddShoppingIngredients()
  {
    this.recipeService.addingRecipeIngredient(this.recipe.ingredient);
  }
  // onEditRecipe()
  // {
  //   this.route.navigate(['edit']);
  // }
}
