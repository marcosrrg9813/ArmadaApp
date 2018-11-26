import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-comision-etica',
  templateUrl: './comision-etica.page.html',
  styleUrls: ['./comision-etica.page.scss'],
})
export class ComisionEticaPage implements OnInit {

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
    this.navCtrl.navigateForward('/buzon-sugerencias')
  }

}
