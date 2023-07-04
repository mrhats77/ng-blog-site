import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Components from './components';


@NgModule({
  declarations: [
    ...Components.Components
  ],
  exports:[...Components.Components],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }




