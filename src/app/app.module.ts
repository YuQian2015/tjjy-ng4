import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Routing Module */
import { AppRoutingModule }  from './app-routing.module';

import { SharedModule }  from './shared/shared.module';
import { FeaturesModule }  from './features/features.module';

// service
import { UserService } from './core/service/user.service';

// component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,//根组件
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeaturesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]//启动根组件到index.html
})
export class AppModule { }
