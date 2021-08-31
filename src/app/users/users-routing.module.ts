import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrarComponent } from './pages/borrar/borrar.component';
import { CrearComponent } from './pages/crear/crear.component';

const routes: Routes = [
  {path: "",
  children:[
    {path: "crear", component: CrearComponent},
    {path: "borrar", component: BorrarComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
