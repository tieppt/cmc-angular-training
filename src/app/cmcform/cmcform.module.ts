import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmcformComponent } from './cmcform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CmcformComponent,
    ReactiveFormComponent
  ],
  exports: [
    CmcformComponent
  ]
})
export class CmcformModule { }
