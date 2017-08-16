import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
// service
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.css'],
  providers: [PostService]
})
export class PostViewerComponent implements OnInit {

  title:string;
  authorName:string;
  content:string;
  cover:string;
  pageviews:number;
  likes:number;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.postService.viewPost(
        {
          postId: params.get('id'),
          userId: "string"
        }
      ))
    // .switchMap((params: ParamMap) => this.heroService.getHero(params.get('id')))
    .subscribe(post => console.log(post));
  }

}
