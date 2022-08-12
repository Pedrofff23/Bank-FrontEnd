import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAgenciasComponent } from '../components/list-agencias/list-agencias.component';
import { UpdateAgenciasComponent } from '../components/update-agencias/update-agencias.component';
import { DetailsAgenciasComponent } from '../components/details-agencias/details-agencias.component';
import { CreateAgenciasComponent } from '../components/create-agencias/create-agencias.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    ListAgenciasComponent,
    UpdateAgenciasComponent,
    DetailsAgenciasComponent,
    CreateAgenciasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class AgenciasModule { }
