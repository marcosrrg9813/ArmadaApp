import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'
@Component({
  selector: 'app-olvidastecontrasena',
  templateUrl: './olvidastecontrasena.page.html',
  styleUrls: ['./olvidastecontrasena.page.scss'],
})
export class OlvidastecontrasenaPage implements OnInit {

  constructor(public navCtr : NavController) { }
  CambiarPass()
  {
    this.navCtr.navigateForward('/cambiarcontrasena');
  }

  goBack() {
    this.navCtr.navigateBack('/login')
  }

  ngOnInit() {
  }

}
