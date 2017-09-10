import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputStringValidation]'
})
export class InputStringValidationDirective {

  private minimumStringLength: number;

  constructor(private domElement: ElementRef) {

    this.minimumStringLength = 5;
  }

  @HostListener('change') onChange() {
    const value = this.domElement.nativeElement.value;

    if (value.length < this.minimumStringLength) {
      this.domElement.nativeElement.value = '';
      this.domElement.nativeElement.placeholder = 'Length must be at least 5 symbols!';
    }
  }

}
