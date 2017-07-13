import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; // (1)
import 'rxjs/add/operator/map';  // We need to import the map from rxjs in order to use the map operator.


// 1.x的 $http 与 Http ： $http 返回 Promises， Http 返回 Observable
// 最大的区别是 ： Observable 可以多次发出数据，这就是为什么 Observable 可以被 subscribed 和 unsubscribed
//其次： Http doesn't actually make the request to the server until there is a subscription to the observable.
// Observables:Observables handle multiple values over time,Observables are cancellable
// Promise:Promises are only called once and will return a single value,Promises are not cancellable
// 可以通过 引入 'rxjs/add/operator/toPromise' 调用observable的toPromise()来转换成Promises。



@Injectable()
export class UserService {

  constructor(private http: Http) { }
  register(){
      // this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`) // (4)
      //     .map(res => res.json()) // (5)
      //     .subscribe(data => {
      //        if (data) console.log(data); // (6)
      // });

      this.http.post('http://localhost:3000/api/listUsers', JSON.stringify({name: '123456',email:'123@qq.com',password:'123456'}))


      // we use the map operator to take the response data, convert it to JSON,
      // and then reutrn it to any subscribers that are waiting for the data to resolve.
          .map((res:Response) => res.json()) // 调用 Response 对象的 json() 方法，把响应体转成 JSON 对象
          .subscribe(data => {
             if (data) console.log(data);
      });
      // .then(res => res.json().data as Hero)
      // .catch(this.handleError);
  }
}
