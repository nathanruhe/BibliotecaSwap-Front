export class Libro {

    // public id_book:number
    // public id_user: number
    public title: string;
    public author: string;
    public gender: string;
    // public status: boolean;
    public photo: string;
    // public localidad: string;
    // public idioma: string;
    public id_book:number

    constructor(title: string, author: string, gender: string, status: boolean, photo: string, localidad: string, idioma: string, id_book: number = 0, id_user: number = 0) 
    {
        // this.id_book = id_book;
        // this.id_user = id_user;
        this.title = title;
        this.author = author;
        this.gender = gender;
        // this.status = status;
        this.photo = photo;
        // this.localidad = localidad;
        // this.idioma = idioma;
        this.id_book = id_book = 0;
    }
}

export const books: Libro[] = [
    new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Alicante', 'Español'),
    new Libro('Las dos torres', 'J.R.R. Tolkien', 'Aventuras', false, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Sevilla', 'Inglés'),
    new Libro('El retorno del rey', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Lugo', 'Francés'),
    new Libro('El Hobbit', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Murcia', 'Español'),
    new Libro('El Silmarillion', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Español'),
    new Libro('Dracula', 'Bram Stoker', 'Terror', false, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Madrid', 'Español'),
    new Libro('Ready Player One', 'Ernest Cline', 'Ciencia ficción', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Pontevedra', 'Español')
];