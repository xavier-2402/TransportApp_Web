import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { FormularioTransportistaComponent } from './components/formulario-transportista/formulario-transportista.component';
import { APPROUTING } from './app.routes';
import { ModalTipoComponent } from './components/modal-tipo/modal-tipo.component';
import { TransportistasComponent } from './components/transportistas/transportistas.component';
import { TransportistaTarjetaComponent } from './components/transportista-tarjeta/transportista-tarjeta.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';




@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FormularioClienteComponent,
    FormularioTransportistaComponent,
    ModalTipoComponent,
    TransportistasComponent,
    TransportistaTarjetaComponent,
    FormularioUsuarioComponent,

  
  ],
  imports: [
    BrowserModule,
    APPROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
