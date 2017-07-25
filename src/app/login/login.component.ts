import { Component, OnInit } from '@angular/core';
import { UserInfoModule }    from '../module/user-info/user-info.module';


import { UserService } from '../service/user.service';
import { FileUploadService } from '../service/file-upload.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService,FileUploadService],
})
export class LoginComponent implements OnInit {
  isLogin: boolean;
  UserInfo =  new UserInfoModule('', '','','');
  constructor(private userService: UserService,private _svc: FileUploadService) {
    this.isLogin = true;
  }

  login(){
    if(this.UserInfo.email&&this.UserInfo.password){
      this.userService.signIn(
        {
          email: this.UserInfo.email,
          password: this.UserInfo.password,
        }).subscribe(data => {
          if (data) {
            console.log(data.data.result);
          }
        });
    }
  }
  register(){
    if(!this.UserInfo.email||!this.UserInfo.name||!this.UserInfo.password||this.UserInfo.password !== this.UserInfo.repeat){
      return
    }
    //提交
    this.userService.signUp(
      {
        name: this.UserInfo.name,
        email: this.UserInfo.email,
        password: this.UserInfo.password,
      }
    ).subscribe(data => {
      if (data) console.log(data);
    });
  }
  upload(fieldName: string, fileList: FileList){
    // handle file changes
    const formData = new FormData();

    if (!fileList.length) return;

    // append the files to FormData
    Array
      .from(Array(fileList.length).keys())
      .map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

    // save it
    this.save(formData);
  }
  save(formData: FormData) {
    // upload data to the server
    this._svc.upload(formData)
      .take(1)
      .delay(1500) // DEV ONLY: delay 1.5s to see the changes
      .subscribe(x => {
        console.log(x)
      }, err => {
        console.log(err)
      })
  }
  changeState(){
    this.isLogin = !this.isLogin;
  }
  ngOnInit() {
  }

}
