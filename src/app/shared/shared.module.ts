import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretiveDirective } from './diretive';


/*共享模块*/
@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      DiretiveDirective
   ],
   exports: [
      CommonModule,
      DiretiveDirective
   ]
})
export class SharedModule { }
