import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { HeroComponent } from './component/hero/hero.component';


export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'post', loadChildren: 'app/posts/posts.module#PostsModule' },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hero', component: HeroComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule,FormsModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
