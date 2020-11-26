import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCustomLayoutComponent } from './layout/app-custom-layout/app-custom-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PlansComponent } from './plans/plans.component';
import { AgentsComponent } from './agents/agents.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AgreementsComponent } from './agreements/agreements.component';
import { BranchesComponent } from './branches/branches.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { ServiceComponent } from './service/service.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmailComponent } from './email/email.component';










@NgModule({
  declarations: [
    AppComponent,
    AppCustomLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    PlansComponent,
    AgentsComponent,
    LandingPageComponent,
    AgreementsComponent,
    BranchesComponent,
    TestimonyComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    AdminProfileComponent,
    AgentProfileComponent,
    ServiceComponent,
    EmailComponent,
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    
    
  ],
    

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }









