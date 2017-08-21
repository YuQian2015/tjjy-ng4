import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule }  from '../shared/shared.module';


import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,HttpModule,SharedModule,RouterModule,
  ],
  declarations: [
    LoginComponent,
    NavBarComponent
  ],
  exports: [
    LoginComponent,
    NavBarComponent
  ]
})
export class FeaturesModule {

}
