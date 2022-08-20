import { BancosService } from 'src/app/bancos/bancos.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Agencia } from 'src/app/agencias/model/Agencia';
import { MaterialModule } from 'src/app/material-module';

import { AgenciaService } from './../../agencias/service/agencia.service';
import { Banco } from 'src/app/bancos/model/Banco';

@Component({
  selector: 'app-details-agencias',
  templateUrl: './details-agencias.component.html',
  styleUrls: ['./details-agencias.component.css']
})
export class DetailsAgenciasComponent implements OnInit {

  public agencia : Agencia = new Agencia() ;
  public id : number = 0;

  constructor(
    private agenciaService : AgenciaService,
    private route : ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private bancosService: BancosService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.agenciaService.getOne(this.id).subscribe(data =>{
      this.agencia = data
    },
      error => console.log(error))
  }


  goToAgencias(){
    this.router.navigate(['/agencias'])
  }

  editaragencia(id: number){
    this.router.navigate(['/agencias/update', id])
  }

  onCancel(){
    this.router.navigate(['agencias'])
  }

}
