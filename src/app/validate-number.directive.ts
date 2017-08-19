import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[tpValidateNumber]'
})
export class ValidateNumberDirective {
  private valid = true;
  constructor() { }
  @HostListener('change', ['$event'])
  onChange(event) {
    const value = +event.target.value;
    this.valid = Number.isInteger(value);
  }

  @HostBinding('class.invalid')
  get inValid() {
    return !this.valid;
  }
}
