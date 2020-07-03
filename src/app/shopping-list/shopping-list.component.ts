import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
ingredient:Ingredient;
  ingredients:Ingredient[];
  private igChangeSub:Subscription;
  constructor(private slService:ShoppingListService) { }
  ngOnInit() {
    this.ingredients=this.slService.getIngredient();
   // if((this.add)&&(!this.clear)&&(!this.delete)){ 
    this.igChangeSub= this.slService.changedIngredientList_add.subscribe
      (
        (ingr:Ingredient[])=>
        {
          this.ingredients=ingr;
        }
      )
     }
    ngOnDestroy():void{
      this.igChangeSub.unsubscribe();
    }
  onItemDelete()
  {
    this.ingredients.pop();
  }
  onItemClear()
  {
  this.ingredients=[];
  }  
}







  //this.slService.clearIngredientList();
  // this.add=false;
  // this.delete=false;
  // this.clear=true;

//  this.slService.deleteFromIngredientList();
  // this.add=false;
  // this.delete=true;
  // this.clear=false;

// add:boolean=false;
// delete:boolean=false;
// clear:boolean=false;

  // if((!this.add)&&(!this.clear)&&(this.delete)){ 
    //   this.slService.changedIngredientList_delete.subscribe
    //   (
    //     (ingr:Ingredient[])=>{this.ingredients=ingr;}
    //   )
    //   }
    //   if((!this.add)&&(this.clear)&&(!this.delete)){ 
    //     this.slService.changedIngredientList_clear.subscribe
    //     (
    //       (ingr:Ingredient[])=>{this.ingredients=ingr;}
    //     )
   // }
    // onItemAdd(ingr:Ingredient)
    // {
    //   this.slService.addToIngredientList(ingr);
    //   // this.add=true;
    //   // this.delete=false;
    //   // this.clear=false;
    // }
  