// Importa as dependências necessárias do Angular, incluindo o decorador Component e o decorador Input
import { Component, Input } from '@angular/core';
// Importa o modelo Recipe, que define a estrutura dos dados da receita
import { Recipe } from '../../recipe.model';
// Importa o serviço RecipeService, que gerencia a lógica de negócios relacionada às receitas
import { RecipeService } from 'src/app/services/recipe.service';

// Declaração do componente Angular
@Component({
  // Define o seletor do componente, que permite a utilização deste componente em templates HTML usando <app-recipe-item>
  selector: 'app-recipe-item',
  // Especifica o caminho do arquivo HTML que contém o template deste componente,
  // responsável por renderizar a interface do usuário para um item de receita
  templateUrl: './recipe-item.component.html',
  // Especifica o caminho do arquivo CSS que contém os estilos específicos deste componente,
  // permitindo a personalização visual do item de receita
  styleUrls: ['./recipe-item.component.css'],
})
// Declaração da classe do componente RecipeItemComponent, que representa um único item de receita na lista
export class RecipeItemComponent {
  // Decorador @Input() permite que a propriedade recipe receba dados do componente pai,
  // passando a receita selecionada como um objeto Recipe para este componente
  @Input() recipe: Recipe;

  // O construtor injeta o serviço RecipeService, que será utilizado para emitir eventos
  // quando uma receita for selecionada
  constructor(private recipeService: RecipeService) {}

  // Método chamado quando o item de receita é selecionado pelo usuário.
  // Este método emite o evento recipeSelected através do RecipeService,
  // passando a receita selecionada para outros componentes interessados
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
