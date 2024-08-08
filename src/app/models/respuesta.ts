import { Libro } from "./libro";
import { Usuario } from "./usuario";
import { Resena } from "./resena";

export class Respuesta {

    constructor(
        public error: boolean,
        public codigo: number,
        public mensaje: string,
        public dataBook: Libro,
        public dataUser: Usuario,
        public dataResena: Resena,
    ){}
}
