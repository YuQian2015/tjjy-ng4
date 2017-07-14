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
  email: string;
  constructor(private userService: UserService) {
    this.isLogin = true;
    this.username = "";
    this.password = "";
    this.repeat = "";
    this.email = "";
  }

  login(){
    if(this.email&&this.password){
      alert(this.email)
      alert(this.password)
    }
  }
  register(){
    if(!this.email||!this.username||!this.password||this.password !== this.repeat){
      return
    }
    //提交
    this.userService.register(
      {
        name: this.username,
        email: this.email,
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
  handleEmail(email){
    this.email = email;
  }
  changeState(){
    this.isLogin = !this.isLogin;
  }
  ngOnInit() {
  }

}
