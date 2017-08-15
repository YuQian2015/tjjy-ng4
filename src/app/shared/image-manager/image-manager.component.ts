import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FileUploadService } from '../../core/service/file-upload.service';
@Component({
  selector: 'app-image-manager',
  templateUrl: './image-manager.component.html',
  styleUrls: ['./image-manager.component.css'],
  providers: [FileUploadService],
})
export class ImageManagerComponent implements OnInit {
  @Output() manage = new EventEmitter();

  uploadedFiles = [];
  uploadError;
  currentStatus: number;
  uploadFieldName = 'files';//字段名


  readonly STATUS_INITIAL = 0;
  readonly STATUS_SAVING = 1;
  readonly STATUS_SUCCESS = 2;
  readonly STATUS_FAILED = 3;
  readonly STATUS_MENU = 4;







  constructor(private _svc: FileUploadService) {
    this.reset(); // set initial state
    this.currentStatus = 4;
  }




  reset() {
    this.currentStatus = this.STATUS_INITIAL;
    this.uploadedFiles = [];
    this.uploadError = null;
  }
  addImage(){
    this.currentStatus = this.STATUS_INITIAL;
  }

  filesChange(fieldName: string, fileList: FileList) {
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
    this.currentStatus = this.STATUS_SAVING;
    this._svc.upload(formData)
      .take(1)
      .delay(1500) // DEV ONLY: delay 1.5s to see the changes
      .subscribe(x => {
        console.log(x)
        this.uploadedFiles = [].concat(x);
        this.currentStatus = this.STATUS_SUCCESS;
        this.manage.emit(this.uploadedFiles);
      }, err => {
        console.log(err)
        this.uploadError = err;
        this.currentStatus = this.STATUS_FAILED;
      })
  }
  ngOnInit() {
  }
}
