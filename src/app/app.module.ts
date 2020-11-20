import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCustomLayoutComponent } from './layout/app-custom-layout/app-custom-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { RegisterService } from './auth/components/services/register.service';

@NgModule({
  declarations: [
    AppComponent,
    AppCustomLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TestimonyComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    LandingPageComponent,
    AdminProfileComponent,
    AgentProfileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
