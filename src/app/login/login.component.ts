import { Component, OnInit } from '@angular/core';
import { UserInfoModule }    from '../module/user-info/user-info.module';


import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService],
})
export class LoginComponent implements OnInit {
  isLogin: boolean;
  UserInfo =  new UserInfoModule('', '','','');
  constructor(private userService: UserService) {
    this.isLogin = true;
  }

  login(){
    if(this.UserInfo.email&&this.UserInfo.password){
      alert(this.UserInfo.email)
      alert(this.UserInfo.password)
    }
  }
  register(){
    if(!this.UserInfo.email||!this.UserInfo.name||!this.UserInfo.password||this.UserInfo.password !== this.UserInfo.repeat){
      return
    }
    //提交
    this.userService.register(
      {
        name: this.UserInfo.name,
        email: this.UserInfo.email,
        password: this.UserInfo.password,
      }
    ).subscribe(data => {
      if (data) console.log(data);
    });
  }
  changeState(){
    this.isLogin = !this.isLogin;
  }
  ngOnInit() {
  }

}
