import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  public editorValue: string = '';
  constructor() { }

  froalaContent(event) {
    console.log(event)
  }
  ngOnInit() {
  }

}
