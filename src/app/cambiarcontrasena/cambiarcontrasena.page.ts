import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'
@Component({
  selector: 'app-cambiarcontrasena',
  templateUrl: './cambiarcontrasena.page.html',
  styleUrls: ['./cambiarcontrasena.page.scss'],
})
export class CambiarcontrasenaPage implements OnInit {

  constructor(public navCtr : NavController) { }
  Guardar()
  {
    this.navCtr.navigateBack('/login');
  }

  goBack() {
    this.navCtr.navigateBack('/login')
  }

  ngOnInit() {
  }

}
