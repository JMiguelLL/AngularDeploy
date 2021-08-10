import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PruebaComponent } from './prueba/prueba.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: '', component: PruebaComponent,
    children:[
      {
        path: '',
        children:[
          {path: '', component:DashboardComponent},
          {path: 'reports', component:ReportsComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaRoutingModule { }
