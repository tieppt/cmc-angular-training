import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InfoComponent
  ],
  exports: [
    InfoComponent
  ]
})
export class InfoModule { }
