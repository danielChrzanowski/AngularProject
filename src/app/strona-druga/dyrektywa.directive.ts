import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDyrektywa]'
})
export class DyrektywaDirective {

  constructor(private el: ElementRef) { }

  @Input('appDyrektywa') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('rgb(66,139,202)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
