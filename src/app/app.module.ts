import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { APPROUTING } from './app.routes';
import { ModalTipoComponent } from './components/modal-tipo/modal-tipo.component';
import { TransportistasComponent } from './components/transportistas/transportistas.component';
import { TransportistaTarjetaComponent } from './components/transportista-tarjeta/transportista-tarjeta.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { TransportistaComponent } from './components/transportista/transportista.component';
import { TransportistaService } from './servicios/transportista.service';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { VehiculoTarjetaComponent } from './components/vehiculo-tarjeta/vehiculo-tarjeta.component';
import { FormularioServicioComponent } from './components/formulario-servicio/formulario-servicio.component';
import { SolicitarServicioComponent } from './components/solicitar-servicio/solicitar-servicio.component';
import { ModelVehiculoComponent } from './components/model-vehiculo/model-vehiculo.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ModalDireccionComponent } from './components/modal-direccion/modal-direccion.component';




@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FormularioClienteComponent,
    ModalTipoComponent,
    TransportistasComponent,
    TransportistaTarjetaComponent,
    FormularioUsuarioComponent,
    TransportistaComponent,
    VehiculoComponent,
    VehiculosComponent,
    VehiculoTarjetaComponent,
    FormularioServicioComponent,
    SolicitarServicioComponent,
    ModelVehiculoComponent,
    MapaComponent,
    ModalDireccionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APPROUTING,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWTxxcLO1Q5Xg26NKfkiV4t30z7u7Qoe0'
    })
  ],
  providers: [
    TransportistaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
