import { Ingredient } from '../shared/ingredient.model'; // Importa o modelo Ingredient do diretório compartilhado para representar ingredientes na lista de compras

export class ShoppingListService {
  // Inicializa o array `ingredients` com dois exemplos de ingredientes para demonstração
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5), // Adiciona um ingrediente com o nome "Apples" e a quantidade 5 à lista de ingredientes
    new Ingredient('Tomatoes', 10), // Adiciona um ingrediente com o nome "Tomatoes" e a quantidade 10 à lista de ingredientes
  ];

  // Retorna uma cópia do array de ingredientes para garantir que o array original não seja modificado externamente
  getIngredients(): Ingredient[] {
    return this.ingredients.slice(); // Usa o método slice() para criar e retornar uma cópia superficial do array de ingredientes
  }

  // Adiciona um novo ingrediente ao array de ingredientes
  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient); // Adiciona o ingrediente fornecido ao final do array de ingredientes
  }
}
