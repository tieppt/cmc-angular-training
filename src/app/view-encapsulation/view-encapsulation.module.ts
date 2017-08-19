import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEncapsulationComponent } from './view-encapsulation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewEncapsulationComponent],
  exports: [
    ViewEncapsulationComponent
  ]
})
export class ViewEncapsulationModule { }
