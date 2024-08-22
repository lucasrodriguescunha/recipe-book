import { EventEmitter } from '@angular/core'; // Importa EventEmitter do Angular, utilizado para emitir eventos quando a lista de ingredientes for alterada
import { Ingredient } from '../shared/ingredient.model'; // Importa o modelo Ingredient do diretório compartilhado, representando a estrutura de dados de um ingrediente na lista de compras

// Serviço ShoppingListService gerencia a lógica de manipulação da lista de compras, incluindo adição e fornecimento de ingredientes
export class ShoppingListService {
  // EventEmitter `ingredientsChanged` emite um evento sempre que a lista de ingredientes é atualizada, notificando componentes interessados
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  // Propriedade privada `ingredients` é um array de objetos Ingredient, inicialmente preenchido com dois ingredientes para fins de demonstração
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5), // Instancia um objeto Ingredient representando 5 maçãs e o adiciona ao array de ingredientes
    new Ingredient('Tomatoes', 10), // Instancia um objeto Ingredient representando 10 tomates e o adiciona ao array de ingredientes
  ];

  // Método `getIngredients` retorna uma cópia da lista de ingredientes, garantindo que o array original não seja modificado diretamente de fora do serviço
  getIngredients(): Ingredient[] {
    return this.ingredients.slice(); // Usa o método slice() para retornar uma nova cópia superficial do array de ingredientes, preservando a integridade do array original
  }

  // Método `addIngredient` adiciona um novo ingrediente à lista de ingredientes e emite um evento para notificar sobre a atualização
  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient); // Adiciona o objeto Ingredient fornecido ao final do array de ingredientes
    this.ingredientsChanged.emit(this.ingredients.slice()); // Emite o evento `ingredientsChanged` com uma nova cópia da lista de ingredientes, sinalizando que a lista foi atualizada
  }
}
