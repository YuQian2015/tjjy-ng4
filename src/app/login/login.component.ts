import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean;
  username: string;
  password: string;
  repeat: string;
  constructor() {
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
