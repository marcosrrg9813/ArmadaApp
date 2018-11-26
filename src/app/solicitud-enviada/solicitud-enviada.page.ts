import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-solicitud-enviada',
  templateUrl: './solicitud-enviada.page.html',
  styleUrls: ['./solicitud-enviada.page.scss'],
})
export class SolicitudEnviadaPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }


  logout() {
    this.navCtrl.navigateRoot('/')
  }

  goBack() {
    this.navCtrl.navigateBack('/tabs/tabs/(home:home)')
  }

  goToForm() {
    this.navCtrl.navigateForward('/formulario')
  }

}
