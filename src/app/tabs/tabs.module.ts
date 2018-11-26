import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { AyudaPageModule } from '../ayuda/ayuda.module';
import { EstadosPageModule } from '../estados/estados.module'
import { DirectorioPageModule } from '../directorio/directorio.module';
import { HomePageModule } from '../home/home.module';
import { ComandanciapuertosPageModule } from '../comandanciapuertos/comandanciapuertos.module';
import { DivisionPersonalPageModule } from '../division-personal/division-personal.module';
import { ComisionEticaPageModule } from '../comision-etica/comision-etica.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    EstadosPageModule,
    DirectorioPageModule,
    ComandanciapuertosPageModule,
    DivisionPersonalPageModule,
    ComisionEticaPageModule,
    AyudaPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
