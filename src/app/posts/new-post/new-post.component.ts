import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NewPostModule }    from './new-post.module';
// service
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})
export class NewPostComponent implements OnInit {

  Post = new NewPostModule('', '', '', '01', true, [], '');

  public editorValue: string = '';
  constructor(private postService: PostService, private location: Location) { }

  froalaContent(content) {
    this.Post.content = content;
    console.log(content)
  }
  setCover(cover){
    this.Post.cover = cover.url;
    console.log(cover);
  }
  submitPost() {
    console.log(this.Post);
    //获取文章列表
    let { title, description, content, typeCode, visible, tags, cover} = this.Post;
    let body = {title, description, content, typeCode, visible, tags, cover}
    this.postService.addPostList(body).subscribe(data => {
      if (data) {
        console.log(data);
        this.location.back();
      }
    });
  }
  ngOnInit() {
  }

}
