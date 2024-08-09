// Importação do decorator `Component`, da classe `EventEmitter` e do decorator `Output` do Angular Core.
import { Component, EventEmitter, Output } from '@angular/core';

// Definição do componente `HeaderComponent` utilizando o decorator `@Component`.
@Component({
  // Seletor do componente, usado para inserir o componente no HTML como `<app-header></app-header>`.
  selector: 'app-header',

  // Caminho para o arquivo de template HTML associado a este componente.
  templateUrl: './header.component.html',

  // Caminho para o arquivo CSS associado a este componente, onde estão definidas as estilizações específicas para o componente.
  styleUrls: ['./header.component.css'],
})

// Definição da classe do componente `HeaderComponent`.
export class HeaderComponent {
  // Propriedade `collapsed` que controla se o menu da navbar está colapsado (true) ou expandido (false).
  collapsed = true;

  // Decorator `@Output` marca a propriedade `featureSelect` como um evento que pode ser escutado por componentes-pais.
  // `EventEmitter` é usado para emitir eventos personalizados. Aqui, ele emite um valor do tipo `string`.
  @Output() featureSelect = new EventEmitter<string>();

  // Método `onSelect`, que recebe uma string `feature` como argumento e emite o evento `featureSelect` com o valor recebido.
  // Esse método é chamado quando o usuário seleciona uma funcionalidade na interface (por exemplo, Receitas ou Lista de Compras).
  onSelect(feature: string) {
    this.featureSelect.emit(feature);
  }
}
