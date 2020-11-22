import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegisterComponent } from './components/register/register.component';
import { HomekComponent } from './components/homek/homek.component';
import { FooterkComponent } from './components/footerk/footerk.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './components/helpers';

@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent, RegisterComponent, HomekComponent, FooterkComponent],


  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  exports:[
    LoginComponent, 
    ResetPasswordComponent,
    RegisterComponent
  ]
})


export class AuthModule { }
