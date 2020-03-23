import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'index',
    pathMatch: 'full'
  },
  {
    path:"index",
    // component:IndexComponent
    loadChildren:()=>import ("./core/index/index.module").then(m=>m.IndexModule)
  },
  {
    path:"**",
    redirectTo:"index"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
