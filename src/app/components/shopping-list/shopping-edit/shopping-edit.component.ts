// Importa as dependências necessárias do Angular e de modelos compartilhados
import {
  Component, // Importa a classe Component para definir um componente Angular
  ElementRef, // Importa a classe ElementRef para manipular elementos DOM nativos diretamente no componente
  ViewChild, // Importa o decorador ViewChild para acessar e manipular elementos DOM ou componentes filhos no template
} from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service'; // Importa o serviço ShoppingListService para gerenciar a lógica da lista de compras
import { Ingredient } from 'src/app/shared/ingredient.model'; // Importa o modelo Ingredient do diretório compartilhado para representar ingredientes

// Define o componente Angular com seu seletor, template e estilos associados
@Component({
  selector: 'app-shopping-edit', // Define o seletor usado para inserir este componente no HTML
  templateUrl: './shopping-edit.component.html', // Especifica o caminho do template HTML associado a este componente
  styleUrls: ['./shopping-edit.component.css'], // Especifica o caminho do arquivo de estilos CSS associado a este componente
})
export class ShoppingEditComponent {
  // Usando o decorador ViewChild para obter referências diretas aos elementos DOM correspondentes aos campos de entrada de nome e quantidade de ingredientes
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef; // Referência ao campo de entrada de nome do ingrediente, permitindo acesso direto ao valor inserido
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef; // Referência ao campo de entrada de quantidade do ingrediente, permitindo acesso direto ao valor inserido

  constructor(private slService: ShoppingListService) {} // Injeta o serviço ShoppingListService através do construtor para gerenciar a lista de ingredientes

  // Método acionado ao adicionar um novo ingrediente à lista de compras
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value; // Obtém o valor do nome do ingrediente a partir do campo de entrada de nome
    const ingAmount = this.amountInputRef.nativeElement.value; // Obtém o valor da quantidade do ingrediente a partir do campo de entrada de quantidade
    const newIngredient = new Ingredient(ingName, ingAmount); // Cria uma nova instância de Ingredient utilizando os valores obtidos
    this.slService.addIngredient(newIngredient); // Adiciona o novo ingrediente à lista de compras utilizando o serviço ShoppingListService
  }
}
