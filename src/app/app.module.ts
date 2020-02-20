import { DynamicScriptLoaderService } from 'src/app/Services/DynamicScriptLoaderService/dynamic-script-loader.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [DynamicScriptLoaderService]
})
export class AppModule { }
