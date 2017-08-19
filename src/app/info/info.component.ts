import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-info',
  template: `
    <h2>Tiep Phan</h2>
    <p>Web Developer</p>
    <div>
      <div>Text</div>
      <span class="test">Test 1</span>
      <span class="test">Test 2</span>
      <span class="test">Test 3</span>
    </div>
  `,
  styles: [
    `
    div .test:nth-of-type(1) {
      color: darkgreen;
      font-size: 20px;
      font-weight: 700;
    }
    `
  ]
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
