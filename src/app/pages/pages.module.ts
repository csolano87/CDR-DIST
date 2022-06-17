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

import { OrdenesComponent } from './mantenimientos/ordenes/ordenes.component';
import { UsuarioComponent } from './mantenimientos/usuarios/usuario/usuario.component';
import { PerfilComponent } from './mantenimientos/perfil/perfil.component';
import { FiltroPipe } from '../pipes/filtro.pipe';






@NgModule({
  declarations: [
    
      PagesComponent,
      DashboardComponent,
      UsuariosComponent,
  
    OrdenesComponent,
        UsuarioComponent,
        PerfilComponent,
        FiltroPipe,
  ],
  
  exports:[
    PagesComponent,
  
    UsuariosComponent,
    DashboardComponent,
  

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AuthModule,
    FormsModule,

    ReactiveFormsModule,
    HttpClientModule,
    
    
    ]
  })
export class PagesModule {}