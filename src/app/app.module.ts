import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

/* Routing Module */
import { AppRoutingModule }  from './app-routing.module';

import { SharedModule }  from './shared/shared.module';
import { FeaturesModule }  from './features/features.module';

// service
import { UserService } from './core/service/user.service';

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
    SharedModule,
    FeaturesModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]//启动根组件到index.html
})
export class AppModule { }
