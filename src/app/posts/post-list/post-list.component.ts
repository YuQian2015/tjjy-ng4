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
  public maxSize:number = 5;
  public layout:string = "grid";
  page: number;
  pageSize: number;
  count: number;
  postList: object;
  totalPage: number;
  next: boolean;
  previous: boolean;

  constructor(private postService: PostService) {
    this.page = 1;
    this.pageSize = 10;
  }

  ngOnInit() {
    this.getPostList(this.page,this.pageSize);
  }

  //获取文章列表
  getPostList(page = 1, pageSize = 10) {
    this.postService.getPostList(
      {
        page: page,
        pageSize: pageSize
      }
    ).subscribe(data => {
      if (data) {
        let result = data.data;
        console.log(result);
        this.count = result.count;
        this.page = result.page;
        this.postList = result.result;
        this.totalPage = result.totalPage;
        this.next = result.next;
        this.previous = result.previous;
      }
    });
  }
  pageChange(e){
    this.getPostList(e.page,e.itemsPerPage)
  }
  changeLayout(type){
    this.layout = type;
  }
}
