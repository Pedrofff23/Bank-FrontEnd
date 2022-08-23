import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Image } from 'src/app/_model/image.model';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RemessasService {

  readonly urlApi = environment.urlAPI.concat('/remessas')
  constructor(private http:HttpClient) { }


  UploadImage(file:File):Observable<any>{
    const formData = new FormData();
    formData.append("ProfileUri",file)
    return this.http.post(`${this.urlApi}/upload`,formData)
  }
}
