import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ResponseModule {
  constructor(
      public error: boolean,
      public errorCode: string,
      public message:string,
      public data:{
        result:object,
        token?:string,
      }
    ) {  }
  }
