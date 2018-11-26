import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { DirectorioPage } from '../directorio/directorio.page';
import { AyudaPage } from '../ayuda/ayuda.page';
import { EstadosPage } from '../estados/estados.page'
import { ComandanciapuertosPage } from '../comandanciapuertos/comandanciapuertos.page'
import { DivisionPersonalPage } from '../division-personal/division-personal.page'
import { ComisionEticaPage } from '../comision-etica/comision-etica.page'

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'home/comandanciapuertos',
        outlet: 'home',
        component: ComandanciapuertosPage
      },
      {
        path: 'home/division-personal',
        outlet: 'home',
        component: DivisionPersonalPage
      },
      {
        path: 'home/comision-etica',
        outlet: 'home',
        component: ComisionEticaPage
      },
      {
        path: 'directorio',
        outlet: 'directorio',
        component: DirectorioPage
      },
      {
        path: 'ayuda',
        outlet: 'ayuda',
        component: AyudaPage
      },
      // {
      //   path: 'estados',
      //   outlet: 'estados',
      //   component: EstadosPage
      // },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
