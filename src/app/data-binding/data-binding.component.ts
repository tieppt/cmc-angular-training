import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  private _name = '';
  private _content = '';

  get name(): string {
    console.log(`get n: ${this._name}`);
    return this._name;
  }

  set name(name) {
    this._name = name;
    console.log(this._name);
  }

  get content(): string {
    console.log(`get c: ${this._content}`);
    return this._content;
  }

  set content(c) {
    this._content = c;
    console.log(this._content);
  }

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    this.content = event.target.value;
  }

}
