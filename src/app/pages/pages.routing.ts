import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";
import { OrdenesComponent } from "./mantenimientos/ordenes/ordenes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


import { UsuariosComponent } from "./mantenimientos/usuarios/usuarios.component";


import { PagesComponent } from "./pages.component";
import { UsuarioComponent } from "./mantenimientos/usuarios/usuario/usuario.component";
import { PerfilComponent } from "./mantenimientos/perfil/perfil.component";




const routes: Routes = [

   
    {
        path:'dashboard',
         component:PagesComponent,
       canActivate:[AuthGuard],
         children:[
         {path:'', component: DashboardComponent },
         {path: 'usuarios',  component: UsuariosComponent},
         {path: 'usuario',  component: UsuarioComponent},
         {path: 'perfil/:id',  component: PerfilComponent},
        {path: 'ordenes',  component: OrdenesComponent},
      //  {path: 'perfil/:id',  component: PerfilComponent},
      //   {path:'', redirectTo:'/dashboard', pathMatch:'full'}
     ]
  },
   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}