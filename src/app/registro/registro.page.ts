import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  Registrar()
  {
    this.navCtrl.navigateForward('/login');
  }

  goBack() {
    this.navCtrl.navigateBack('/login')
  }

  ngOnInit() {
  }

}
