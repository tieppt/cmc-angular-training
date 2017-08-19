import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  collection: Array<any> = [
    {
      id: 102,
      name: 'You don\'t know js'
    },
    {
      id: 103,
      name: 'Pro PHP'
    },
    {
      id: 112,
      name: 'Angular in Action'
    },
    {
      id: 113,
      name: 'Java OCP'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    const response = [
      {
        id: 102,
        name: 'You don\'t know js'
      },
      {
        id: 103,
        name: 'Pro PHP'
      },
      {
        id: 112,
        name: 'Angular in Action'
      },
      {
        id: 113,
        name: 'Java OCP'
      }
    ];
    const addItem = {
      id: 120,
      name: 'Learning Nodejs'
    };
    this.collection = [...response, addItem];
  }

  trackById(index, item) {
    console.log(item);
    return item.id;
  }

}
