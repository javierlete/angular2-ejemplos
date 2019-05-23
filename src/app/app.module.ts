import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaComponent } from './hola.component';
import { UsuarioComponent } from './usuario.component';
import { BotonComponent } from './boton.component';
import { LineaFormularioComponent } from './linea-formulario.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    UsuarioComponent,
    BotonComponent,
    LineaFormularioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
