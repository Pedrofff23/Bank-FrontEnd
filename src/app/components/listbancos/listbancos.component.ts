import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Banco} from "../../bancos/model/Banco";
import {BancosService} from "../../bancos/bancos.service";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-listbancos',
  templateUrl: './listbancos.component.html',
  styleUrls: ['./listbancos.component.css']
})
export class ListbancosComponent implements OnInit {

  //variável para iterar os bancos
  public bancos : Banco[] = []

  constructor(private bancoService: BancosService, private router : Router) { }

  ngOnInit(): void {
    this.buscarTodos();
  }

  public buscarTodos():void{
    this.bancoService.getAll().subscribe(
      (response: Banco[]) =>{
        this.bancos = response
      }
    )
  }

  public update(id : number){
    this.router.navigate(['/bancos/update',id]);
  }

  public details(id: number){
    this.router.navigate(['/bancos',id])
  }
  public deleteBank(id : number){
    this.bancoService.delete(id).subscribe(data => {
      this.bancoService.getAll().subscribe(
        (response: Banco[])=>
        this.bancos = response)
    },error => console.log(error));

  }
}
