import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-ng-classes',
  templateUrl: './ng-classes.component.html',
  styleUrls: ['./ng-classes.component.scss']
})
export class NgClassesComponent implements OnInit {
  isActive = true;
  constructor() { }

  ngOnInit() {
  }

}
