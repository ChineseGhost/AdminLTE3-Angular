import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { WindowScrollController } from '@fullcalendar/core';

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
    App.initMainPage();
    this.HideMenu();
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
