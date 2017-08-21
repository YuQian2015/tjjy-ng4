import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  onResize(event) {
    console.log(event.target.innerWidth);
  }

  title = '登录';
  config = {
    // wheelSpeed              // Scroll speed for the mousewheel event (Default: 1).
    // wheelPropagation        // Propagate wheel events at the end (Default: false).
    // swipePropagation        // Propagate swipe events at the end (Default: true).
    // minScrollbarLength      // Minimum size for the scrollbar (Default: null).
    // maxScrollbarLength      // Maximum size for the scrollbar (Default: null).
    // useBothWheelAxes        // Always use the both wheel axes (Default: false).
    // suppressScrollX         // Disable X axis in all situations (Default: false).
    // suppressScrollY         // Disable Y axis ni all situations (Default: false).
    // scrollXMarginOffset     // Offset before enabling the X scroller (Default: 0).
    // scrollYMarginOffset     // Offset before enabling the Y scroller (Default: 0).
    // stopPropagationOnClick  // Stop the propagation of click event (Default: true).
  }
  constructor() {

  }
  ngOnInit() {

  }
}
