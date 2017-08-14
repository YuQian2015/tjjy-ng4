import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

// import { AlertModule, CarouselModule, ModalModule } from 'ngx-bootstrap';

// Import Angular plugin.
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
// import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


/* Routing Module */
import { AppRoutingModule }  from './app-routing.module';
import { SharedModule }  from './shared/shared.module';

// service
import { UserService } from './service/user.service';

//module
// import { PostsModule } from './posts/posts.module';
// import { MainModule } from './main/main.module';

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
    // AlertModule.forRoot(),CarouselModule.forRoot(),ModalModule.forRoot(),
    // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    HttpModule,
    // AngularFontAwesomeModule,
    AppRoutingModule,
    // PostsModule,
    // MainModule,
    SharedModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]//启动根组件到index.html
})
export class AppModule { }
