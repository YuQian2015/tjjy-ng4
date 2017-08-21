import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule }  from '../shared/shared.module';


import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavigationComponent } from './containers/navigation.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,HttpModule,SharedModule,RouterModule,
  ],
  declarations: [
    NavBarComponent,
    NavigationComponent
  ],
  exports: [
    NavBarComponent,
    NavigationComponent
  ]
})
export class FeaturesModule {

}
