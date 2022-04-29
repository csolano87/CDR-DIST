
import { NgModule } from '@angular/core';

import { RouterModule,Routes} from '@angular/router'
import { AuthRoutingModule } from './auth/auth.routing';
import { OrdenComponent } from './pages/mantenimientos/orden/orden.component';

import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './shared/header/pages.routing';



const routes : Routes=[
  //{path: '', redirectTo:'/nopagefound', pathMatch:'full'},
  {path: 'ordenes', component:OrdenComponent, data:{titulo:'ordenes'}}
  
  ];

@NgModule({

  imports: [RouterModule.forRoot(routes),
 PagesRoutingModule,
 AuthRoutingModule,



  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
