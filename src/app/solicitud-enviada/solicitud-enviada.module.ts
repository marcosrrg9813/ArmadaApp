import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SolicitudEnviadaPage } from './solicitud-enviada.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudEnviadaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SolicitudEnviadaPage]
})
export class SolicitudEnviadaPageModule {}
