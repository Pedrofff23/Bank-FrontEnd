import { Component, OnInit } from '@angular/core';
import { Agencia } from 'src/app/agencias/model/Agencia';
import {Utils} from "../../utils/utils";
import {UtilsService} from "../../utils/utils.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-create-agencias',
  templateUrl: './create-agencias.component.html',
  styleUrls: ['./create-agencias.component.css']
})
export class CreateAgenciasComponent implements OnInit {

  readonly utilfiltro = 'telefone';

  public utils: Utils[] = [] ;
  public agencia : Agencia = new Agencia()

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.utilsService.getByTipo(this.utilfiltro).subscribe(
      (response :Utils[]) => {
        this.utils = response;
        console.log(response)
      }
    )
  }

  onSubmit():void {
    console.log(this.agencia)
  }
}
