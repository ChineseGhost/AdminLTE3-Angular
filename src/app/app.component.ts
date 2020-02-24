import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AdminLTE3';

  constructor() {

  }
  public get CheckAuthen() :boolean {
    let authUser : string = localStorage.getItem("UserName");

    if (authUser != null && authUser != "") {
      return true;
    }
    else {
      return false;
    }

  }
}
