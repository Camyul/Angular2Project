import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
// tslint:disable-next-line:no-input-rename
@Input('appInputFormat') format;
  constructor(private domElement: ElementRef) {

  }

  @HostListener('blur') onBlur() {
    const value: string = this.domElement.nativeElement.value;

    if (this.format === 'lowercase') {
      this.domElement.nativeElement.value = value.toLowerCase();
    } else {
      this.domElement.nativeElement.value = value.toUpperCase();
    }
  }
}
