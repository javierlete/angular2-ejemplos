import { Component } from '@angular/core';

@Component(
{
    selector: 'app-hola',
    templateUrl: 'hola.component.html',
    styles: ['h1 { color: blue; }']
})
export class HolaComponent {
    desdeComponenteADom = 'Prueba desde componente';
    url = 'https://angular.io/assets/images/logos/angular/angular.svg';
    miEmail = 'javierlete@miemail.net';
    telefono = '941231234';

    obtenerUrl(): string {
        return this.url;
    }

    mostrarSaludo(nombre: string): void {
        console.log('Hola desde consola ' + nombre);
    }

    mostrarTitulo(titulo: string): void {
        console.log(titulo);
    }

    emailCambiado(email: string): void {
        this.miEmail = email;
        console.log(this.miEmail);
    }

    verTelefono(): void {
        console.log(this.telefono);
    }
}
