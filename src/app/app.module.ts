import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbancosComponent } from './components/listbancos/listbancos.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import { CreateBancoComponent } from './components/create-banco/create-banco.component';
import { FormsModule } from "@angular/forms";
import { UpdateBancoComponent } from './components/update-banco/update-banco.component';
import { GetBancoComponent } from './components/get-banco/get-banco.component';

@NgModule({
  declarations: [
    AppComponent,
    ListbancosComponent,
    CreateBancoComponent,
    UpdateBancoComponent,
    GetBancoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
