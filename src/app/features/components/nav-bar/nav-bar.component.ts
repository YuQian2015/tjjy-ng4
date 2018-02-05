import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorage } from 'ngx-store';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { UserService } from '../../../core/service/user.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    // it will be stored under ${prefix}token name
    @LocalStorage() token: string;
    @LocalStorage() user: object;

  public modalRef: BsModalRef;
  isLogin: boolean = !!this.token;
  title = '项目名称';
  isLoading:boolean = false;
  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) { }
  logout() {
    this.token = undefined;
    this.user = undefined;
    this.isLogin = false;
    // this.router.navigate(['/login']);
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
            this.token = data.data.token;
              this.user = data.data.result;
              this.isLogin = true;
              this.modalRef.hide();
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
