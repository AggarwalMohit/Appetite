import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput',{static:false}) nmIp:ElementRef;
@ViewChild('amountInput',{static:false}) amntIp:ElementRef;

@Output() ItemDelete=new EventEmitter<void>();
@Output() ItemClear=new EventEmitter<void>();

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }
onAdd()
{
  const ingAmt=this.amntIp.nativeElement.value;
  const ingName=this.nmIp.nativeElement.value;
  const newIngredient=new Ingredient(ingName,ingAmt);
  this.slService.addToIngredientList(newIngredient);
}
onDelete()
{
  this.ItemDelete.emit();
}

onClear(){
  this.ItemClear.emit();
}
}
