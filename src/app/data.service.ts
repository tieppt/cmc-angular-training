import { Injectable } from '@angular/core';

let id = 1;

@Injectable()
export class DataService {
  data = [1, 2, 3, 4, 5];
  constructor() {
    id++;
    console.log(id);
  }

}
