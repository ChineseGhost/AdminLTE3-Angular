import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';
import { AppUrl } from '../app.url';
import bsCustomFileInput from 'bs-custom-file-input';

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
    bsCustomFileInput.init(); 
  }

  Clear() {
    localStorage.removeItem("UserName");
    window.location.href = AppUrl.Login;
  }
}
