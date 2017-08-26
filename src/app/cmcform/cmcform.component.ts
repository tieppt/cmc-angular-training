import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'tp-cmcform',
  templateUrl: './cmcform.component.html',
  styleUrls: ['./cmcform.component.scss']
})
export class CmcformComponent implements OnInit {
  model: any = {
    name: 'Tiep'
  };
  constructor(private counter: CounterService) { }

  ngOnInit() {
    this.counter.increaseCounter();
  }

  onSubmit(cmcForm) {
    console.log(cmcForm);
    // throw new Error(
    //   'Nothing to throw'
    // );
  }

}
