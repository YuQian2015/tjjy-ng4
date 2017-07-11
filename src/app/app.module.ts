import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AlertModule } from 'ngx-bootstrap';

// component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { UserInfoComponent } from './user-info/user-info.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
