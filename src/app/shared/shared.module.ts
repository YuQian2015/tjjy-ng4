import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FroalaComponent } from './froala/froala.component';
import { ImageManagerComponent } from './image-manager/image-manager.component';

// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AlertModule, CarouselModule, ModalModule } from 'ngx-bootstrap';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    AlertModule.forRoot(),CarouselModule.forRoot(),ModalModule.forRoot(),
    AngularFontAwesomeModule,
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.rotatingPlane,
        backdropBackgroundColour: 'rgba(0,0,0,0.2)',
        backdropBorderRadius: '0px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
    }),
  ],
  declarations: [
    FroalaComponent,
    ImageManagerComponent,
  ],
  exports:[
    CommonModule,
    FormsModule,
    FroalaComponent,
    AngularFontAwesomeModule,
    AlertModule,CarouselModule,ModalModule,
    ImageManagerComponent,
    LoadingModule
  ]
})
export class SharedModule { }
