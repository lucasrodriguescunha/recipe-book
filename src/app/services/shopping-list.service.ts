import { EventEmitter } from '@angular/core';
// Importa EventEmitter do Angular, utilizado para emitir eventos quando a lista de ingredientes for alterada

import { Ingredient } from '../shared/ingredient.model';
// Importa o modelo Ingredient do diretório compartilhado, representando a estrutura de dados de um ingrediente na lista de compras

// Serviço ShoppingListService que gerencia a lógica de manipulação da lista de compras, incluindo adição e fornecimento de ingredientes
export class ShoppingListService {
  // EventEmitter `ingredientsChanged` emite um evento sempre que a lista de ingredientes é atualizada,
  // permitindo que outros componentes sejam notificados sobre as mudanças
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  // Propriedade privada `ingredients`, um array de objetos Ingredient que armazena a lista de ingredientes.
  // Inicialmente, é populado com dois ingredientes de exemplo para demonstração
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5), // Instancia um objeto Ingredient representando 5 maçãs e o adiciona ao array de ingredientes
    new Ingredient('Tomatoes', 10), // Instancia um objeto Ingredient representando 10 tomates e o adiciona ao array de ingredientes
  ];

  // Método `getIngredients` retorna uma cópia da lista de ingredientes,
  // garantindo que o array original não seja modificado diretamente por outros componentes
  getIngredients(): Ingredient[] {
    return this.ingredients.slice(); // Retorna uma cópia superficial do array de ingredientes usando o método slice(), preservando o array original
  }

  // Método `addIngredient` adiciona um novo ingrediente à lista de ingredientes
  // e emite um evento para notificar que a lista foi atualizada
  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient); // Adiciona o ingrediente fornecido ao array de ingredientes
    this.ingredientsChanged.emit(this.ingredients.slice()); // Emite o evento `ingredientsChanged` com uma cópia atualizada do array de ingredientes
  }

  // Método `addIngredients` adiciona múltiplos ingredientes à lista de uma vez,
  // utilizando o operador spread para inserir todos os novos ingredientes no array
  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients); // Adiciona todos os ingredientes fornecidos ao array de ingredientes usando o operador spread
    this.ingredientsChanged.emit(this.ingredients.slice()); // Emite o evento `ingredientsChanged` com a lista de ingredientes atualizada
  }
}
