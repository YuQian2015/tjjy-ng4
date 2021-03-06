import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { url } from '../../core/config/api.config';

@Component({
  selector: 'app-froala',
  templateUrl: './froala.component.html',
  styleUrls: ['./froala.component.css']
})
export class FroalaComponent implements OnInit {
  @Output() froala = new EventEmitter();

  option: Object;
  froalaText: string;
  constructor() {
    this.froalaText = "";
  }

  ngOnInit() {

    // 参数配置
    // https://www.froala.com/wysiwyg-editor/docs/options?utm_expid=98676916-2.gb-QgBReTCCS2F60oBIe_g.0&utm_referrer=https%3A%2F%2Fwww.google.com%2F#language
    this.option = {
      language: "zh_cn", //配置语言
      placeholderText: "请输入内容", // 文本框提示内容
      charCounterCount: true, // 是否开启统计字数
      charCounterMax: 20000, // 最大输入字数,目前只支持英文字母
      // 注意导航条的配置, 按照官方的文档,无法配置,只能使用toolbarButtons来配置了。
      toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'align', 'insertLink', 'insertImage', 'insertHR', 'subscript', 'superscript'],
      codeMirror: false, // 高亮显示html代码
      codeMirrorOptions: { // 配置html代码参数
        tabSize: 4
      },


      // 上传图片，视频等配置
      imageUploadURL:url.baseUrl+"/froala/uploadImage",//本地路径
      imageManagerLoadURL:url.baseUrl+"/froala/imageManager",
      imageManagerDeleteURL:url.baseUrl+"/froala/deleteImage",
      // imageUploadParams: { uid: this.questionListService.userInfo.id },//接口其他传参,默认为空对象{},
      imageUploadMethod: "POST",
      imageManagerLoadMethod: 'POST',
      imageManagerDeleteMethod: 'POST',



      // 事件, 每次输入,就将值传递给父组件, 或者使用失去焦点的时候传递。
      events: {
        'froalaEditor.keyup': (e, editor) => {
          this.froala.emit(this.froalaText);
          // console.log(editor.selection.get());
        },
        'froalaEditor.blur': (e, editor) => {
          this.froala.emit(this.froalaText);
          // console.log(editor.selection.get());
        }
      }
    }
  }
}
