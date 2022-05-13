
import {  NgModule } from '@angular/core';

import { RouterModule,Routes} from '@angular/router'
import { AuthRoutingModule } from './auth/auth.routing';
import { NofoundpageComponent } from './nofoundpage/nofoundpage/nofoundpage.component';
import { PagesRoutingModule } from './pages/pages.routing';






const routes : Routes=[

  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
 
  {path:'**', component: NofoundpageComponent}
  
  ];

@NgModule({

  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
 AuthRoutingModule,



  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
