// Importa módulos essenciais do Angular e modelos compartilhados que serão utilizados neste componente
import { Component, OnInit } from '@angular/core'; // Importa a classe Component para criar e definir um componente Angular, e a interface OnInit para implementar o método ngOnInit, que faz parte do ciclo de vida do componente
import { ShoppingListService } from 'src/app/services/shopping-list.service'; // Importa o serviço ShoppingListService, responsável por fornecer a lógica de negócios e manipulação de dados relacionados à lista de compras
import { Ingredient } from 'src/app/shared/ingredient.model'; // Importa o modelo Ingredient do diretório compartilhado, representando a estrutura de dados de um ingrediente, que será utilizado neste componente

// Decorador @Component define metadados que configuram este componente Angular, incluindo seletor, template e estilos
@Component({
  selector: 'app-shopping-list', // Define o seletor 'app-shopping-list', que permite a inserção deste componente através de uma tag HTML <app-shopping-list>
  templateUrl: './shopping-list.component.html', // Especifica o caminho do arquivo de template HTML associado a este componente, onde a estrutura visual e a interface de usuário são definidas
  styleUrls: ['./shopping-list.component.css'], // Especifica o caminho do arquivo de estilos CSS associado a este componente, onde são definidos os estilos visuais específicos
})
export class ShoppingListComponent implements OnInit {
  // Propriedade `ingredients` é um array do tipo Ingredient, usado para armazenar e exibir a lista de ingredientes gerenciados pela aplicação
  ingredients: Ingredient[];

  // O construtor injeta uma instância do ShoppingListService, permitindo que o componente utilize métodos e dados providos pelo serviço
  constructor(private slService: ShoppingListService) {}

  // O método `ngOnInit` é automaticamente chamado pelo Angular após a inicialização do componente, sendo utilizado para inicializar a lista de ingredientes
  ngOnInit(): void {
    // Obtém a lista inicial de ingredientes através do método `getIngredients` do ShoppingListService e atribui à propriedade `ingredients`
    this.ingredients = this.slService.getIngredients();

    // Subscreve ao observable `ingredientsChanged` do serviço para atualizar a lista de ingredientes sempre que ocorrer uma alteração
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients; // Atualiza a propriedade `ingredients` com os novos valores emitidos pelo observable
    });
  }
}
