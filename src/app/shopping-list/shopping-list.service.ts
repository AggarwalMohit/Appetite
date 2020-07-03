import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';  
export class ShoppingListService
{
    changedIngredientList_add=new EventEmitter<Ingredient[]>();
    
    ingrdnt:Ingredient[]=[new Ingredient('apples',5),
    new Ingredient('wine',1)];;
    getIngredient()
    {
        return this.ingrdnt;
    }
    addToIngredientList(ingr:Ingredient)
    {
        this.ingrdnt.push(ingr);
        this.changedIngredientList_add.emit(this.ingrdnt);
    }
    addRecipeToIngredientList(ings:Ingredient[])
    {
        this.ingrdnt.push(...ings);
        this.changedIngredientList_add.emit(this.ingrdnt.slice());
    }
}


//changedIngredientList_delete=new EventEmitter<Ingredient[]>();
//changedIngredientList_clear=new EventEmitter<Ingredient[]>();
// deleteFromIngredientList()
    // {
    //     this.ingrdnt.pop();
    //     this.changedIngredientList_delete.emit(this.ingrdnt.slice());
    // }
    // clearIngredientList()
    // {
    //     this.ingrdnt=[];
    //     this.changedIngredientList_delete.emit(this.ingrdnt.slice());
    // }