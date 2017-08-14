import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AlertModule, CarouselModule, ModalModule } from 'ngx-bootstrap';

// Import Angular plugin.
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
// import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


/* Routing Module */
import { AppRoutingModule }  from './app-routing.module';
import { SharedModule }  from './shared/shared.module';

// service
import { UserService } from './service/user.service';

//module
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';



// component
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { BannerComponent } from './component/banner/banner.component';
// import { PostListComponent } from './component/post-list/post-list.component';
import { HeroComponent } from './component/hero/hero.component';
// import { NewPostComponent } from './component/new-post/new-post.component';
// import { PostComponent } from './component/post/post.component';
// import { ImageManagerComponent } from './component/image-manager/image-manager.component';


@NgModule({
  declarations: [
    AppComponent,//根组件
    LoginComponent,
    MainComponent,
    UserInfoComponent,
    NavBarComponent,
    BannerComponent,
    // PostListComponent,
    HeroComponent,
    // NewPostComponent,
    // PostComponent,
    // ImageManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),CarouselModule.forRoot(),ModalModule.forRoot(),
    // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    HttpModule,
    // AngularFontAwesomeModule,
    AppRoutingModule,
    // UserModule,
    PostsModule,
    SharedModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]//启动根组件到index.html
})
export class AppModule { }
