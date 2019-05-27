import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebas <script>alert("hola");</script>';

  display = '';

  isBotonHabilitado = true;
  tipoMensaje = 'error';

  usuarioInicial: Usuario = {
    email: 'inicial',
    password: 'inicial',
    fechaAlta: new Date()
  };

  clasesAlerta = {
    'alert-danger': this.tipoMensaje === 'error',
    'alert-primary': this.tipoMensaje === 'normal'
  };

  botonPulsado(evento: MouseEvent): void {
    evento.preventDefault();
    console.log(evento.offsetX, evento.offsetY);
    this.isBotonHabilitado = false;
  }

  numeroPulsado(numero: number): void {
    this.display += '' + numero;
  }

  onLogin(usuario: Usuario): void {
    console.log('APP COMPONENT', usuario);
  }
}
