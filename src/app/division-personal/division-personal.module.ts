import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DivisionPersonalPage } from './division-personal.page';

const routes: Routes = [
  {
    path: '',
    component: DivisionPersonalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DivisionPersonalPage]
})
export class DivisionPersonalPageModule {}
