import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

declare const App : any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  body = document.getElementsByTagName('body')[0];
  constructor(public App: AppService) {
    this.body.classList.remove("login-page");
    this.body.classList.add("hold-transition", "sidebar-mini", "layout-fixed", "layout-navbar-fixed", "layout-footer-fixed");
  }

  ngOnInit() {
    // this.ScriptLoader.load('Dashboard', 'Demo');
    // localStorage.removeItem("UserName");
    App.initMainPage();
  }

  Clear() {
    localStorage.removeItem("UserName");
  }
}
