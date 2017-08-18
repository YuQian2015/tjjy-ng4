import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UserInfoModule }    from './user-info.module';


import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() user = new EventEmitter();
  @Output() signup = new EventEmitter();

  isLogin: boolean;
  UserInfo =  new UserInfoModule('', '','','');
  constructor(private userService: UserService, private router: Router) {
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
            this.user.emit(data.data.result);
            localStorage.setItem("token",data.data.token);
            this.router.navigate(['/main']);
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
      if (data) {
        this.signup.emit(data);
      }
    });
  }
  changeState(){
    this.isLogin = !this.isLogin;
  }
  ngOnInit() {
  }

}
