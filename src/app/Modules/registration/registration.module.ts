import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistrationModuleRoutes } from 'src/app/Routes/routes';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(RegistrationModuleRoutes),
  ],
  exports : [
    RouterModule,
    LoginComponent,
    SignupComponent
  ]
})
export class RegistrationModule { }
