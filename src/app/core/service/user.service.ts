import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; // We are importing the required libraries for our service to behave as expected
import 'rxjs/add/operator/map';  // We need to import the map from rxjs in order to use the map operator.
import 'rxjs/add/operator/catch';// The map and catch observable operators which will help us manipulate data and handle errors respectively has also been imported.
import { Observable } from 'rxjs/Rx';

import { url,api } from '../config/api.config';

// 1.x的 $http 与 Http ： $http 返回 Promises， Http 返回 Observable
// 最大的区别是 ： Observable 可以多次发出数据，这就是为什么 Observable 可以被 subscribed 和 unsubscribed
//其次： Http doesn't actually make the request to the server until there is a subscription to the observable.
// Observables:Observables handle multiple values over time,Observables are cancellable
// Promise:Promises are only called once and will return a single value,Promises are not cancellable
// 可以通过 引入 'rxjs/add/operator/toPromise' 调用observable的toPromise()来转换成Promises。

import { ResponseInterface } from '../../interface/response.interface';

@Injectable()
export class UserService {

  Comment = {
    id: Date,
    author: String,
    text: String
  };

  // Resolve HTTP using the constructor
  constructor(private http: Http) { }

  // 注册
  signUp(requestBody): Observable<ResponseInterface>{
    let bodyString = JSON.stringify(requestBody); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(url.baseUrl+api.signup, bodyString, options)
      // we use the map operator to take the response data, convert it to JSON,
      // and then reutrn it to any subscribers that are waiting for the data to resolve.
      .map((res: Response) => res.json()) // 调用 Response 对象的 json() 方法，把响应体转成 JSON 对象
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  // 登录
  signIn(requestBody): Observable<ResponseInterface>{
    let bodyString = JSON.stringify(requestBody);
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(url.baseUrl+api.signin, bodyString, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}
