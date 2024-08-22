// Importa as dependências necessárias do Angular e de modelos compartilhados
import { Component, OnInit } from '@angular/core'; // Importa a classe Component para definir um componente Angular e a interface OnInit para o ciclo de vida do componente
import { ShoppingListService } from 'src/app/services/shopping-list.service'; // Importa o serviço ShoppingListService para gerenciar a lógica relacionada à lista de compras
import { Ingredient } from 'src/app/shared/ingredient.model'; // Importa o modelo Ingredient do diretório compartilhado para uso no componente

// Define o decorador @Component, que fornece metadados para a configuração deste componente Angular
@Component({
  selector: 'app-shopping-list', // Define o seletor usado para inserir este componente no HTML
  templateUrl: './shopping-list.component.html', // Especifica o caminho do template HTML associado a este componente
  styleUrls: ['./shopping-list.component.css'], // Especifica o caminho do arquivo de estilos CSS associado a este componente
})
export class ShoppingListComponent implements OnInit {
  // Declara a propriedade `ingredients`, que é um array do tipo Ingredient e armazena a lista de ingredientes da aplicação
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {} // Injeta o serviço ShoppingListService através do construtor para acessar os métodos e dados do serviço

  // Implementa o método `ngOnInit`, que faz parte do ciclo de vida do Angular e é chamado logo após o componente ser inicializado
  ngOnInit(): void {
    // Obtém a lista de ingredientes a partir do serviço ShoppingListService e armazena na propriedade `ingredients`
    this.ingredients = this.slService.getIngredients();
  }
}
