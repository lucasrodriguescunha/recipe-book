// Declaração da classe Recipe
export class Recipe {
  // Declaração das propriedades públicas da classe Recipe
  public name: string;
  public description: string;
  public imagePath: string;

  // Construtor da classe Recipe que inicializa as propriedades
  constructor(name: string, description: string, imagePath: string) {
    // Atribui o valor do parâmetro name à propriedade name da classe
    this.name = name;
    // Atribui o valor do parâmetro description à propriedade description da classe
    this.description = description;
    // Atribui o valor do parâmetro imagePath à propriedade imagePath da classe
    this.imagePath = imagePath;
  }
}
