import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  private counter = 0;
  constructor() { }

  increaseCounter() {
    this.counter++;
    console.log(this.counter);
  }

}
