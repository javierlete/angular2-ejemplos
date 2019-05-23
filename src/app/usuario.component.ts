import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Usuario } from './usuario';
import { LoggerService } from './logger.service';

@Component({
    selector: 'app-usuario',
    templateUrl: 'usuario.component.html',
    // providers: [ Logger ]
})
export class UsuarioComponent implements OnChanges {
    @Input() usuario: Usuario = {
        email: '',
        password: ''
    };

    ngOnChanges(changes: SimpleChanges): void {
        this.logger.log('Ha habido un cambio');

        this.logger.log('Valor anterior');
        this.logger.log(changes.usuario.previousValue);
        this.logger.log('Valor posterior/actual');
        this.logger.log(changes.usuario.currentValue);
    }

    constructor(private logger: LoggerService) {}

    verUsuario(): void {
        this.logger.log(this.usuario);
    }
}
