import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShowStatisticsRoutingModule} from './show-statistics-routing.module';
import {ShowStatisticsComponent} from './show-statistics.component';
import {MatAutocompleteModule, MatButtonModule, MatInputModule, MatSelectModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ShowStatisticsComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    ShowStatisticsRoutingModule
  ]
})
export class ShowStatisticsModule {
}
