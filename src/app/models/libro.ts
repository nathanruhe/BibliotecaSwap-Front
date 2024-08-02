//import { Usuario, /*users*/ } from "./usuario";

export class Libro {

<<<<<<< HEAD
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
=======
    constructor(
        public title: string, 
        public author: string, 
        public gender: string, 
        public photo: string, 
        public idioma: string, 
        public province: string ="", 
        public like: boolean = false, 
        public status: boolean = true, 
        public id_book: number = 0, 
        public id_user: number = 0) 
    {
       /* let userProvince = province;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id_user === id_user) {
                userProvince = users[i].province;
                break;
            }
        }
        this.province = userProvince;*/
    }
}

/*export const books: Libro[] = [
    new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "", true, false, 1, 1),
    new Libro('Las dos torres', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "", false, false,   2, 1),
    new Libro('El retorno del rey', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', "",true, false,  3, 1),
    new Libro('El Hobbit', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "",true, false, 4, 1),
    new Libro('El Silmarillion', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "", true, false,  5, 1),
    
    
    new Libro('Dracula', 'Bram Stoker', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "",false, false, 6, 2),
    new Libro('Ready Player One', 'Ernest Cline', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "",true, false,  7, 2),
    new Libro('It', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Alicante', "", true, false,  8, 2),
    new Libro('El resplandor', 'Stephen King', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "",false, false, 9, 2),
    new Libro('El visitante', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "",true, false, 10, 2),
    new Libro('Carrie', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "", true, false,  11, 2),


    new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Policiaca', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "", true, false, 12, 3),
    new Libro('Las dos torres', 'J.R.R. Tolkien', 'Policiaca','https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "",   false, false, 13, 3),
    new Libro('El retorno del rey', 'J.R.R. Tolkien', 'Policiaca',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "",true, false,14, 3),
    new Libro('El Hobbit', 'J.R.R. Tolkien', 'Policiaca', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "",true, false, 15, 1),
    new Libro('El Silmarillion', 'J.R.R. Tolkien', 'Policiaca', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "", true, false, 16, 3),
    new Libro('Dracula', 'Bram Stoker', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "", false, false, 17, 2),
    new Libro('Ready Player One', 'Ernest Cline', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', "", true, false, 18, 3),
    new Libro('It', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg','Francés', "", true, false, 19, 3),
    new Libro('El resplandor', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', "", false, false, 20, 3),
    new Libro('El visitante', 'Stephen King', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Francés', "", true, false, 21, 3),
    new Libro('Carrie', 'Stephen King', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Inglés', "", true, false, 22, 3),

    new Libro('La comunidad del anillo', 'J.R.R. Tolkien', 'Terror',  'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "",true, false, 23, 4),
    new Libro('Las dos torres', 'J.R.R. Tolkien', 'Terror', 'https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg', 'Español', "",  false, false, 24, 4)
];*/
>>>>>>> main
