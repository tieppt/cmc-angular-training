import {
  Directive, HostBinding, HostListener, Input,
  EventEmitter, Output
} from '@angular/core';

@Directive({
  selector: '[tpTrimValue]',
  // host: {
  //   '[value]': 'content',
  //   '(change)': 'onChange($event)'
  // }
})
export class TrimValueDirective {
  _value = '';
  constructor() { }
  @Output() inputChange: EventEmitter<any> = new EventEmitter();
  @HostListener('change', ['$event'])
  onChange(e) {
    this._value = e.target.value.trim();
    this.inputChange.next(this._value);
  }

  @HostBinding('value')
  get content() {
    return this._value;
  }

  @Input('value')
  set contentX(value: string) {
    this._value = value;
  }
}
