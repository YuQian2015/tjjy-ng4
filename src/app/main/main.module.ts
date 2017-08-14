import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainComponent } from './main/main.component';
import { BannerComponent } from './banner/banner.component';

import { MainRoutingModule }  from './main-routing.module';
import { SharedModule }  from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    BannerComponent
  ]
})
export class MainModule { }
