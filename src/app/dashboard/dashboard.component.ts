import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

declare const App : any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public App: AppService) {
    
  }

  ngOnInit() {
    // this.ScriptLoader.load('Dashboard', 'Demo');
    // localStorage.removeItem("UserName");

  }

  Clear() {
    localStorage.removeItem("UserName");
  }
}
