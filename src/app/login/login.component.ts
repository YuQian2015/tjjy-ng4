import { Component, OnInit } from '@angular/core';


import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
  isLogin: boolean;
  username: string;
  password: string;
  repeat: string;
  constructor(private userService: UserService) {
    this.isLogin = true;
    this.username = "";
    this.password = "";
    this.repeat = "";
  }

  login(){
    if(!this.isLogin&&this.username&&this.password&&this.password === this.repeat){
      alert(this.username)
      alert(this.password)
    }
    if(this.isLogin&&this.username&&this.password){
      alert("13")
    }
  }
  register(){
    this.userService.register();
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
