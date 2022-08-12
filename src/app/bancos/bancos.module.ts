import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteBancoComponent } from '../components/delete-banco/delete-banco.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    DeleteBancoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class BancosModule { }
