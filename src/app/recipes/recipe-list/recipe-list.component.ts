import { Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  id:number;
  recipes: Recipe[]; 
  //= [
  //   new Recipe('Rajma Chawal', 
  //   'Indian Continental', 
  //   'https://maunikagowardhan.co.uk/wp-content/uploads/2018/02/Kashmiri-Rajma-Masala-2.jpg',
  //   [new Ingredient('cup red kidney beans',1),
  //    new Ingredient('garam masala tps',1),
  //   new Ingredient('Rajma Masala tps',1),
  //   new Ingredient('Green Chilli',8),
  //   new Ingredient('onion',3),
  //   new Ingredient('Garlic buds',5)

  // ]),
  //   new Recipe('Chicken Tandoori',
  //    'Mughlai Special', 
  //    'https://www.whiskaffair.com/wp-content/uploads/2015/12/Tandoori-Chicken-5.jpg',
  //    [new Ingredient('cup red kidney beans',1),
  //    new Ingredient('garam masala tps',1),
  //   new Ingredient('Chicken Masala tps',1),
  //   new Ingredient('Green Chilli',8),
  //   new Ingredient('onion',3),
  //   new Ingredient('Garlic buds',5)])
  // ];

  constructor(private recipeService:RecipeService,
    private activateRoute:ActivatedRoute,
    private route:Router) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipe();
  }
  onClickNewRecipe()
  {
    this.route.navigate(['./new'],{relativeTo:this.activateRoute});
  }
}
