import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BancosService } from './bancos/bancos.service';
import { Banco } from './bancos/model/Banco';

@Injectable({
  providedIn: 'root',
})
export class BancoResolveService implements Resolve<Banco> {
  id: any;
  route: any;
  // banco: Banco = {
  //   id:"",
  //   nome: "",
  //   numero:""
  // }

  constructor(private bancoServicce: BancosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Banco> {
    this.id = this.route.snapshot.params['id'] ;

    if (this.id) {
      return this.bancoServicce.getbancoById(this.id);
    } else {
      return of(this.getBancoDetails());
    }
  }

  getBancoDetails(){
    return{
      id: 0,
      nome: "",
      numero:""
    }
  }
}
