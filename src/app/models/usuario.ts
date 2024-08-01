export class Usuario {

    constructor(
        public id_user: number,
        public name:string,
        public last_name: string,
        public email: string,
        public photo: string,
        public province: string,
        public availability: string,
        public genders: string[],
        public password: string
    ) {}
}

/*export const users: Usuario[] = [
    new Usuario(1,'Pepito', 'Perez', 'pperez@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg', 'Barcelona', 'mañana', ['Terror'], '1234'), 
    new Usuario(2,'Pepe', 'Garcia', 'pgarcia@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg', 'Barcelona', 'mañana', ['Terror', 'Policiaca'], '1234'),
    new Usuario(3,'Pepin', 'Perea', 'pperea@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg', 'Barcelona', 'tarde', ['Terror', 'Poesía'], '1234'),
    new Usuario(4,'Pepon', 'Pereda', 'ppereda@gmail.com', 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg', 'Barcelona', 'mañana', ['Terror', 'Astrología', 'Poesía'], '1234'),
];*/