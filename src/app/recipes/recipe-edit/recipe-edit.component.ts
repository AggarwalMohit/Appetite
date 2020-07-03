import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id:number;
editMode:boolean;
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
  this.activateRoute.params.subscribe(
    (par:Params)=>
    {
      this.id=+par['id'];
      this.editMode=par['id']!=null;
      console.log(this.editMode);
    }
  )
  }


}
