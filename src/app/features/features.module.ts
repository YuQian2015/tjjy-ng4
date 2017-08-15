import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,HttpModule
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
