// Importa as dependências necessárias do Angular, incluindo o decorador Component e a interface OnInit
import { Component, OnInit } from '@angular/core';
// Importa o modelo Recipe, que define a estrutura dos dados de uma receita
import { Recipe } from '../recipe.model';
// Importa o serviço RecipeService, que fornece métodos para gerenciar as receitas
import { RecipeService } from 'src/app/services/recipe.service';

// Declaração do componente Angular
@Component({
  // Define o seletor do componente, que permite que ele seja instanciado no HTML através de <app-recipe-list>
  selector: 'app-recipe-list',
  // Especifica o caminho do arquivo HTML que contém o template deste componente,
  // que é responsável pela interface do usuário
  templateUrl: './recipe-list.component.html',
  // Especifica o caminho do arquivo CSS que contém os estilos específicos deste componente,
  // permitindo a personalização visual da interface
  styleUrls: ['./recipe-list.component.css'],
})
// Declaração da classe do componente RecipeListComponent, que implementa a interface OnInit
// para utilizar o método de ciclo de vida ngOnInit
export class RecipeListComponent implements OnInit {
  // Array de objetos Recipe, onde cada item representa uma receita.
  // Inicialmente, este array será preenchido com as receitas retornadas pelo serviço RecipeService
  recipes: Recipe[];

  // O construtor injeta o serviço RecipeService, que será utilizado para
  // recuperar as receitas e realizar outras operações relacionadas às receitas
  constructor(private recipeService: RecipeService) {}

  // Método do ciclo de vida do Angular, executado após a inicialização do componente.
  // Aqui, o array recipes é populado com as receitas obtidas através do método getRecipes() do RecipeService
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
