import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AlertModule, CarouselModule, ModalModule } from 'ngx-bootstrap';
// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


// component
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { BannerComponent } from './component/banner/banner.component';
import { FroalaComponent } from './component/froala/froala.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { HeroComponent } from './component/hero/hero.component';
import { NewPostComponent } from './component/new-post/new-post.component';
import { PostComponent } from './component/post/post.component';
import { ImageManagerComponent } from './component/image-manager/image-manager.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post', component: PostComponent,
    children: [
      { path: 'list', component: PostListComponent },
      { path: 'new', component: NewPostComponent },
    ]
  },
  { path: 'hero', component: HeroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    UserInfoComponent,
    NavBarComponent,
    BannerComponent,
    FroalaComponent,
    PostListComponent,
    HeroComponent,
    NewPostComponent,
    PostComponent,
    ImageManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AlertModule.forRoot(),CarouselModule.forRoot(),ModalModule.forRoot(),
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
