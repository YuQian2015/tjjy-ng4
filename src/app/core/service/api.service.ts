import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; // We are importing the required libraries for our service to behave as expected
import 'rxjs/add/operator/map';  // We need to import the map from rxjs in order to use the map operator.
import 'rxjs/add/operator/catch';// The map and catch observable operators which will help us manipulate data and handle errors respectively has also been imported.
import { Observable } from 'rxjs/Rx';

import { LocalStorageService } from 'ngx-store';


// 1.x的 $http 与 Http ： $http 返回 Promises， Http 返回 Observable
// 最大的区别是 ： Observable 可以多次发出数据，这就是为什么 Observable 可以被 subscribed 和 unsubscribed
//其次： Http doesn't actually make the request to the server until there is a subscription to the observable.
// Observables:Observables handle multiple values over time,Observables are cancellable
// Promise:Promises are only called once and will return a single value,Promises are not cancellable
// 可以通过 引入 'rxjs/add/operator/toPromise' 调用observable的toPromise()来转换成Promises。


@Injectable()
export class ApiService {


  // Resolve HTTP using the constructor
  constructor(private http: Http, private localStorageService: LocalStorageService) { }


  createHeader(headers: Headers) {
    headers.append('Authorization', "this.token");
  }

  get(url) {
    let headers = new Headers();
    this.createHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }


  // post
  post(url, data): Observable<any>{
    let token = this.localStorageService.get("token");
    let bodyString = JSON.stringify(data); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' }); // ... Set content type to JSON
    if(token) {
      headers.append('x-access-token', token);
    }
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(url, bodyString, options)
      // we use the map operator to take the response data, convert it to JSON,
      // and then reutrn it to any subscribers that are waiting for the data to resolve.
      .map((res: Response) => res.json()) // 调用 Response 对象的 json() 方法，把响应体转成 JSON 对象
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

}
