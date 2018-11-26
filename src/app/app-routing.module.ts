import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'tabs', 
    loadChildren: './tabs/tabs.module#TabsPageModule' 
  },
  { 
    path: '', 
    loadChildren: './bienvenido/bienvenido.module#BienvenidoPageModule' 
  },
  { 
    path: 'bienvenido', 
    loadChildren: './bienvenido/bienvenido.module#BienvenidoPageModule' 
  },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule' 
  },
  { 
    path: 'registro', 
    loadChildren: './registro/registro.module#RegistroPageModule' 
  },
  { 
    path: 'olvidastecontrasena', 
    loadChildren: './olvidastecontrasena/olvidastecontrasena.module#OlvidastecontrasenaPageModule' 
  },
  { 
    path: 'cambiarcontrasena', 
    loadChildren: './cambiarcontrasena/cambiarcontrasena.module#CambiarcontrasenaPageModule' 
  },
  { 
    path: 'directorio', 
    loadChildren: './directorio/directorio.module#DirectorioPageModule' 
  },
  { 
    path: 'ayuda', 
    loadChildren: './ayuda/ayuda.module#AyudaPageModule' 
  },
  { 
    path: 'comandanciapuertos', 
    loadChildren: './comandanciapuertos/comandanciapuertos.module#ComandanciapuertosPageModule' 
  },
  { 
    path: 'comision-etica', 
    loadChildren: './comision-etica/comision-etica.module#ComisionEticaPageModule' 
  },
  { 
    path: 'division-personal', 
    loadChildren: './division-personal/division-personal.module#DivisionPersonalPageModule' 
  },
  { 
    path: 'buzon-sugerencias', 
    loadChildren: './buzon-sugerencias/buzon-sugerencias.module#BuzonSugerenciasPageModule' 
  },
  { 
    path: 'solicitud-enviada', 
    loadChildren: './solicitud-enviada/solicitud-enviada.module#SolicitudEnviadaPageModule' 
  },
  { 
    path: 'estados', 
    loadChildren: './estados/estados.module#EstadosPageModule' 
  },
  { 
    path: 'formulario', 
    loadChildren: './formulario/formulario.module#FormularioPageModule' 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
