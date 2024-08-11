// Importa as dependências necessárias do Angular e de modelos compartilhados
import {
  Component, // Importa a classe Component para definir um componente Angular
  ElementRef, // Importa a classe ElementRef para manipular elementos DOM nativos
  EventEmitter, // Importa a classe EventEmitter para emitir eventos personalizados
  Output, // Importa o decorador Output para expor eventos do componente pai
  ViewChild, // Importa o decorador ViewChild para acessar elementos DOM no template
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model'; // Importa o modelo Ingredient do diretório compartilhado

// Define o componente Angular com seu seletor, template e estilos associados
@Component({
  selector: 'app-shopping-edit', // Define o seletor usado para inserir este componente no HTML
  templateUrl: './shopping-edit.component.html', // Especifica o caminho do template HTML associado a este componente
  styleUrls: ['./shopping-edit.component.css'], // Especifica o caminho do arquivo de estilos CSS associado a este componente
})
export class ShoppingEditComponent {
  // Usando o decorador ViewChild para obter referências aos elementos DOM correspondentes aos campos de entrada de nome e quantidade
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef; // Referência ao campo de entrada de nome
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef; // Referência ao campo de entrada de quantidade

  // Define um evento personalizado `ingredientAdded` que pode ser escutado pelo componente pai
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  // Método acionado ao adicionar um novo ingrediente
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value; // Obtém o valor do nome do ingrediente do campo de entrada
    const ingAmount = this.amountInputRef.nativeElement.value; // Obtém o valor da quantidade do ingrediente do campo de entrada
    const newIngredient = new Ingredient(ingName, ingAmount); // Cria uma nova instância de Ingredient com os valores obtidos
    this.ingredientAdded.emit(newIngredient); // Emite o evento `ingredientAdded`, passando o novo ingrediente para o componente pai
  }
}
