import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() hoverColor: string = 'yellow';

  constructor(private elRef: ElementRef) {}

  setBackgroundColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setBackgroundColor(this.hoverColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setBackgroundColor('white');
  }
}
