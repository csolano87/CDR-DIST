import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages/pages.module';






@NgModule({
  declarations: [
    LoginComponent,
   
  ],
  imports: [
    CommonModule,
   RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  
  ],
  exports:[LoginComponent,
 ]
})
export class AuthModule { }
