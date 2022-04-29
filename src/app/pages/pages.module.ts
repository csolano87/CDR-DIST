import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { OrdenComponent } from './mantenimientos/orden/orden.component';



@NgModule({
  declarations: [
      OrdenComponent,
      PagesComponent,
      DashboardComponent,
      UsuariosComponent,
  ],
  
  exports:[PagesComponent,OrdenComponent],
  imports: [CommonModule,
    RouterModule,
    SharedModule,
    AuthModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ]
  })
export class PagesModule {}