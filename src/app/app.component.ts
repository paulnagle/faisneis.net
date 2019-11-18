import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Legislation',
      url: '/legislation',
      icon: 'paper'
    },
    {
      title: 'Debates',
      url: '/debates',
      icon: 'paper'
    },
    {
      title: 'Constituencies',
      url: '/constituencies',
      icon: 'paper'
    },
    {
      title: 'Divisions',
      url: '/divisions',
      icon: 'paper'
    },
    {
      title: 'Members',
      url: '/members',
      icon: 'paper'
    },
    {
      title: 'Parties',
      url: '/parties',
      icon: 'paper'
    },
    {
      title: 'Questions',
      url: '/questions',
      icon: 'paper'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
