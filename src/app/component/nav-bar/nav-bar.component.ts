import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLogin:boolean = false
  title = '项目名称';
  constructor(private router: Router) { }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    let token = localStorage.getItem("token");
    if(token){
      this.isLogin = true;
    }
  }

}
