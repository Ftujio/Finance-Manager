import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [HomeComponent, AddComponent, StatisticsComponent],
  exports: [HomeComponent]
})
export class MainModule { }
