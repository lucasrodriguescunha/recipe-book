// Importa as dependências necessárias do Angular
import { Component, OnInit } from '@angular/core';
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
  // Propriedade recipes que é um array de objetos Recipe, inicializado com dois exemplos de receitas
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://img.cybercook.com.br/receitas/731/lasanha-3.jpeg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://img.cybercook.com.br/receitas/731/lasanha-3.jpeg'
    ),
  ];

  // Implementação do método ngOnInit do ciclo de vida do componente Angular
  ngOnInit(): void {}
}
