import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowStatisticsComponent} from './show-statistics.component';

const routes: Routes = [{
  path: '',
  component: ShowStatisticsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowStatisticsRoutingModule { }
