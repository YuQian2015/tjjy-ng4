import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { LoginComponent } from './features/login/login.component';


export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'post', loadChildren: 'app/posts/posts.module#PostsModule' },
  { path: 'main', loadChildren: 'app/main/main.module#MainModule' },
  { path: 'login', component: LoginComponent }
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
