// Importa o decorador Component e os módulos Input e OnInit do Angular
import { Component, Input, OnInit } from '@angular/core';
// Importa o modelo Recipe, que define a estrutura de uma receita
import { Recipe } from '../recipe.model';
// Importa o serviço RecipeService, responsável por gerenciar receitas e ingredientes
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  // Define o seletor do componente, utilizado para incorporá-lo em templates HTML
  selector: 'app-recipe-detail',
  // Define o caminho para o template HTML associado a este componente
  templateUrl: './recipe-detail.component.html',
  // Define o caminho para o arquivo CSS que estiliza este componente
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // Recebe dados de uma receita como entrada (input) de outro componente pai
  @Input() recipe: Recipe;

  // Injeta o serviço RecipeService para gerenciar ações relacionadas a receitas e ingredientes
  constructor(private recipeService: RecipeService) {}

  // Método do ciclo de vida do Angular, executado ao inicializar o componente
  ngOnInit() {}

  // Método que adiciona os ingredientes da receita à lista de compras, utilizando o RecipeService
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
