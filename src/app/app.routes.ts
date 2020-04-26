import {RouterModule, Routes} from '@angular/router';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { TransportistaComponent } from './components/transportista/transportista.component';
import { TransportistasComponent } from './components/transportistas/transportistas.component';
import { FormularioServicioComponent } from './components/formulario-servicio/formulario-servicio.component';
import { SolicitarServicioComponent } from './components/solicitar-servicio/solicitar-servicio.component';
import { ModelVehiculoComponent } from './components/model-vehiculo/model-vehiculo.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { HeaderComponent } from './components/header/header.component';



const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home',component: HeaderComponent},
    { path: 'cliente', component: FormularioClienteComponent },

    { path: 'transportistas', component: TransportistasComponent },
    { path: 'formulario-usuario', component: FormularioUsuarioComponent}, 
    { path: 'transportista/:id', component:TransportistaComponent},
    { path: 'solicitar-servicio', component:SolicitarServicioComponent},
    { path: 'formulario-servicio',component:FormularioServicioComponent},
    { path: 'formulario-servicio/mapa',component:MapaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);