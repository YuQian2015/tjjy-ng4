import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { ResponseModule } from '../module/response/response.module';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  // 登录
  getPostList(requestBody): Observable<ResponseModule>{
    let bodyString = JSON.stringify(requestBody);
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3000/api/post/getPostList', bodyString ,options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}
