// Importa o decorador Component e o decorador Input do Angular
import { Component, Input } from '@angular/core';
// Importa o modelo Recipe que define a estrutura de uma receita
import { Recipe } from '../recipe.model';

@Component({
  // Define o seletor do componente para ser utilizado em templates HTML
  selector: 'app-recipe-detail',
  // Define o caminho para o template HTML associado a este componente
  templateUrl: './recipe-detail.component.html',
  // Define o caminho para o arquivo CSS associado a este componente
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  // Propriedade que recebe dados de uma receita como entrada (input) de outro componente
  @Input() recipe: Recipe;
}
