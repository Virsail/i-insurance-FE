import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlansComponent } from './plans/plans.component';
import { ServicesComponent } from './services/services.component';
import { AgentsComponent } from './agents/agents.component';

const routes: Routes = [
  {path : 'plans', component : PlansComponent },  
  {path : 'services', component : ServicesComponent }, 
  {path : 'agents', component : AgentsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }





  