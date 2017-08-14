import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


// import { SharedModule }  from '../shared/shared.module';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';

export const ROUTES: Routes = [
  { path: '', component: PostComponent,
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
    RouterModule.forChild(ROUTES),
    // SharedModule
  ],
  declarations: [  ],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
