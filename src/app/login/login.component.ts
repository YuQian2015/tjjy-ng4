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
  username: string;
  password: string;
  repeat: string;
  UserInfo =  new UserInfoModule('', '','');
  constructor(private userService: UserService) {
    this.isLogin = true;
    this.username = "";
    this.password = "";
    this.repeat = "";
  }

  login(){
    if(this.UserInfo.email&&this.password){
      alert(this.UserInfo.email)
      alert(this.password)
    }
  }
  register(){
    if(!this.UserInfo.email||!this.username||!this.password||this.password !== this.repeat){
      return
    }
    //提交
    this.userService.register(
      {
        name: this.username,
        email: this.UserInfo.email,
        password: this.password,
      }
    ).subscribe(data => {
      if (data) console.log(data);
    });
  }
  handleUsername(username){
    this.username = username;
  }
  handlePassword(password){
    this.password = password;
  }
  handleRepeat(repeat){
    this.repeat = repeat;
  }
  changeState(){
    this.isLogin = !this.isLogin;
  }
  ngOnInit() {
  }

}
