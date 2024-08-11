// Importa as dependências necessárias do Angular e de modelos compartilhados
import { Component, OnInit } from '@angular/core'; // Importa a classe Component para definir um componente Angular e a interface OnInit para o ciclo de vida do componente
import { Ingredient } from 'src/app/shared/ingredient.model'; // Importa o modelo Ingredient do diretório compartilhado para uso no componente

// Define o decorador @Component, que configura o metadado para o componente Angular
@Component({
  selector: 'app-shopping-list', // Define o seletor usado para inserir este componente no HTML
  templateUrl: './shopping-list.component.html', // Especifica o caminho do template HTML associado a este componente
  styleUrls: ['./shopping-list.component.css'], // Especifica o caminho do arquivo de estilos CSS associado a este componente
})
export class ShoppingListComponent implements OnInit {
  // Declara uma propriedade `ingredients`, que é um array do tipo Ingredient e armazena a lista de ingredientes
  ingredients: Ingredient[] = [
    // Inicializa o array `ingredients` com dois exemplos de ingredientes
    new Ingredient('Apples', 5), // Adiciona um ingrediente com o nome "Apples" e a quantidade 5
    new Ingredient('Tomatoes', 10), // Adiciona um ingrediente com o nome "Tomatoes" e a quantidade 10
  ];

  // Implementa o método `ngOnInit`, que faz parte do ciclo de vida do Angular
  // Este método é chamado logo após o componente ser inicializado
  ngOnInit(): void {
    // Atualmente, não há lógica adicional dentro deste método
  }

  // Define o método `onIngredientAdded` que é chamado quando um novo ingrediente é adicionado
  // O ingrediente recebido como argumento é adicionado ao array `ingredients`
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
