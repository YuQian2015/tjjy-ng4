import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FileUploadService {

  baseUrl = 'http://localhost:3000/api'; // our local Hapi Js API

  constructor(private _http: Http) { }

  upload(formData) {
    const url = `${this.baseUrl}/file/upload`;
    return this._http.post(url, formData)
      .map((res: Response) => res.json())
  }
}
