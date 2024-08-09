// Importa as dependências necessárias do Angular
import { Component, Input } from '@angular/core';
// Importa o modelo Recipe, que define a estrutura de dados da receita
import { Recipe } from '../../recipe.model';

// Declaração do componente Angular
@Component({
  // Define o seletor usado para instanciar o componente no HTML
  selector: 'app-recipe-item',
  // Especifica o caminho do arquivo HTML que contém o template deste componente
  templateUrl: './recipe-item.component.html',
  // Especifica o caminho do arquivo CSS que contém os estilos deste componente
  styleUrls: ['./recipe-item.component.css'],
})
// Declaração da classe do componente RecipeItemComponent
export class RecipeItemComponent {
  // Decorador @Input() permite que a propriedade recipe receba dados de outro componente pai
  @Input() recipe: Recipe;
}
