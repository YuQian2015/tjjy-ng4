import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { PostComponent } from '../component/post/post.component';
import { PostListComponent } from '../component/post-list/post-list.component';
import { NewPostComponent } from '../component/new-post/new-post.component';

export const ROUTES: Routes = [
  { path: 'post', component: PostComponent,
    children: [

      { path: '', pathMatch: 'full', redirectTo: '/post/list' },
      { path: 'list', component: PostListComponent },
      { path: 'new', component: NewPostComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ ],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
