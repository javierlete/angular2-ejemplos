export class Cliente {

    nombre: string;
    apellidos: string;

    get nombreCompleto(): string {
        return `${this.nombre} ${this.apellidos}`;
    }
    set nombreCompleto(nombreApellidos: string) {
        this.nombre = nombreApellidos.split(',')[0];
        this.apellidos = nombreApellidos.split(',')[1];
    }
}
