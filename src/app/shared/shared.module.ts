


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';





@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ],
  imports: [CommonModule,RouterModule
    ],
  exports:[HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent]
})
export class SharedModule { }
