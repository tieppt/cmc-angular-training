import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClassesComponent } from './ng-classes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgClassesComponent],
  exports: [NgClassesComponent]
})
export class NgClassesModule { }
