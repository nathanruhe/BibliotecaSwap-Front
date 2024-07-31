export class Libro {

    public id_book:number
    public id_user: number
    public title: string;
    public author: string;
    public gender: string;
    public status: boolean;
    public photo: string;
    public localidad: string;
    public idioma: string;

    constructor(title: string, author: string, gender: string, status: boolean, photo: string, localidad: string, idioma: string, id_book: number = 0, id_user: number = 0) 
    {
        this.id_book = id_book;
        this.id_user = id_user;
        this.title = title;
        this.author = author;
        this.gender = gender;
        this.status = status;
        this.photo = photo;
        this.localidad = localidad;
        this.idioma = idioma;
    }
}

export const books: Libro[] = [
    new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Español', 1, 1),
    new Libro('Las dos torres', 'J.R.R. Tolkien', 'Aventuras', false, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Inglés',  2, 1),
    new Libro('El retorno del rey', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Francés', 3, 1),
    new Libro('El Hobbit', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Español', 4, 1),
    new Libro('El Silmarillion', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Español', 5, 1),
    
    
    new Libro('Dracula', 'Bram Stoker', 'Terror', false, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Madrid', 'Inglés', 6, 2),
    new Libro('Ready Player One', 'Ernest Cline', 'Ciencia ficción', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Madrid', 'Inglés', 7, 2),
    new Libro('It', 'Stephen King', 'Terror', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Alicante', 'Madrid', 8, 2),
    new Libro('El resplandor', 'Stephen King', 'Terror', false, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Madrid', 'Inglés', 9, 2),
    new Libro('El visitante', 'Stephen King', 'Terror', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Madrid', 'Inglés', 10, 2),
    new Libro('Carrie', 'Stephen King', 'Terror', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Madrid', 'Inglés', 11, 2),


    new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Español', 12, 3),
    new Libro('Las dos torres', 'J.R.R. Tolkien', 'Aventuras', false, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Español',  13, 3),
    new Libro('El retorno del rey', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Español', 14, 3),
    new Libro('El Hobbit', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Español', 15, 1),
    new Libro('El Silmarillion', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Español', 16, 3),
    new Libro('Dracula', 'Bram Stoker', 'Terror', false, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Inglés', 17, 2),
    new Libro('Ready Player One', 'Ernest Cline', 'Ciencia ficción', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Francés', 18, 3),
    new Libro('It', 'Stephen King', 'Terror', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona','Francés', 19, 3),
    new Libro('El resplandor', 'Stephen King', 'Terror', false, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Francés', 20, 3),
    new Libro('El visitante', 'Stephen King', 'Terror', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Francés', 21, 3),
    new Libro('Carrie', 'Stephen King', 'Terror', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Inglés', 22, 3),

    new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Español', 23, 4),
    new Libro('Las dos torres', 'J.R.R. Tolkien', 'Aventuras', false, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Español',  24, 4)
];