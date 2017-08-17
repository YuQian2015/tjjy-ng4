import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { SharedModule }  from '../shared/shared.module';
import { PostsRoutingModule }  from './posts-routing.module';

import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostViewerComponent } from './post-viewer/post-viewer.component';
import { PostContainerComponent } from './post-container/post-container.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    TooltipModule.forRoot(),PaginationModule.forRoot()
  ],
  declarations: [
    PostComponent,PostListComponent,NewPostComponent, PostViewerComponent, PostContainerComponent
  ],
  exports: []
})
export class PostsModule { }
