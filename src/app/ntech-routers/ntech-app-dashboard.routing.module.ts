import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { NtechAppDashBoardComponent } from '../ntech-application-components/ntech-app-dashboard/ntech-app-dashboard/ntech-app-dashboard.component';

const routes: Routes = 
  [
    { path: 'ntechdashboard', component: NtechAppDashBoardComponent }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
 export class NtechAppDashBoardRoutingModule { }