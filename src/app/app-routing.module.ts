import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '' , component : LandingPageComponent },
  { path: 'home' , component : HomeComponent },
  { path: 'about' , component : AboutComponent },
  { path: 'profile' , component : ProfileComponent },
  { path: 'contact' , component : ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
