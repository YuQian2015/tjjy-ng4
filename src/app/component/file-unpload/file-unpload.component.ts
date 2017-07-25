import { Component, OnInit } from '@angular/core';

import { FileUploadService } from '../../service/file-upload.service';

@Component({
  selector: 'app-file-unpload',
  templateUrl: './file-unpload.component.html',
  styleUrls: ['./file-unpload.component.css'],
  providers:[FileUploadService],
})
export class FileUnploadComponent implements OnInit {

  constructor(private _svc: FileUploadService) { }

  upload(fieldName: string, fileList: FileList){
    // handle file changes
    const formData = new FormData();

    if (!fileList.length) return;

    // append the files to FormData
    Array
      .from(Array(fileList.length).keys())
      .map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

    // save it
    this.save(formData);
  }
  save(formData: FormData) {
    // upload data to the server
    this._svc.upload(formData)
      .take(1)
      .delay(1500) // DEV ONLY: delay 1.5s to see the changes
      .subscribe(x => {
        console.log(x)
      }, err => {
        console.log(err)
      })
  }
  ngOnInit() {
  }

}
