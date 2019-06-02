import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'statistics',
    loadChildren: './show-statistics/show-statistics.module#ShowStatisticsModule'
  },
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
