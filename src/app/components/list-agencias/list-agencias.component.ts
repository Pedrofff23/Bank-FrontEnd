import { Component, OnInit } from '@angular/core';
import {Agencia} from "../../agencias/model/Agencia";
import {Router} from "@angular/router";
import {AgenciaService} from "../../agencias/service/agencia.service";

@Component({
  selector: 'app-list-agencias',
  templateUrl: './list-agencias.component.html',
  styleUrls: ['./list-agencias.component.css']
})
export class ListAgenciasComponent implements OnInit {

  public agencias :Agencia[] = []

  constructor(private router: Router, private agenciaService: AgenciaService) { }

  ngOnInit(): void {
    this.buscarTodos()
  }

  public buscarTodos():void{
    this.agenciaService.getAll().subscribe(
      (response : Agencia[]) =>{
        console.log(response)
        this.agencias = response ;
      })
  }

}
