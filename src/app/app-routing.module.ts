import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlansComponent } from './plans/plans.component';
import { ServiceComponent } from './service/service.component';
import { AgentsComponent } from './agents/agents.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { BranchesComponent } from './branches/branches.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';





const routes: Routes = [
  {path : '', component : LandingPageComponent }, 
  {path : 'plans', component : PlansComponent },  
  {path : 'services', component : ServiceComponent }, 
  {path : 'agents', component : AgentsComponent }, 
  {path : 'home', component : HomeComponent }, 
  {path : 'locations', component : BranchesComponent }, 
  {path: 'about' , component : AboutComponent },
  {path: 'profile' , component : ProfileComponent },
  {path: 'contact' , component : ContactComponent },
  {path: 'agent' , component : AgentProfileComponent },
  {path: 'profile' , component : ProfileComponent },
  {path: 'about' , component : AboutComponent },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }






  







  