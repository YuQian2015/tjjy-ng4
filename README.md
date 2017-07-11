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
