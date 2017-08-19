import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoModule } from './info/info.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { IfThenElseComponent } from './if-then-else/if-then-else.component';
import { NgSwitchModule } from './ng-switch/ng-switch.module';
import { NgForModule } from './ng-for/ng-for.module';
import { ViewEncapsulationModule } from './view-encapsulation/view-encapsulation.module';
import { NgStyledModule } from './ng-styled/ng-styled.module';
import { NgClassesModule } from './ng-classes/ng-classes.module';
import { ValidateNumberDirective } from './validate-number.directive';
import { TrimValueDirective } from './trim-value.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    IfThenElseComponent,
    ValidateNumberDirective,
    TrimValueDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InfoModule,
    NgSwitchModule,
    NgForModule,
    ViewEncapsulationModule,
    NgStyledModule,
    NgClassesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
