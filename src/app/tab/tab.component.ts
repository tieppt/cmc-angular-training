import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'tp-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() tabTitle: string;
  @Input() show = false;
  constructor(
    public dataService: DataService
  ) { }
  @HostBinding('class.hide')
  get hide() {
    return !this.show;
  }
  ngOnInit() {
  }

}
