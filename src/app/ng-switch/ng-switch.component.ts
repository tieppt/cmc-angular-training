import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  index = 1;
  constructor() { }

  ngOnInit() {
  }

  tabChange(num: number) {
    this.index = num;
  }

}
