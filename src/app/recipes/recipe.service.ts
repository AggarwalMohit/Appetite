import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService 
{
 recipeSelected=new EventEmitter<Recipe>();   
    recipe:Recipe[]= [
        new Recipe('Rajma Chawal', 
        'Indian Continental', 
        'https://maunikagowardhan.co.uk/wp-content/uploads/2018/02/Kashmiri-Rajma-Masala-2.jpg',
        [new Ingredient('cup red kidney beans',1),
         new Ingredient('garam masala tps',1),
        new Ingredient('Rajma Masala tps',1),
        new Ingredient('Green Chilli',8),
        new Ingredient('onion',3),
        new Ingredient('Garlic buds',5)
    
      ]),
        new Recipe('Chicken Tandoori',
         'Mughlai Special', 
         'https://www.whiskaffair.com/wp-content/uploads/2015/12/Tandoori-Chicken-5.jpg',
         [new Ingredient('Chicken in Kgs',1),
         new Ingredient('garam masala tps',1),
        new Ingredient('Chicken Masala tps',1),
        new Ingredient('Green Chilli',8),
        new Ingredient('onion',3),
        new Ingredient('Garlic buds',5)])
      ];


    constructor(private slService:ShoppingListService)
    {}
    
    getRecipe()
    {
        return this.recipe.slice();
    }
    RecipeEmitted(rec:Recipe)
    {
        this.recipeSelected.emit(rec)
    }
    addingRecipeIngredient(ing:Ingredient[])
    {
        this.slService.addRecipeToIngredientList(ing);
    }
    getRecipeId(id:number)
    {
        return this.recipe[id];
    }

}