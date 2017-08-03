import { Component, OnInit } from '@angular/core';
import { PostModule }    from '../../module/post/post.module';
// service
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})
export class NewPostComponent implements OnInit {

  Post = new PostModule('', '', '', '', true, [], '');

  public editorValue: string = '';
  constructor(private postService: PostService) { }

  froalaContent(content) {
    this.Post.content = content;
    // console.log(content)
  }
  submitPost() {
    console.log(this.Post);
    //获取文章列表
    let { title, description, content, typeCode, visible, tags, cover} = this.Post;
    let token = localStorage.getItem("token");
    let body = {token, title, description, content, typeCode, visible, tags, cover}
    this.postService.addPostList(body).subscribe(data => {
      if (data) {
        console.log(data);
      }
    });
  }
  ngOnInit() {
  }

}
