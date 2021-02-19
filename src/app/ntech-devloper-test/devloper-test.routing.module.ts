import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1 } from './demo1/demo1.component';
import { Demo2 } from './demo2/demo2.component';


const routes: Routes = 
  [
    { path: 'demo1', component: Demo1 },
    { path: 'demotwo', component: Demo2 }
  ];
  
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class DevloperTestRoutingModule
{

}