import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; // We are importing the required libraries for our service to behave as expected
import 'rxjs/add/operator/map';  // We need to import the map from rxjs in order to use the map operator.
import 'rxjs/add/operator/catch';// The map and catch observable operators which will help us manipulate data and handle errors respectively has also been imported.
import { Observable } from 'rxjs/Rx';

// 1.x的 $http 与 Http ： $http 返回 Promises， Http 返回 Observable
// 最大的区别是 ： Observable 可以多次发出数据，这就是为什么 Observable 可以被 subscribed 和 unsubscribed
//其次： Http doesn't actually make the request to the server until there is a subscription to the observable.
// Observables:Observables handle multiple values over time,Observables are cancellable
// Promise:Promises are only called once and will return a single value,Promises are not cancellable
// 可以通过 引入 'rxjs/add/operator/toPromise' 调用observable的toPromise()来转换成Promises。



@Injectable()
export class UserService {

  // private instance variable to hold base url
  private commentsUrl = 'http://localhost:3000/api/register';
  Comment = {
    id: Date,
    author: String,
    text: String
  };

  // Resolve HTTP using the constructor
  constructor(private http: Http) { }
  // Fetch all existing comments
  getComments(): Observable<Comment[]> {

    // ...using get request
    return this.http.get(this.commentsUrl)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  // Add a new comment
  addComment(body: Object): Observable<Comment[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.commentsUrl, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  // Update a comment
  updateComment(body: Object): Observable<Comment[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  // Delete a comment
  removeComment(id: string): Observable<Comment[]> {
    return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
  // Fetch all existing comments
  request(): Observable<Comment[]> {
    // ...using get request
    return this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  register(requestBody): Observable<Object>{
    let bodyString = JSON.stringify(requestBody); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.commentsUrl, bodyString, options)
      // we use the map operator to take the response data, convert it to JSON,
      // and then reutrn it to any subscribers that are waiting for the data to resolve.
      .map((res: Response) => res.json()) // 调用 Response 对象的 json() 方法，把响应体转成 JSON 对象
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      // .subscribe(data => {
      //   if (data) console.log(data);
      // });
  }
}
