import { Component, OnInit } from '@angular/core';
import { NavController, Platform, IonRouterOutlet } from '@ionic/angular'
import { GlobalService } from '../global.service';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {

  constructor(public navCtrl : NavController,
    public service : GlobalService,
    private platform: Platform) { 
      this.closeApp();
    }

  
  OnClickCiudadano() {
    this.navCtrl.navigateRoot('/tabs/tabs/(home:home)');
    this.service.tipoUsuario = "ciudadano";
  }

  OnClickMiembro() {
    this.navCtrl.navigateForward('/login');
    this.service.tipoUsuario = "miembro";
  }

  Registrar(){
    this.navCtrl.navigateForward('/registro');
  }

  ngOnInit() {
  }

  closeApp() {
    this.platform.backButton.subscribe(async () => {
      navigator['app'].exitApp()
    })
  }

}
