import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { FroalaComponent } from './froala/froala.component';
import { ImageManagerComponent } from './image-manager/image-manager.component';

// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AlertModule, CarouselModule, ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    AlertModule.forRoot(),CarouselModule.forRoot(),ModalModule.forRoot(),
    AngularFontAwesomeModule,
  ],
  declarations: [
    FroalaComponent,ImageManagerComponent
  ],
  exports:[
    CommonModule,
    FormsModule,
    FroalaComponent,
    AngularFontAwesomeModule,
    ImageManagerComponent
  ]
})
export class SharedModule { }
