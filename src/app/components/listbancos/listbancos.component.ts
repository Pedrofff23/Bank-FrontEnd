// import { Router } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
// import {Banco} from "../../bancos/model/Banco";
// import {BancosService} from "../../bancos/bancos.service";
// import {FormControl} from "@angular/forms";
// import {map, Observable, startWith} from "rxjs";

// @Component({
//   selector: 'app-listbancos',
//   templateUrl: './listbancos.component.html',
//   styleUrls: ['./listbancos.component.css']
// })
// export class ListbancosComponent implements OnInit {

//   //variável para iterar os bancos
//   public bancos : Banco[] = []

//   constructor(private bancoService: BancosService, private router : Router) { }

//   ngOnInit(): void {
//     this.buscarTodos();
//   }

//   public buscarTodos():void{
//     this.bancoService.getAll().subscribe(
//       (response: Banco[]) =>{
//         console.log(response)
//         this.bancos = response
//       }
//     )
//   }

//   public update(id : number){
//     this.router.navigate(['/bancos/update',id]);
//   }

//   public details(id: number){
//     this.router.navigate(['/bancos',id])
//   }
//   public deleteBank(id : number){
//     this.bancoService.delete(id).subscribe(data => {
//       this.bancoService.getAll().subscribe(
//         (response: Banco[])=>
//         this.bancos = response)
//     },error => console.log(error));

//   }
// }

import {MatButtonModule} from "@angular/material/button";
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Banco} from "../../bancos/model/Banco";
import {BancosService} from "../../bancos/bancos.service";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";


@Component({
  selector: 'app-listbancos',
  templateUrl: './listbancos.component.html',
  styleUrls: ['./listbancos.component.css']
})
export class ListbancosComponent implements OnInit {

  //variável para iterar os bancos
  //public bancos : Banco[] = []
  bancos$: Observable<Banco[]>;
  public bancos : Banco[] = []
  dataSource: any;
  empdata:any;

  displayedColumns = ['id','nome', 'numero','actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private bancoService: BancosService,
    private router : Router,
    private bancosService: BancosService,) {
    this.bancos$ = this.bancosService.getAll();

   }

  ngOnInit(): void {
    this.buscarTodos();
  }

  public buscarTodos(){
    this.bancoService.getAll().subscribe(result =>{
        this.empdata = result;

        this.dataSource= new MatTableDataSource<Banco>(this.empdata);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;

      }
    )
  }

  onUpdate(id : number){
    this.router.navigate(['/bancos/update',id]);
  }

  onDetails(id:number){
    this.router.navigate(['/bancos',id])
  }
  onDelete(id: number) {
    this.bancoService.delete(id).subscribe(data => {
      this.bancoService.getAll().subscribe(
        (response: Banco[])=>
        this.bancos = response)
    },error => console.log(error));

  }

  onAdd() {
    this.router.navigate(['/bancos/novo']);
  }

  Filterchange(event:Event){
    const filvalue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filvalue;
  }
}
