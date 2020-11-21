import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegisterComponent } from './components/register/register.component';
import { HomekComponent } from './components/homek/homek.component';

@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent, RegisterComponent, HomeComponent, HomekComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[
    LoginComponent, 
    ResetPasswordComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
