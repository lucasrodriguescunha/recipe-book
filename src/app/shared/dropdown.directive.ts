import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // Verifica se o elemento clicado está dentro do elemento referenciado (elRef)
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen // Inverte o valor de isOpen se o elemento foi clicado
      : false; // Define isOpen como falso se o elemento não foi clicado
  }

  constructor(private elRef: ElementRef) {}
}
