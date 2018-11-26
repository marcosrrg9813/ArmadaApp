import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateRoot('/')
  }

  goBack() {
    this.navCtrl.navigateBack('/tabs/tabs/(home:home)')
  }

  goForward() {
    this.navCtrl.navigateForward('/solicitud-enviada')
  }

}
