// Importa as dependências necessárias do Angular
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// Importa o modelo Recipe, que define a estrutura de dados de uma receita
import { Recipe } from '../recipe.model';

// Declaração do componente Angular
@Component({
  // Define o seletor usado para instanciar o componente no HTML
  selector: 'app-recipe-list',
  // Especifica o caminho do arquivo HTML que contém o template deste componente
  templateUrl: './recipe-list.component.html',
  // Especifica o caminho do arquivo CSS que contém os estilos deste componente
  styleUrls: ['./recipe-list.component.css'],
})
// Declaração da classe do componente RecipeListComponent
export class RecipeListComponent implements OnInit {
  // Output que emite um evento quando uma receita é selecionada
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // Array de objetos Recipe, inicializado com dois exemplos de receitas
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', // Nome da receita
      'This is simply a test', // Descrição da receita
      'https://img.cybercook.com.br/receitas/731/lasanha-3.jpeg' // URL da imagem da receita
    ),
    new Recipe(
      'Another Test Recipe', // Nome da segunda receita
      'This is simply a test', // Descrição da segunda receita
      'https://img.cybercook.com.br/receitas/731/lasanha-3.jpeg' // URL da imagem da segunda receita
    ),
  ];

  // Método do ciclo de vida do Angular, executado após a inicialização do componente
  ngOnInit(): void {}

  // Método chamado quando uma receita é selecionada, emitindo o evento recipeWasSelected com a receita selecionada
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
