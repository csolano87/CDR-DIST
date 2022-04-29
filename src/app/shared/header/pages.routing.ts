import { NgModule } from '@angular/core';

import { RouterModule,Routes} from '@angular/router'
import { OrdenComponent } from 'src/app/pages/mantenimientos/orden/orden.component';

import { PagesComponent } from '../../pages/pages.component';
import { PagesModule } from '../../pages/pages.module';


const routes:Routes=[
  
  { 
    path: 'ordenes',  component: PagesComponent,
    
    children:[
        { path: '', component: OrdenComponent,},
    ]
}


  ];



@NgModule({

  imports: [RouterModule.forChild(routes)
    
  
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule {}