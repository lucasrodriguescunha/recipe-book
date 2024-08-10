// Importa o decorador Component do Angular
import { Component } from '@angular/core';
// Importa o modelo Recipe que define a estrutura de uma receita
import { Recipe } from './recipe.model';

@Component({
  // Define o seletor do componente para ser utilizado em templates HTML
  selector: 'app-recipes',
  // Define o caminho para o template HTML associado a este componente
  templateUrl: './recipes.component.html',
  // Define o caminho para o arquivo CSS associado a este componente
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  // Propriedade que armazena a receita selecionada, do tipo Recipe
  selectedRecipe: Recipe;
}
