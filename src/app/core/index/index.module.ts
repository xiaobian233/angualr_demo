import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutes } from './index.routing';
import { AnimateComponent } from './animate/animate.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutes,
  ],
  declarations: [AnimateComponent,HomeComponent],
  exports:[]
})
export class IndexModule { }
