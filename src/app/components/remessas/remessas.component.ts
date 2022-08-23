import { FileHandle } from './../../_model/file-handle.model';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { Image } from 'src/app/_model/image.model';
import { NgForm } from '@angular/forms';
import { RemessasService } from 'src/app/remessas/services/remessas.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-remessas',
  templateUrl: './remessas.component.html',
  styleUrls: ['./remessas.component.css'],
})
export class RemessasComponent implements OnInit {
  // image: Image = {
  //   productImages: [],
  // };

  constructor(
    private remessa: RemessasService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  addImage(imageForm: NgForm) {
    // const remessaFormData = this.prepareFormData(this.image);

    // this.remessa.save(remessaFormData).subscribe(
    //   (response: Image) => {
    //     this.goToImagesList();
    //   },
    //   (error: HttpErrorResponse) => {
    //     console.log(error);
    //   }
    // );
  }

  goToImagesList() {this.router.navigate(['/remessa']);}

  // prepareFormData(remessa: Image): FormData {
  //   const formData = new FormData();

  //   for (var i = 0; i < remessa.productImages.length; i++) {
  //     formData.append(
  //       'file',
  //       remessa.productImages[i].file,
  //       remessa.productImages[i].file.name
  //     );
  //   }
  //   return formData;
  // }

  url = '.assets';

  onselectFile(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];

      this.remessa.UploadImage(file)
      .subscribe(data=>{this.onSucces()}, error => {this.onError()}

      )

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };

      // this.image.productImages.push(fileHandle);
    }
  }

  private onSucces(){
    this.snackBar.open('Imagem salva com sucesso','',{duration:5000});
  }

  private onError(){
    this.snackBar.open('Erro ao salvar Imagem','',{duration:5000});
  }

}
