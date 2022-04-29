import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,

 
  ],
  imports: [
    BrowserModule,    
  AuthRoutingModule,
  AppRoutingModule,
  AuthModule,
    PagesModule,
  

 


  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
