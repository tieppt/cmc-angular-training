import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { DataService } from '../data.service';

@Component({
  selector: 'tp-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  providers: [
    {provide: DataService, useClass: DataService}
  ],
})
export class TabGroupComponent
  implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  index = 0;
  tabsTitle: string[];
  constructor(public dataService: DataService) {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.tabsTitle = [];
    this.tabs.forEach((t, index) => {
      this.tabsTitle.push(t.tabTitle);
      t.show = false;
      if (index === this.index) {
        t.show = true;
      }
    });
  }

  showTab(i) {
    console.log('activate tab i');
    if (i !== this.index) {
      this.index = i;
      this.tabs.forEach((t, index) => {
        t.show = false;
        if (index === this.index) {
          t.show = true;
        }
      });
    }
  }

  remove() {
    this.dataService.data.pop();
  }
}
