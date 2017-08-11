import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { BannerComponent } from './component/banner/banner.component';
import { FroalaComponent } from './component/froala/froala.component';
import { HeroComponent } from './component/hero/hero.component';
import { ImageManagerComponent } from './component/image-manager/image-manager.component';


export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
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
    // LoginComponent,
    // MainComponent,
    // UserInfoComponent,
    // NavBarComponent,
    // BannerComponent,
    // FroalaComponent,
    // PostListComponent,
    // HeroComponent,
    // NewPostComponent,
    // PostComponent,
    // ImageManagerComponent
  ]
})
export class AppRoutingModule { }
