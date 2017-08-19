import { Component } from '@angular/core';

@Component({
  selector: 'tp-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputValue = '1234';
  constructor() {}
  changeInput(event) {
    console.log(event);
    this.inputValue = event;
  }
}
