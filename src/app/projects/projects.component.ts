import { Component, OnInit } from '@angular/core';
import { IProject } from '../project';

@Component({
  selector: 'tp-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList: IProject[] = [
    {
      name: 'B2B Project',
      id: 2,
      techStack: ['Java', 'MySQL'],
      noMember: 5
    }, {
      name: 'Game Ninja',
      id: 6,
      techStack: ['Nodejs', 'Socket', 'MySQL'],
    }, {
      name: 'Microservices Project',
      id: 8,
      techStack: ['Java', 'Spring', 'MySQL'],
      noMember: 10
    }
  ];
  constructor() { }

  ngOnInit() {
    setTimeout(_ => {
      console.log(this.projectList);
    }, 6000);
  }

  oRemove(project) {
    this.projectList = this.projectList
      .filter(item => item.id !== project.id);
  }

}
