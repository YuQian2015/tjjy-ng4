import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

enum size {
  'lg', 'sm', 'xs'
}

@Component({
  selector: 'app-image-manager',
  templateUrl: './image-manager.component.html',
  styleUrls: ['./image-manager.component.css'],
})

export class ImageManagerComponent implements OnInit {


  @Output() manage = new EventEmitter();
  @Output() view = new EventEmitter();
  @Input() images: object;
  @Input() size: string;

  constructor( ) { }

  handleClick(image) {
    this.view.emit(image);
  }
  ngOnInit() {
  }
}
