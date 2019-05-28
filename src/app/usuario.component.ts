import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
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

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        for (const propName in changes) {
          if (changes.hasOwnProperty(propName)) {
            const changedProp = changes[propName];
            const to = JSON.stringify(changedProp.currentValue);
            if (changedProp.isFirstChange()) {
              console.log(`Initial value of ${propName} set to ${to}`);
            } else {
              const from = JSON.stringify(changedProp.previousValue);
              console.log(`${propName} changed from ${from} to ${to}`);
            }
          }
        }
      }
    // ngOnChanges(changes: SimpleChanges): void {
    //    this.logger.log('Ha habido un cambio');
    //
    //    this.logger.log('Valor anterior');
    //    this.logger.log(changes.usuario.previousValue);
    //    this.logger.log('Valor posterior/actual');
    //    this.logger.log(changes.usuario.currentValue);
    //}

    constructor(private logger: LoggerService) {}

    verUsuario(): void {
        this.logger.log(this.usuario);
    }
}
