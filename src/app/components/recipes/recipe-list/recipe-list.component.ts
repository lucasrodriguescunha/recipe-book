import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://img.cybercook.com.br/receitas/731/lasanha-3.jpeg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://img.cybercook.com.br/receitas/731/lasanha-3.jpeg'
    ),
  ];

  ngOnInit(): void {}
}
