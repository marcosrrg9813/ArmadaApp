import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-buzon-sugerencias',
  templateUrl: './buzon-sugerencias.page.html',
  styleUrls: ['./buzon-sugerencias.page.scss'],
})
export class BuzonSugerenciasPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateRoot('/')
  }

  goBack() {
    this.navCtrl.navigateBack('/tabs/tabs/(home:home)')
  }

}
