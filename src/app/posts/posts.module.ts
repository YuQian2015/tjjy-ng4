import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from '../component/post/post.component';

import { PostsRoutingModule }  from './posts-routing.module';

@NgModule({
  imports: [
    CommonModule,PostsRoutingModule
  ],
  declarations: [],
  exports: []
})
export class PostsModule { }
