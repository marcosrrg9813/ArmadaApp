import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-comandanciapuertos',
  templateUrl: './comandanciapuertos.page.html',
  styleUrls: ['./comandanciapuertos.page.scss'],
})
export class ComandanciapuertosPage implements OnInit {

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
