import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProject } from '../../project';

@Component({
  selector: 'tp-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: IProject;
  @Input() member: number;
  @Output() onRemove
    = new EventEmitter<IProject>();
  @Output() memberChange =
    new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    console.log(this.member);
    setTimeout(() => {
      this.member--;
      this.memberChange.emit(this.member);
    }, 5000);
  }

  remove() {
    this.onRemove.emit(this.project);
  }

}
