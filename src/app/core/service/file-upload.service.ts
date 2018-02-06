import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { url,api } from '../config/api.config';
import { ApiService } from '../service/api.service';

export interface TagsArgs {
  tag: number; // 标签编号
  tagName: string; //标签名称
}


@Injectable()
export class FileUploadService {

  constructor(private http: Http, private apiService : ApiService) { }

  upload(formData) {
    return this.http.post(url.baseUrl+api.uploadImage, formData)
      .map((res: Response) => res.json())
  }

  manager() {
    // return this.http.post(url.baseUrl+api.imageManager,{})
    //   .map((res: Response) => res.json())
    return this.apiService.post(`${url.baseUrl}${api.imageManager}`, {})
  }

  // 获取图片标签
  getImageTags() {
    return this.apiService.get(`${url.baseUrl}${api.getImageTags}`)
  }

  // 添加图片标签
  addImageTags(params: TagsArgs) {
    return this.apiService.post(`${url.baseUrl}${api.addImageTags}`, params)
  }

}
