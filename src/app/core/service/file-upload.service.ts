import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { url,api } from '../config/api.config';

export interface TagsArgs {
  tag: number; // 标签编号
  tagName: string; //标签名称
}


@Injectable()
export class FileUploadService {

  constructor(private http: Http) { }

  upload(formData) {
    return this.http.post(url.baseUrl+api.uploadImage, formData)
      .map((res: Response) => res.json())
  }

  manager() {
    return this.http.post(url.baseUrl+api.imageManager,{})
      .map((res: Response) => res.json())
  }

    addImageTags( params: TagsArgs) {
      return this.http.post(url.baseUrl+api.addImageTags,params)
        .map((res: Response) => res.json())
    }

}
