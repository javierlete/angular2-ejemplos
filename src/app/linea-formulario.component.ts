import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-linea-formulario',
    template: `
    <div class="form-group">
        <label for="{{id}}">{{texto}}</label>
        <input id="{{id}}" class="form-control" type="{{tipo}}" placeholder="{{texto}}"/>
    </div>
    `
})
export class LineaFormularioComponent {
    @Input() texto: string;
    @Input() tipo: string;
    @Input() id: string;
}
