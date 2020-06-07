import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutes } from './index.routing';
import { AnimateComponent } from './animate/animate.component';
import { HomeComponent } from './home/home.component';
import { OnPushComponent } from './onPush/onPush.component';
import { DiretiveComponent } from './diretive/diretive.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModelComponent } from './ngModel/ngModel.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RxjsComponent } from './Rxjs/Rxjs.component';
import { ReduxComponent } from './redux/redux.component';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutes,
    SharedModule,
    FormsModule,
    NgZorroAntdModule
  ],
  declarations: [AnimateComponent,ReduxComponent,HomeComponent,RxjsComponent,OnPushComponent,NgModelComponent,DiretiveComponent],
  exports:[SharedModule,NgZorroAntdModule,FormsModule]
})
export class IndexModule { }
