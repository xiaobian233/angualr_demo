import { Routes, RouterModule } from '@angular/router';
import { AnimateComponent } from './animate/animate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path:"",
    component:HomeComponent ,
    children:[
      {
        path:"animate",
        component:AnimateComponent
      }
    ]
  }
];

export const IndexRoutes = RouterModule.forChild(routes);
