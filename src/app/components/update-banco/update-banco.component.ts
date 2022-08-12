import { ActivatedRoute, Route, Router } from '@angular/router';
import { BancosService } from 'src/app/bancos/bancos.service';
import { Banco } from './../../bancos/model/Banco';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-banco',
  templateUrl: './update-banco.component.html',
  styleUrls: ['./update-banco.component.css']
})
export class UpdateBancoComponent implements OnInit {
  id: number = 0 ;
  nome : string =''
  numero : string = '';
  banco : Banco = new Banco();
  updated : Banco = new Banco();

  constructor(
    private bancoService : BancosService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ;
    this.bancoService.getbancoById(this.id).subscribe( data => {
        console.log(data);
        this.banco = data;
        this.nome = data.nome;
        this.numero = data.numero ;
      }, error => console.log(error));

  }
  public goToBancoList(){
    this.router.navigate(['bancos']);
  }

  public onSubmit(){
    this.updated.id = this.banco.id
    this.bancoService.update(this.id , this.updated).subscribe(data => {
      this.goToBancoList();
    },error => console.log(error))
  }

}
