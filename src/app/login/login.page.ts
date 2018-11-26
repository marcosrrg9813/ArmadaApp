import { Component, OnInit } from '@angular/core';
import {NavController, Platform} from '@ionic/angular'
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl : NavController,
    public router : Router,
    private platform: Platform) { 
    }

  
  Registrar()
  {
      this.navCtrl.navigateForward('/registro');
  }
  OlvidasteContrasena()
  {
      this.navCtrl.navigateForward('/olvidastecontrasena');
  }

  StartSession()
  {
    // this.router.navigateByUrl('/tabs/tabs/(home:home)')
    this.navCtrl.navigateRoot('/tabs/tabs/(home:home)')
  }

  CheckTipo()
  {
    /*if(this.service.tipoUsuario == "miembro")
    {
      return true;
    }*/
  }
  ngOnInit() {
  }

}
