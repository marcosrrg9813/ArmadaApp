import { Component } from '@angular/core';
import {GlobalService} from '../global.service';
import {NavController} from '@ionic/angular'
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public checkTipo : boolean;
  constructor(public navCtrl : NavController,
    public service : GlobalService,
    private router: Router) { }

   CheckTipo()
   {
     
     if(this.service.tipoUsuario =="ciudadano")
     {
        return true;
     }
     if(this.service.tipoUsuario == "miembro")
     {
       return false;
     }
       
   }

   ComisionEtica()
   {
      this.navCtrl.navigateForward('/tabs/tabs/(home:home/comision-etica)');
   }

   DireccionPersonal()
   {
      this.navCtrl.navigateForward('/tabs/tabs/(home:home/division-personal)');
   }

   ComandanciaDeCapitania()
   {
      this.navCtrl.navigateForward('/tabs/tabs/(home:home/comandanciapuertos)');
   }

   logout() {
     this.navCtrl.navigateRoot('/')
   }

}
