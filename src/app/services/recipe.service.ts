// Importa o EventEmitter do Angular, utilizado para emitir eventos personalizados
import { EventEmitter } from '@angular/core';
// Importa o modelo Recipe, que define a estrutura dos dados de uma receita
import { Recipe } from '../components/recipes/recipe.model';

export class RecipeService {
  // EventEmitter que emite eventos sempre que uma receita é selecionada,
  // permitindo que outros componentes sejam notificados e atualizados
  recipeSelected = new EventEmitter<Recipe>();

  // Array privado de objetos Recipe, que representa a lista de receitas disponíveis.
  // Inicialmente, o array é populado com dois exemplos de receitas para fins de teste
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', // Nome da primeira receita
      'This is simply a test', // Descrição da primeira receita
      'https://img.cybercook.com.br/receitas/731/lasanha-3.jpeg' // URL da imagem da primeira receita
    ),
    new Recipe(
      'Another Test Recipe', // Nome da segunda receita
      'This is simply a test', // Descrição da segunda receita
      'https://img.cybercook.com.br/receitas/731/lasanha-3.jpeg' // URL da imagem da segunda receita
    ),
  ];

  // Método público que retorna uma cópia do array de receitas,
  // permitindo que outros componentes obtenham a lista de receitas sem modificar o array original
  getRecipes() {
    return this.recipes.slice(); // Retorna uma cópia superficial do array de receitas
  }
}
