import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { UserService } from '../../core/service/user.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public modalRef: BsModalRef;
  user: object;
  isLogin: boolean = false;
  title = '项目名称';
  isLoading:boolean = false;
  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) { }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.isLogin = false;
    this.user = {};
    // this.router.navigate(['/login']);
  }
  getUser(user) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
    let token = localStorage.getItem("token");
    this.isLogin = true;
    if (token) {
      this.isLogin = true;
    }
    this.modalRef.hide();
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm'
    });
  }

  signin(data){
    let { email,password } = data;
    if(email&&password){
      this.isLoading = true;
      this.userService.signIn(
        {
          email,
          password
        }).subscribe(data => {
          if (data) {
            this.isLoading = false;
            console.log(data.data.result);
            this.getUser(data.data.result)
            localStorage.setItem("token",data.data.token);
            this.router.navigate(['/main']);
          }
        });
    }
  }
  signup(data) {
    this.isLoading = true;

    let {name,email,password,repeat} = data;

    if(!name||!email||!password||password !== repeat){
      return
    }
    //提交注册
    this.userService.signUp(
      {
        name,
        email,
        password,
      }
    ).subscribe(data => {
      this.isLoading = false;
      if (data.error) {
        this.toastr.error(data.message, '注册失败！');
        return 0
      }
      this.modalRef.hide();
      this.toastr.success(data.message, '注册成功！');
    });
  }
  ngOnInit() {
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("user");
    if (user) {
      this.user = JSON.parse(user);
    }
    if (token) {
      this.isLogin = true;
    }
  }

}
