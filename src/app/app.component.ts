import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AdminLTE3';
  IsLoginComponent : boolean = false;
  
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

  CheckComponent(componentRef) {
    //เช็คว่าตอนนี้กำลังเปิด Component ไหนอยู่
    if (!(componentRef instanceof LoginComponent)) {
      this.IsLoginComponent =  false;
    }
    else {
      this.IsLoginComponent =  true;
    }
  }

  get IsComponentAuthen() : boolean {
    if (this.CheckAuthen === true && this.IsLoginComponent === false) {
      return true;
    }
    else if (this.CheckAuthen === false && this.IsLoginComponent === false) {
      return true;
    }
    else {
      return false;
    }
  }
}
