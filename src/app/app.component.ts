import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'tp-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputValue = '1234';

  show = true;
  lcArr = ['1', '3', '4'];
  constructor(
    public dataService: DataService
  ) {
    console.log(this.dataService.data);
  }
  changeInput(event) {
    console.log(event);
    this.inputValue = event;
  }
  onClick() {
    // this.show = !this.show;
    this.lcArr = [...this.lcArr, '5'];
  }
}
