import { Component, ViewChild } from '@angular/core';
import { Usuario } from './usuario';
import { Cliente } from './cliente';
import { UsuarioComponent } from './usuario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebas <script>alert("hola");</script>';

  @ViewChild(UsuarioComponent)
  usuarioComponent: UsuarioComponent;

  usuario: Usuario;

  cliente: Cliente;

  marcado = false;

  usuarios: Usuario[] = [
    { email: 'email1', password: 'pass1' },
    { email: 'email2', password: 'pass2' },
    { email: 'email3', password: 'pass3' },
  ];

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

  constructor() {
    this.cliente = new Cliente();
    this.cliente.nombreCompleto = 'James,Bond';
  }
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

  cambiarValorMarcado(valor: boolean): void {
    this.marcado = valor;
  }

  rellenarUsuario(): void {
    this.usuario = { email: 'nuevo', password: 'pass' };
  }

  onEnter(valor: string): void {
    console.log(valor);
  }

  modificarUsuarioInicial(): void {
    this.usuarioInicial = new Usuario();
    this.usuarioInicial.email = 'CAMBIADO';
  }
}
