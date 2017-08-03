import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PostModule {
  constructor(
    public title: string,
    public description: string,
    public content: string,
    public typeCode: string,
    public visible: boolean,
    public tags: object,
    public cover: string,
  ) { }
}
