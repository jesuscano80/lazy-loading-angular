import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [{
  path:"",
  children:[
    {path:"listado", component: ListadoComponent},
    {path:"editar", component: EditarComponent},
    {path:"**", redirectTo: "listado"}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
