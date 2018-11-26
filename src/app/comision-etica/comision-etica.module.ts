import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComisionEticaPage } from './comision-etica.page';

const routes: Routes = [
  {
    path: '',
    component: ComisionEticaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComisionEticaPage]
})
export class ComisionEticaPageModule {}
