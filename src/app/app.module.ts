import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AlertModule,CarouselModule } from 'ngx-bootstrap';
// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


// component
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FileUnploadComponent } from './component/file-unpload/file-unpload.component';
import { BannerComponent } from './component/banner/banner.component';
import { FroalaComponent } from './component/froala/froala.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'upload', component: FileUnploadComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    UserInfoComponent,
    NavBarComponent,
    FileUnploadComponent,
    BannerComponent,
    FroalaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AlertModule.forRoot(),CarouselModule.forRoot(),
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
