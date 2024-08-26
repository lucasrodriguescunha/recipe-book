// Importa o EventEmitter do Angular, utilizado para emitir eventos personalizados entre componentes
import { EventEmitter, Injectable } from '@angular/core';

// Importa o modelo Recipe, que define a estrutura dos dados de uma receita
import { Recipe } from '../components/recipes/recipe.model';

// Importa o modelo Ingredient, que representa um ingrediente com seu nome e quantidade
import { Ingredient } from '../shared/ingredient.model';
// Importa o serviço ShoppingListService, responsável por gerenciar a lista de compras
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  // EventEmitter que emite eventos sempre que uma receita é selecionada,
  // permitindo que outros componentes sejam notificados e atualizados em tempo real
  recipeSelected = new EventEmitter<Recipe>();

  // Array privado de objetos Recipe, que armazena a lista de receitas disponíveis.
  // Inicialmente, o array é populado com dois exemplos de receitas de teste para fins de demonstração
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', // Nome da primeira receita
      'This is simply a test', // Descrição da primeira receita
      'https://img.cybercook.com.br/receitas/731/lasanha-3.jpeg', // URL da imagem da primeira receita
      [
        new Ingredient('Meat', 1), // Ingrediente: Carne, quantidade: 1
        new Ingredient('French Fries', 20), // Ingrediente: Batatas fritas, quantidade: 20
      ]
    ),
    new Recipe(
      'Another Test Recipe', // Nome da segunda receita
      'This is simply a test', // Descrição da segunda receita
      'https://img.cybercook.com.br/receitas/731/lasanha-3.jpeg', // URL da imagem da segunda receita
      [
        new Ingredient('Buns', 2), // Ingrediente: Pães, quantidade: 2
        new Ingredient('Meat', 1), // Ingrediente: Carne, quantidade: 1
      ]
    ),
  ];

  // Injeta o serviço ShoppingListService para adicionar ingredientes à lista de compras
  constructor(private slService: ShoppingListService) {}

  // Método público que retorna uma cópia do array de receitas,
  // permitindo que outros componentes obtenham a lista de receitas sem modificar o array original.
  // O método slice() é utilizado para criar uma cópia superficial do array.
  getRecipes() {
    return this.recipes.slice();
  }

  // Método que adiciona os ingredientes da receita à lista de compras,
  // utilizando o serviço ShoppingListService
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
