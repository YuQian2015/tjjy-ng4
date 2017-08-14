import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

/* Routing Module */
import { AppRoutingModule }  from './app-routing.module';

import { SharedModule }  from './shared/shared.module';

// service
import { UserService } from './service/user.service';

// component
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,//根组件
    LoginComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]//启动根组件到index.html
})
export class AppModule { }
