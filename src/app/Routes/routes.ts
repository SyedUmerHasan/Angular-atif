import { ContactComponent } from './../Modules/home/components/contact/contact.component';
import { HomeComponent } from './../Modules/home/components/home/home.component';
import { SignupComponent } from '../Modules/registration/components/signup/signup.component';
import { LoginComponent } from '../Modules/registration/components/login/login.component';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../Modules/page-not-found/components/page-not-found/page-not-found.component';
import { AboutComponent } from '../Modules/home/components/about/about.component';

// Using ForRoot
const HomeModuleRoutes: Routes = [
    // { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { 
      path: '',
      component : HomeComponent,
    },
    { 
      path: 'about',
      component : AboutComponent,
    },
    { 
      path: 'contact',
      component : ContactComponent,
    },
  ];

// Using ForRoot
const RegistrationModuleRoutes: Routes = [
  {
    path : 'login',
    component : LoginComponent,
    // canActivate : [LoggedInGuard]
  },
  {
    path : 'signup',
    component : SignupComponent,
    // canActivate : [LoggedInGuard]
  },
];

// Using ForRoot
const AdminModuleRoutes: Routes = [

];

// Using ForRoot
const UserModuleRoutes: Routes = [

];

// Using ForChild
const PagenotFoundModuleRoutes: Routes = [
  {path : '**' , component : PageNotFoundComponent},
];

export {
  RegistrationModuleRoutes,
  HomeModuleRoutes,
  AdminModuleRoutes,
  UserModuleRoutes,
  PagenotFoundModuleRoutes
};