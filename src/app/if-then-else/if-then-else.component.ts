import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-if-then-else',
  templateUrl: './if-then-else.component.html',
  styleUrls: ['./if-then-else.component.scss']
})
export class IfThenElseComponent implements OnInit {
  show = true;
  image = 'http://www.petsonbroadway.com/wp-content/uploads/2015/12/pet-supplies-portland-or.jpg';
  constructor() { }

  ngOnInit() {
  }

}
