import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule,
    SharedModule,
    AuthModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
