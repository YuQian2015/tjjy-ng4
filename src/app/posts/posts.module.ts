import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';


import { SharedModule }  from '../shared/shared.module';
import { PostsRoutingModule }  from './posts-routing.module';

import { AlertModule, CarouselModule, ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    AlertModule.forRoot(),CarouselModule.forRoot(),ModalModule.forRoot(),
  ],
  declarations: [
    PostComponent,PostListComponent,NewPostComponent
  ],
  exports: []
})
export class PostsModule { }
