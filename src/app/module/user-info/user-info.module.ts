import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserInfoModule {
  constructor(
      public name: string,
      public email: string,
      public password: string
    ) {  }
}
