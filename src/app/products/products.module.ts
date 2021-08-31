import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    ListadoComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
