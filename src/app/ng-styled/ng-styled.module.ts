import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyledComponent } from './ng-styled.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgStyledComponent],
  exports: [NgStyledComponent]
})
export class NgStyledModule { }
