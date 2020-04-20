import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';
import { AppUrl } from '../app.url';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  body = document.getElementsByTagName('body')[0];

  constructor(public App: AppService,
              private Router : Router) {
    
  }

  ngOnInit() {
    // this.ScriptLoader.load('Dashboard', 'Demo');
    // localStorage.removeItem("UserName");

  }

  Clear() {
    localStorage.removeItem("UserName");
    this.body.classList.remove("sidebar-mini", "layout-fixed", "layout-navbar-fixed", "layout-footer-fixed");
    this.Router.navigate(['/', AppUrl.Login]);
    // window.location.href = AppUrl.Login;
  }
}
