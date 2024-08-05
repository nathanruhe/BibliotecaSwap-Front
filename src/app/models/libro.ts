import { Usuario} from "./usuario";

export class Libro {

    constructor(
        public title: string, 
        public author: string,  
        public gender: string, 
        public photo: string, 
        public idioma: string, 
        public propietario: Usuario, 
        public prestatario: Usuario, 
        public startDate: Date = null,
        public endDate: Date = null,
        public like: boolean = false, 
        public status: boolean = true, 
        public id_book: number = 0, 
        public id_user: number = 0) 
    {
       
    }
}