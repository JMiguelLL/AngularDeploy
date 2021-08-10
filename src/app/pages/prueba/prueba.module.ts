import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaComponent } from './prueba/prueba.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PruebaComponent,
    DashboardComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule,
    MatButtonModule
  ]
})
export class PruebaModule { }
