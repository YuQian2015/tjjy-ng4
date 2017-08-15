import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FileUploadService {

  baseUrl = 'http://47.92.101.205:3000/api'; // our local Hapi Js API

  constructor(private http: Http) { }

  upload(formData) {
    const url = `${this.baseUrl}/file/uploadImage`;
    return this.http.post(url, formData)
      .map((res: Response) => res.json())
  }
}
