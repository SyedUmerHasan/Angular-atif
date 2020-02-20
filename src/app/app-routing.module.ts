import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundModuleModule } from './Modules/page-not-found/page-not-found-module.module';
import { HomeModule } from './Modules/home/home.module';
import { RegistrationModule } from './Modules/registration/registration.module';


const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    // Add Modules Here 
    HomeModule,
    RegistrationModule,
    PageNotFoundModuleModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
