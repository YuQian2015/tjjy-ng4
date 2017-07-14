# TjjyNg4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## 知识点
https://angular.io
@NgModule
'src/app/app.module.ts'
The @NgModule decorator装饰器 identifies表示 AppModule as an Angular module class (also called an NgModule class). @NgModule takes a metadata object that tells Angular how to compile编译 and launch the application.

## imports — the BrowserModule that this and every application needs to run in a browser.
Angular modules are a way to consolidate统一 features that belong together into discrete分散的 units. Many features of Angular itself are organized as Angular modules. HTTP services are in the HttpModule. The router is in the RouterModule. Eventually you may create a feature module.
Only NgModule classes go in the imports array. Do not put any other kind of class in imports.

## declarations — 声明使用的component 、directives、pipes。
You must declare声明 every component in an NgModule class. If you use a component without declaring it, you'll see a clear error message in the browser console.

## bootstrap — Angular会创建并把里面的组件插入index.html主页面。
You launch the application by bootstrapping the root AppModule. Among other things, the bootstrapping process creates the component(s) listed in the bootstrap array and inserts each one into the browser DOM.

## @Input 装饰器 声明一个组件的property

## Services --keeps components lean and focused on supporting the view, and makes it easy to unit-test components with a mock service.
Instead of copying and pasting the same code over and over, you'll create a single reusable data service and inject it into the components that need it. Using a separate service keeps components lean and focused on supporting the view, and makes it easy to unit-test components with a mock service.

## @Injectable() decorator. 发出metadata指定依赖
The @Injectable() decorator tells TypeScript to emit发出 metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.





https://scotch.io/tutorials/angular-2-http-requests-with-observables
## What are Observables?
The Observable proposal is in stage 1 ( https://tc39.github.io/proposal-observable/ ) so there is chance for native support in the future. Observables are similar to promises but with major differences that make them better. The key differences are:

Observables:Observables handle multiple values over time,Observables are cancellable
Promise:Promises are only called once and will return a single value,Promises are not cancellable


The ability of observables being able to handle multiple values over time makes them a good candidate for working with real-time data, events and any sort of stream you can think of.

Being able to cancel observables gives better control when working with in-flow of values from a stream. The common example is the auto-complete widget which sends a request for every key-stroke.

If you are searching for angular in an auto-complete, the first request is with a and then an. The scary thing is that an might come back with a response before a which produces a messy data. With observables, you have better control to hook in and cancel a's because an is coming through.

Observables is an ES7 feature which means you need to make use of an external library to use it today. RxJS is a good one. RxJS also provides Observable operators which you can use to manipulate the data being emitted. Some of these operators are:

Map
Filter
Take
Skip
Debounce
Above is a list of popular operators you will encounter in most projects but those are not all. See RxMarbles http://rxmarbles.com/ for more.


## Angular HTTP and Observables
Hopefully, you have seen what observables are capable of. Good news is, you can also use observables to handle HTTP requests rather than Promises. I understand you might have started in the days when callbacks were the hot thing when handling XHR, then a couple of years back you got the news that callbacks were now a bad practice you had to use promises. Now again, we're hearing that we should use observables rather than promises.

We just have to get used to change and growth to build better and cooler stuff
Angular and Angular 2 is amazing now you are hearing that you should use observables rather than promises. That is a general tech challenge and we just have to get used to change and growth to build better and cooler stuff. Trust me you won't regret this one.

The rest of this article will focus on building a demo that uses observables to handle HTTP requests.

## Component Interaction: What You May Not Know
In Angular, data is passed from parent to child using Input.

Another scenario is when there is a change in the child component and the parent component need to be notified about the change. The key word is notify which means the child will raise and event that the parent is listening to. This is done with Output in Angular.

The actual pain is when siblings or cousins need to notify each other on internal changes. Angular does not provide a core solution for this but there are solutions. The most common way is to have a central event hub that keeps track of events using an ID:


/**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>;
    /**
     * Performs a request with `get` http method.
     */
    get(url: string, options?: RequestOptionsArgs): Observable<Response>;
    /**
     * Performs a request with `post` http method.
     */
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
    /**
     * Performs a request with `put` http method.
     */
    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
    /**
     * Performs a request with `delete` http method.
     */
    delete(url: string, options?: RequestOptionsArgs): Observable<Response>;
    /**
     * Performs a request with `patch` http method.
     */
    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
    /**
     * Performs a request with `head` http method.
     */
    head(url: string, options?: RequestOptionsArgs): Observable<Response>;



## form
https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol
