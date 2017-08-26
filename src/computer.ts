import { Injectable } from '@angular/core';

export class CPU {
  speed = '2.7GHz';
}

@Injectable()
export class Computer {
  constructor(public cpu: CPU) {}
  run() {
    console.log(this.cpu.speed);
  }
}

