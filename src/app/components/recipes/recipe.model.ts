import { Ingredient } from 'src/app/shared/ingredient.model';

// Classe Recipe que representa uma receita com nome, descrição, imagem e lista de ingredientes
export class Recipe {
  // Propriedades públicas da classe Recipe para armazenar os detalhes da receita
  public name: string; // Nome da receita
  public description: string; // Descrição da receita
  public imagePath: string; // Caminho da imagem da receita
  public ingredients: Ingredient[]; // Lista de ingredientes necessários para a receita

  // Construtor da classe Recipe que inicializa as propriedades com os valores fornecidos
  constructor(
    name: string, // Nome da receita
    description: string, // Descrição detalhada da receita
    imagePath: string, // URL ou caminho da imagem ilustrativa da receita
    ingredients: Ingredient[] // Array de objetos Ingredient que compõem a receita
  ) {
    // Inicializa a propriedade name com o valor fornecido no parâmetro name
    this.name = name;
    // Inicializa a propriedade description com o valor fornecido no parâmetro description
    this.description = description;
    // Inicializa a propriedade imagePath com o valor fornecido no parâmetro imagePath
    this.imagePath = imagePath;
    // Inicializa a propriedade ingredients com o array de ingredientes fornecido
    this.ingredients = ingredients;
  }
}
