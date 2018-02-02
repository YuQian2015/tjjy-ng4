import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AlertModule, CarouselModule, ModalModule, BsDropdownModule } from 'ngx-bootstrap';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

import { FroalaComponent } from './froala/froala.component';
import { ImageManagerComponent } from './components/image-manager/image-manager.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { LoginComponent } from './login/login.component';

const LOADING_SETTING = {
    animationType: ANIMATION_TYPES.threeBounce,
    backdropBackgroundColour: 'rgba(0,0,0,0)',
    backdropBorderRadius: '0px',
    primaryColour: '#ef388b',
    secondaryColour: '#4ba1ec',
    tertiaryColour: '#41e2af'
}

@NgModule({
  imports: [
    CommonModule,FormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    AlertModule.forRoot(),CarouselModule.forRoot(),ModalModule.forRoot(),BsDropdownModule.forRoot(),
    AngularFontAwesomeModule,
    LoadingModule.forRoot(LOADING_SETTING),
  ],
  declarations: [
    FroalaComponent,
    ImageManagerComponent,
    LoginComponent,
    ImageViewerComponent,
    ImageUploaderComponent,
  ],
  exports:[
    CommonModule,
    FormsModule,
    FroalaComponent,
    AngularFontAwesomeModule,
    AlertModule,CarouselModule,ModalModule,BsDropdownModule,
    ImageManagerComponent,
    LoginComponent,
    ImageViewerComponent,
    ImageUploaderComponent,
    LoadingModule,
  ]
})
export class SharedModule { }
