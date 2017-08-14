import { Component, OnInit } from '@angular/core';

// service
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {
  page: number;
  pageSize: number;
  count: number;
  postList: object;

  constructor(private postService: PostService) {
    this.page = 1;
    this.pageSize = 10;
  }

  ngOnInit() {

    //获取文章列表
    this.postService.getPostList(
      {
        page: this.page,
        pageSize: this.pageSize
      }
    ).subscribe(data => {
      if (data) {
        console.log(data);
        this.count = data.data.count;
        this.postList = data.data.result;
      }
    });
  }

}
