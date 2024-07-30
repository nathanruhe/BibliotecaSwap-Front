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
    new Libro('T1', 'A1', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Alicante', 'Español'),
    new Libro('T2', 'A2', 'Terror', false, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Sevilla', 'Inglés'),
    new Libro('T3', 'A3', 'Ciencia ficción', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Lugo', 'Francés'),
    new Libro('T4', 'A4', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Murcia', 'Español'),
    new Libro('T5', 'A5', 'Aventuras', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Barcelona', 'Español'),
    new Libro('T6', 'A6', 'Terror', false, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Madrid', 'Español'),
    new Libro('T7', 'A7', 'Ciencia ficción', true, 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Pontevedra', 'Español')
];