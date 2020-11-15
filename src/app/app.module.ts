import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppCustomLayoutComponent } from './layout/app-custom-layout/app-custom-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans/plans.component';
import { ServicesComponent } from './services/services.component';
import { AgentsComponent } from './agents/agents.component';






@NgModule({
  declarations: [
    AppComponent,
    AppCustomLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    PlansComponent,
    ServicesComponent,
    AgentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AuthModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }









