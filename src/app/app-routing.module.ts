import { DeleteBancoComponent } from './components/delete-banco/delete-banco.component';
import { GetBancoComponent } from './components/get-banco/get-banco.component';
import { UpdateBancoComponent } from './components/update-banco/update-banco.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListbancosComponent} from "./components/listbancos/listbancos.component";
import {CreateBancoComponent} from "./components/create-banco/create-banco.component";
import {ListAgenciasComponent} from "./components/list-agencias/list-agencias.component";
import {CreateAgenciasComponent} from "./components/create-agencias/create-agencias.component";

const routes: Routes = [
  {path: 'bancos', component:ListbancosComponent},
  {path: 'bancos/novo', component: CreateBancoComponent},
  {path: 'bancos/update/:id', component: UpdateBancoComponent},
  {path: 'bancos/:id', component: GetBancoComponent},
  {path: 'bancos/delete/:id', component: DeleteBancoComponent},

  {path: 'agencias', component: ListAgenciasComponent},
  {path: 'agencias/novo', component: CreateAgenciasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
