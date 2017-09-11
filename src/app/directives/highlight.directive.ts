import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[appMyHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef) {
      // el.nativeElement.style.backgroundColor = 'yellow';
        el.nativeElement.addEventListener('mouseenter', function () {
            el.nativeElement.style.backgroundColor = 'yellow';
        });
        el.nativeElement.addEventListener('mouseleave', function () {
            el.nativeElement.style.backgroundColor = 'white';
        });
    }
}
