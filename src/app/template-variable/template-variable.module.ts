import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateVariableComponent } from './template-variable.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TemplateVariableComponent
  ],
  exports: [
    TemplateVariableComponent
  ]
})
export class TemplateVariableModule { }
