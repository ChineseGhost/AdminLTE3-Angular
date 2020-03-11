import { Component, OnInit } from '@angular/core';
import { AppUrl } from '../app.url';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  body = document.getElementsByTagName('body')[0];

  mUserName : string = "";
  mPassword : string = "";

  constructor(public app : AppService, 
              private Router : Router) {
    this.body.classList.add("hold-transition", "login-page");
   }

  ngOnInit() {}

  Login() {
    localStorage.setItem("UserName", "Ong");
    
    this.body.classList.remove("login-page");
    this.body.classList.add("hold-transition", "sidebar-mini", "layout-fixed", "layout-navbar-fixed", "layout-footer-fixed");

    this.Router.navigate([AppUrl.Dashboard]);
  }
}
