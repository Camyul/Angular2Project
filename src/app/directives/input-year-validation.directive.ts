import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputYearValidation]'
})
export class InputYearValidationDirective {

  constructor(private domElement: ElementRef) { }

  @HostListener('change') onChange() {
    const value = +this.domElement.nativeElement.value;
    if (!value) {
      this.domElement.nativeElement.value = '';
      return;
    }

    if (value < 1900) {
      this.domElement.nativeElement.value = '1900';
    }

    if (value > 2017) {
      this.domElement.nativeElement.value = '2017';
    }
  }

}
