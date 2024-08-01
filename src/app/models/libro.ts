export class Libro {

    public title: string;
    public author: string;
    public gender: string; 
    public photo: string;
    public idioma: string;
    public province: string;
    public like: boolean;
    public status: boolean;
    public id_book:number;
    public id_user: number;

    constructor(title: string, author: string, gender: string, photo: string, idioma: string, province: string = " ", like: boolean = false, status: boolean = true, id_book: number = 0, id_user: number = 0) 
    {
        this.title = title;
        this.author = author;
        this.gender = gender;
        this.photo = photo;
        this.idioma = idioma;
        this.province = province;
        this.like = like;
        this.status = status;
        this.id_book = id_book;
        this.id_user = id_user;
    }
}

export const books: Libro[] = [
    new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Aventuras', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', " ", false, true ),
    new Libro('Las dos torres', 'J.R.R. Tolkien', 'Aventuras', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', " ", false, false),
    new Libro('El retorno del rey', 'J.R.R. Tolkien', 'Aventuras', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', " ", true, true),
    new Libro('El Hobbit', 'J.R.R. Tolkien', 'Aventuras', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', " ", true, true),
    new Libro('El Silmarillion', 'J.R.R. Tolkien', 'Aventuras', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', " ", true, true),
    new Libro('Dracula', 'Bram Stoker', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', " ", false, true),
    new Libro('Ready Player One', 'Ernest Cline', 'Ciencia ficción', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', " ", true, true)
];