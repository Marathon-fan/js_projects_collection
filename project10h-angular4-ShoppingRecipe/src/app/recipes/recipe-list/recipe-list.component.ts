import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Recipe',
      'http://media3.sailusfood.com/wp-content/uploads/2016/03/veg-momos-recipe.jpg'),
    new Recipe('A Test Recipe', 'This is simply a Recipe',
      'http://media3.sailusfood.com/wp-content/uploads/2016/03/veg-momos-recipe.jpg')
    ]

  constructor() { }

  ngOnInit() {
  }

}
