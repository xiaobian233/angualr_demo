import { Routes, RouterModule } from '@angular/router';
import { AnimateComponent } from './animate/animate.component';
import { HomeComponent } from './home/home.component';
import { OnPushComponent } from './onPush/onPush.component';
import { DiretiveComponent } from './diretive/diretive.component';
import { NgModelComponent } from './ngModel/ngModel.component';
import { RxjsComponent } from './Rxjs/Rxjs.component';
import { ReduxComponent } from './redux/redux.component';

const routes: Routes = [
  { 
    path:"",
    component:HomeComponent ,
    children:[
      {
        path:"animate",
        component:AnimateComponent
      },
      {
        path:'onPush',
        component:OnPushComponent
      },
      {
        path:"diretive",
        component:DiretiveComponent
      },
      {
        path:"ngModel",
        component:NgModelComponent
      },
      {
        path:"rxjs",
        component:RxjsComponent
      },
      {
        path:"redux",
        component:ReduxComponent
      }
    ]
  }
];

export const IndexRoutes = RouterModule.forChild(routes);
