import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-ng-styled',
  templateUrl: './ng-styled.component.html',
  styleUrls: ['./ng-styled.component.scss']
})
export class NgStyledComponent implements OnInit {
  color = 'red';

  btnStyle = {'color': this.color, 'font-size': '1.5rem'};
  constructor() { }

  ngOnInit() {
  }

}
