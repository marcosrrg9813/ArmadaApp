import { Component } from '@angular/core';

import { Nav ,Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {BienvenidoPage} from './bienvenido/bienvenido.page';
import{ ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})


export class AppComponent {

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
