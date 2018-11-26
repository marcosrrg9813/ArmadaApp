import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuzonSugerenciasPage } from './buzon-sugerencias.page';

const routes: Routes = [
  {
    path: '',
    component: BuzonSugerenciasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuzonSugerenciasPage]
})
export class BuzonSugerenciasPageModule {}
