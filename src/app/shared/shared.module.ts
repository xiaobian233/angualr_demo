import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/*共享模块*/
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
