import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  LockOut() {
    // this.CookieService.delete('iCon', '/'); //ลบ Cookie ออก
    // this.App.setStatusLogin('false');      //ปรับสถานะ Login เป็น False
    // this.Router.navigate([AppUrl.Login]);   //Naviage to login  
    // this.App.clearLocalStorage();          //Clear Local Storage
    // window.location.href = AppUrl.Login;
  }

}
