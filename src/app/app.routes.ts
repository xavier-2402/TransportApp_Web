import {RouterModule, Routes} from '@angular/router';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { TransportistaComponent } from './components/transportista/transportista.component';
import { TransportistasComponent } from './components/transportistas/transportistas.component';
import { FormularioServicioComponent } from './components/formulario-servicio/formulario-servicio.component';
import { SolicitarServicioComponent } from './components/solicitar-servicio/solicitar-servicio.component';
import { FormularioTransportistaComponent } from './components/formulario-transportista/formulario-transportista.component';
import { ModelVehiculoComponent } from './components/model-vehiculo/model-vehiculo.component';






const ROUTES: Routes = [
    { path: 'home', component: LoginComponent },
    { path: 'cliente', component: FormularioClienteComponent },
    { path: 'transportista', component: FormularioTransportistaComponent },
    { path: 'transportistas', component: TransportistasComponent },
    { path: 'formulario-usuario', component: FormularioUsuarioComponent}, 
    { path: 'transportista/:id', component:TransportistaComponent},
    {path: 'solicitar-servicio', component:SolicitarServicioComponent},
    { path: 'formulario-servicio',component:FormularioServicioComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);