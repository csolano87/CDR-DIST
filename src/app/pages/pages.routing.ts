import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdenComponent } from "./mantenimientos/orden/orden.component";


import { PagesComponent } from "./pages.component";




const routes: Routes = [
    { 
        path: 'ordenes',  component: PagesComponent,
        //canActivate:[AuthGuard],
        children:[
            { path: '', component: OrdenComponent,},

        ]
    },
    
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}