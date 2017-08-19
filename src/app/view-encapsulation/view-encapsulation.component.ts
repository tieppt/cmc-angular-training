import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tp-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ViewEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
