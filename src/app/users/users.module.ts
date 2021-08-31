import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CrearComponent } from './pages/crear/crear.component';
import { BorrarComponent } from './pages/borrar/borrar.component';


@NgModule({
  declarations: [
    CrearComponent,
    BorrarComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
