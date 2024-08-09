// Importa as dependências necessárias
import { Component, OnInit } from '@angular/core'; // Importa a classe Component e a interface OnInit do Angular
import { Ingredient } from 'src/app/shared/ingredient.model'; // Importa o modelo Ingredient de um diretório compartilhado

// Define o decorador @Component, que especifica o metadado para o componente Angular
@Component({
  selector: 'app-shopping-list', // Define o seletor que será usado para inserir este componente no HTML
  templateUrl: './shopping-list.component.html', // Especifica o caminho do template HTML associado a este componente
  styleUrls: ['./shopping-list.component.css'], // Especifica o caminho do arquivo de estilos CSS para este componente
})
export class ShoppingListComponent implements OnInit {
  // Declara uma propriedade chamada `ingredients`, que é um array do tipo Ingredient
  ingredients: Ingredient[] = [
    // Inicializa o array com dois ingredientes como exemplo
    new Ingredient('Apples', 5), // Adiciona um ingrediente com nome "Apples" e quantidade 5
    new Ingredient('Tomatoes', 10), // Adiciona um ingrediente com nome "Tomatoes" e quantidade 10
  ];

  // Implementa o método ngOnInit, que é um ciclo de vida do Angular
  // Este método é chamado logo após o componente ser inicializado
  ngOnInit(): void {
    // No momento, não há nenhuma lógica adicional dentro deste método
  }
}
