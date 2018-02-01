import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';

import { FileUploadService } from '../../core/service/file-upload.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {
  @Output() manage = new EventEmitter();


  public modalRef: BsModalRef;

  uploadedFiles = [];
  uploadError;
  currentStatus: number;
  uploadFieldName = 'files'; // 字段名
  images: object;


  readonly STATUS_INITIAL = 0;
  readonly STATUS_SAVING = 1;
  readonly STATUS_SUCCESS = 2;
  readonly STATUS_FAILED = 3;
  readonly STATUS_MENU = 4;







  constructor(
    private modalService: BsModalService,
    private _svc: FileUploadService
  ) {
    this.reset(); // set initial state
    this.currentStatus = 4;
  }



  /**
   * 重置上传状态
   *
   * @memberof ImageUploaderComponent
   */
  reset() {
    this.currentStatus = this.STATUS_INITIAL;
    this.uploadedFiles = [];
    this.uploadError = null;
  }
  /**
   * 点击添加图片
   *
   * @memberof ImageUploaderComponent
   */
  addImage() {
    this.currentStatus = this.STATUS_INITIAL;
  }

  /**
   * 检测文件变化创建上传数据
   *
   * @param {string} fieldName
   * @param {FileList} fileList
   * @returns
   * @memberof ImageUploaderComponent
   */
  filesChange(fieldName: string, fileList: FileList) {
    // handle file changes
    const formData = new FormData();

    if (!fileList.length) {
      return;
    }

    // append the files to FormData
    Array
      .from(Array(fileList.length).keys())
      .map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

    // save it
    this.save(formData);
  }

  /**
   * 保存图片
   *
   * @param {FormData} formData
   * @memberof ImageUploaderComponent
   */
  save(formData: FormData) {
    // upload data to the server
    this.currentStatus = this.STATUS_SAVING;
    this._svc.upload(formData)
      .take(1)
      .delay(1500) // DEV ONLY: delay 1.5s to see the changes
      .subscribe(data => {
        console.log(data)
        data.data.result.forEach(file => {
          this.uploadedFiles = this.uploadedFiles.concat(file);
        });
        this.currentStatus = this.STATUS_SUCCESS;
        this.manage.emit(this.uploadedFiles);
      }, err => {
        console.log(err)
        this.uploadError = err;
        this.currentStatus = this.STATUS_FAILED;
      })
  }
  /**
   * 查看图片列表
   *
   * @param {TemplateRef<any>} template
   * @memberof ImageUploaderComponent
   */
  view(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg'
    });
    this._svc.manager()
      .take(1)
      .delay(1500) // DEV ONLY: delay 1.5s to see the changes
      .subscribe(images => {
        console.log(images)
        this.images = images;
      }, err => {
        console.log(err)
      })
  }
  ngOnInit() {
  }

}
