import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CambiarcontrasenaPage } from './cambiarcontrasena.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarcontrasenaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CambiarcontrasenaPage]
})
export class CambiarcontrasenaPageModule {}
