import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';


declare const App : any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  mySubscription: any;

  isMobile : boolean = this.deviceService.isMobile();
  isTablet : boolean = this.deviceService.isTablet();
  isDesktopDevice: boolean = this.deviceService.isDesktop();

  body = document.getElementsByTagName('body')[0];

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    this.body.classList.remove("login-page");
    this.body.classList.add("hold-transition", "sidebar-mini", "layout-fixed", "layout-navbar-fixed", "layout-footer-fixed");

    
    App.initMainPage();
    this.HideMenu();
  }

  SetFocusMenu(SubMenu: HTMLElement, MainMenu: HTMLElement) {
    var links = document.getElementsByClassName('nav-link active');

    for (let i : number = links.length-1; i >= 0; i--){
      const link = links[i] as HTMLElement;
      link.classList.remove('active');
    }

    SubMenu.classList.add('active');
    MainMenu.classList.add('active');
  }

  HideMenu() {
    if (this.isDesktopDevice === false) {
      if (window.innerWidth < 1024) {
        this.body.classList.remove("sidebar-open");
        this.body.classList.add("sidebar-collapse");
      }
    }
  }
}
