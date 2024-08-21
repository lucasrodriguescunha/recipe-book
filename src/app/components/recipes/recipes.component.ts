// Importa o decorador Component do Angular, que é utilizado para definir metadados do componente
import { Component, OnInit } from '@angular/core';
// Importa o modelo Recipe, que define a estrutura dos dados de uma receita
import { Recipe } from './recipe.model';
// Importa o serviço RecipeService, que gerencia a lógica de negócios relacionada às receitas
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  // Define o seletor do componente, que permite a utilização deste componente em templates HTML usando <app-recipes>
  selector: 'app-recipes',
  // Define o caminho para o template HTML associado a este componente, que será utilizado para renderizar a interface do usuário
  templateUrl: './recipes.component.html',
  // Define o caminho para o arquivo CSS associado a este componente, responsável pela estilização específica deste componente
  styleUrls: ['./recipes.component.css'],
  // Fornece o RecipeService a este componente, tornando-o disponível para injeção de dependência dentro deste componente
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  // Propriedade que armazena a receita atualmente selecionada, do tipo Recipe,
  // e é usada para passar a receita selecionada para o componente de detalhes
  selectedRecipe: Recipe;

  // O construtor injeta o serviço RecipeService, que será utilizado para
  // gerenciar a seleção de receitas dentro do componente
  constructor(private recipeService: RecipeService) {}

  // O método ngOnInit é chamado automaticamente pelo Angular após a inicialização do componente.
  // Aqui, ele se inscreve no evento recipeSelected do RecipeService, que é emitido sempre que
  // uma nova receita é selecionada, atualizando a propriedade selectedRecipe com a receita escolhida.
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
