import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';

import { AuthRoutingModule } from './auth/auth.routing';

import { PagesRoutingModule } from './pages/pages.routing';
import { NofoundpageComponent } from './nofoundpage/nofoundpage/nofoundpage.component';








@NgModule({
  declarations: [
    AppComponent,
    NofoundpageComponent,
       
    
  

  ],
  imports: [
    BrowserModule,    
  AuthRoutingModule,
  AppRoutingModule,
  AuthModule,
  PagesModule,
  PagesRoutingModule,

  
 


  ],
 exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
