// Importação do decorator `Component` do Angular Core, necessário para definir uma classe como componente Angular.
import { Component } from '@angular/core';

// Definição do componente utilizando o decorator `@Component`.
@Component({
  // Seletor do componente, que será utilizado para inserir o componente no HTML, como por exemplo: `<app-root></app-root>`.
  selector: 'app-root',

  // Caminho para o arquivo de template HTML associado a este componente.
  templateUrl: './app.component.html',

  // Caminho para o arquivo CSS associado a este componente, onde estão definidas as estilizações específicas para o componente.
  styleUrls: ['./app.component.css'],
})

// Definição da classe do componente `AppComponent`.
export class AppComponent {
  // Propriedade `loadedFeature` que inicialmente recebe o valor 'recipe'. Essa propriedade será utilizada para determinar qual componente (receitas ou lista de compras) será exibido.
  loadedFeature = 'recipe';

  // Método `onNavigate` que é chamado quando ocorre o evento `featureSelect` no componente `app-header`. Este método atualiza a propriedade `loadedFeature` com o valor da funcionalidade selecionada, permitindo a troca dinâmica entre componentes na interface.
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
