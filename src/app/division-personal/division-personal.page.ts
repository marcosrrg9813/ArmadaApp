import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-division-personal',
  templateUrl: './division-personal.page.html',
  styleUrls: ['./division-personal.page.scss'],
})
export class DivisionPersonalPage implements OnInit {

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
