import { RouterModule } from '@angular/router';
import { HomeModuleRoutes } from 'src/app/Routes/routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(HomeModuleRoutes),
    CommonModule
  ],
  exports : [
    RouterModule,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    NavbarComponent,
    FooterComponent
  ],
  providers : [
  ]
})
export class HomeModule { }
