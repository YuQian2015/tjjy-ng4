import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';

import { FileUploadService, TagsArgs } from '../../core/service/file-upload.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { LocalStorage } from 'ngx-store';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  @LocalStorage() imageTags: TagsArgs[] = [];
  @Output() manage = new EventEmitter();

  choice: TagsArgs;

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
    private fileUploadService: FileUploadService
  ) {
    this.reset(); // set initial state
    this.currentStatus = 4;
  }


  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
        this.fileUploadService.getImageTags()
          .subscribe(tags => {
            this.imageTags = [];
            tags.data.result.forEach(tag => {
              this.imageTags.push({
                  tag: tag.tag,
                  tagName: tag.tagName
              })
            });
          }, err => {
            console.log(err)
          })
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
  chose(choice: TagsArgs) {
    this.choice = choice;
  }

  setImageTag(param: TagsArgs) {
    this.fileUploadService.addImageTags(param)
      .take(1)
      // .delay(1500) // DEV ONLY: delay 1.5s to see the changes
      .subscribe(images => {
        console.log(images)
      }, err => {
        console.log(err)
      })
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
    let formData = new FormData();

    if (!fileList.length) {
      return;
    }

    // append the files to FormData
    Array
      .from(Array(fileList.length).keys())
      .map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

    formData.append('tag', "0");
    formData.append('tagName', "123456");
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
    this.fileUploadService.upload(formData)
      .take(1)
      .delay(1500) // DEV ONLY: delay 1.5s to see the changes
      .subscribe(data => {
        console.log(data)
        data.data.result.forEach(file => {
          this.uploadedFiles = this.uploadedFiles.concat(file);
        });
        this.currentStatus = this.STATUS_SUCCESS;
        this.setImageTag({
          tag: 0,
          tagName: "123456"
        });
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
    this.fileUploadService.manager()
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
