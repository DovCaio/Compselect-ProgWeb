import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[showHideLinks]',
  standalone: true
})
export class ShowHideLinksDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
