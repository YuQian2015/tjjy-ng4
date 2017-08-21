/**
*     登录组件
*     @output signup
*     @output signin
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UserInfoModule } from './user-info.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Output() signup = new EventEmitter();
  @Output() signin = new EventEmitter();

  isLogin: boolean;
  UserInfo = new UserInfoModule('', '', '', '');
  constructor() {
    this.isLogin = true;
  }

  login() {

    let email = this.UserInfo.email, password = this.UserInfo.password;
    this.signin.emit(
      {
        email, password
      });
  }
  register() {
    let name = this.UserInfo.name,
        email = this.UserInfo.email,
        password = this.UserInfo.password,
        repeat = this.UserInfo.repeat;

    this.signup.emit(
      {
        name, email, password, repeat
      });
  }
  changeState() {
    this.isLogin = !this.isLogin;
  }
  ngOnInit() {
  }

}
