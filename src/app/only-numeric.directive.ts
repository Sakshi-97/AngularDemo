import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({ selector: '[OnlyNumeric]' })
export class OnlyNumericDirective {

  constructor(private _el: ElementRef) { }
  @HostListener('input', ['$event']) onInputChange() {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^0-9.]*/g, '');
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  } 
}

