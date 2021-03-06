import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WebStorageModule } from 'ngx-store';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

/* Routing Module */
import { AppRoutingModule }  from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { BrowserXhr, HttpModule } from '@angular/http';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';

import { CoreModule } from './core/core.module';
import { SharedModule }  from './shared/shared.module';
import { FeaturesModule }  from './features/features.module';



// component
import { AppComponent } from './app.component';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,//根组件
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebStorageModule,
    SharedModule,
    FeaturesModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    BrowserAnimationsModule, // required animations module
    CoreModule.forRoot(),
    ToastrModule.forRoot({ timeOut: 3000,closeButton:true,positionClass: 'toast-top-center' }), // ToastrModule added

    HttpModule,
    NgProgressModule
  ],
  providers: [{ provide: BrowserXhr, useClass: NgProgressBrowserXhr }],
  bootstrap: [AppComponent]//启动根组件到index.html
})
export class AppModule { }
