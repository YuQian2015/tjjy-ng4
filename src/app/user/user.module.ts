import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../component/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent,RouterModule]
})
export class UserModule { }
