import { Component, Output, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';

@Component({
    selector: 'app-login',
    template: `
    <div class="form-group">
        <input class="form-control" type="email" [(ngModel)]="usuario.email" />
    </div>
    <div class="form-group">
        <input class="form-control" type="password" [(ngModel)]="usuario.password" />
    </div>
    <button class="btn btn-primary" (click)="onLogin()">Login</button>`
})
export class LoginComponent {
    @Output() login = new EventEmitter<Usuario>();

    credencialesCorrectas: Usuario = {
        email: 'javier@javier.com',
        password: 'contra'
    };

    usuario: Usuario = { email: '', password: '' };

    onLogin(): void {
        if (JSON.stringify(this.usuario) === JSON.stringify(this.credencialesCorrectas)) {
            console.log('Login', 'OK', this.usuario, this.credencialesCorrectas);
            this.login.emit(this.usuario);
        } else {
            console.log('Login', 'KO', this.usuario, this.credencialesCorrectas);
        }
    }
}
