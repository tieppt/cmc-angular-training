import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectDetailComponent
  ],
  exports: [
    ProjectsComponent,
    ProjectDetailComponent
  ]
})
export class ProjectsModule { }
