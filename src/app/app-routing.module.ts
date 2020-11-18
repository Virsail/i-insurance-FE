import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlansComponent } from './plans/plans.component';
import { ServicesComponent } from './services/services.component';
import { AgentsComponent } from './agents/agents.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { BranchesComponent } from './branches/branches.component';



const routes: Routes = [
  {path : '', component : LandingPageComponent }, 
  {path : 'plans', component : PlansComponent },  
  {path : 'services', component : ServicesComponent }, 
  {path : 'agents', component : AgentsComponent }, 
  {path : 'home', component : HomeComponent }, 
  {path : 'locations', component : BranchesComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }





  