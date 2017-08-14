import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainComponent } from './main/main.component';
import { BannerComponent } from './banner/banner.component';

import { MainRoutingModule }  from './main-routing.module';
import { SharedModule }  from '../shared/shared.module';

import { AlertModule, CarouselModule, ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    AlertModule.forRoot(),CarouselModule.forRoot(),ModalModule.forRoot(),
  ],
  declarations: [
    MainComponent,
    BannerComponent
  ]
})
export class MainModule { }
