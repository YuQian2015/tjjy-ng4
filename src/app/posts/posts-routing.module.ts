import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


// import { SharedModule }  from '../shared/shared.module';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostViewerComponent } from './post-viewer/post-viewer.component';
import { PostContainerComponent } from './post-container/post-container.component';

export const ROUTES: Routes = [
  { path: '', component: PostContainerComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/post/list' },
      { path: 'list', component: PostListComponent },
      { path: 'new', component: NewPostComponent },
      { path: ':id', component: PostViewerComponent },
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
