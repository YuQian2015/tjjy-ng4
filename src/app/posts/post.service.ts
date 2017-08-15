import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { ResponseInterface } from '../interface/response.interface';
import { url,api } from '../core/config/api.config';


@Injectable()
export class PostService {

  constructor(private http: Http) { }

  // 获取文章
  getPostList(requestBody): Observable<ResponseInterface>{
    let bodyString = JSON.stringify(requestBody);
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(url.baseUrl+api.getPostList, bodyString ,options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  // 添加文章
  addPostList(requestBody): Observable<ResponseInterface>{
    let bodyString = JSON.stringify(requestBody);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(url.baseUrl+api.addPost, bodyString ,options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}
