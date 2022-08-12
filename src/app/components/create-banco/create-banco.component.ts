import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BancosService } from 'src/app/bancos/bancos.service';
import {Banco} from "../../bancos/model/Banco";

@Component({
  selector: 'app-create-banco',
  templateUrl: './create-banco.component.html',
  styleUrls: ['./create-banco.component.css']
})
export class CreateBancoComponent implements OnInit {

  public banco : Banco = new Banco();
  constructor(private bancoService: BancosService, private router : Router) {
  }

  ngOnInit(): void {
  }

  savebanco(){
    this.bancoService.create(this.banco).subscribe( data => {
      console.log(data);
      this.goToBancoList();
    })
  }

  goToBancoList(){
    this.router.navigate(['/bancos']);
  }

  onSubmit(){
    console.log(this.banco);
    this.savebanco();
  }
}
