import {RouterModule, Routes} from '@angular/router';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { FormularioTransportistaComponent } from './components/formulario-transportista/formulario-transportista.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';





const ROUTES: Routes = [
    { path: 'home', component: LoginComponent },
    { path: 'cliente', component: FormularioClienteComponent },
    { path: 'transportista', component: FormularioTransportistaComponent },
    { path: 'formulario-usuario', component: FormularioUsuarioComponent}, 


   
   
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);