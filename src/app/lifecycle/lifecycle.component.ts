import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'tp-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent
  implements OnInit, OnDestroy,
  AfterContentInit, AfterViewInit,
  AfterContentChecked, AfterViewChecked, OnChanges {
  model = '';
  constructor(private cdr: ChangeDetectorRef) { }
  @Input()
  arr: Array<string>;
  ngOnInit() {
    console.log('Init');
  }
  ngAfterViewInit() {
    this.model = '32';
    console.log('View Init');
    this.cdr.detectChanges();
  }
  ngAfterContentInit() {
    console.log('Content Init');
  }
  ngAfterViewChecked() {
    console.log('View Checked');
  }
  ngAfterContentChecked() {
    console.log('Content checked');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnDestroy() {
    console.log('destroy');
  }
  onClick() {
    //
  }
}
